"use server";

import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { audit } from "@/lib/auth/audit";
import { assertSameOrigin, requireRole } from "@/lib/auth/session";
import { type AdminModule } from "@/lib/cms/admin-modules";
import { db } from "@/lib/db";
import { slugify } from "@/lib/cms/slug";

export type SaveState = { ok?: boolean; error?: string };

const baseSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(2, "Başlık en az 2 karakter olmalı.").max(160),
  slug: z.string().trim().max(180).optional(),
  summary: z.string().trim().max(5000).optional(),
  status: z.string().trim().max(30).default("DRAFT"),
  extra: z.string().trim().max(500).optional(),
  featured: z.string().optional(),
  showOnHome: z.string().optional(),
  imageUrl: z.string().trim().max(800).optional(),
  content: z.string().trim().max(100000).optional(),
  seoTitle: z.string().trim().max(180).optional(),
  seoDescription: z.string().trim().max(500).optional(),
  showInMenu: z.string().optional(),
  showInFooter: z.string().optional(),
});

export async function saveItem(module: AdminModule, _state: SaveState, formData: FormData): Promise<SaveState> {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN", "EDITOR"]);
  if (["users"].includes(module) && user.role !== "SUPER_ADMIN") return { error: "Bu modül yalnızca süper yöneticilere açıktır." };
  const parsed = baseSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };
  const value = parsed.data;
  let slug = slugify(value.slug || value.title);
  const publishing = value.status === "PUBLISHED";
  try {
    let recordId = value.id;
    switch (module) {
      case "services": {
        const data = {
          name: value.title, slug, shortDescription: value.summary,
          status: value.status, featured: Boolean(value.featured),
          showOnHome: Boolean(value.showOnHome), active: value.status !== "PASSIVE", coverImage: value.imageUrl || null,
          ...(publishing ? { publishedAt: new Date() } : {}),
        };
        const item = value.id
          ? await db.service.update({ where: { id: value.id }, data })
          : await db.service.create({ data: { ...data, content: { body: value.summary || "" } } });
        recordId = item.id;
        break;
      }
      case "projects": {
        const data = { name: value.title, slug, shortDescription: value.summary, clientName: value.extra, status: value.status, featured: Boolean(value.featured), showOnHome: Boolean(value.showOnHome), active: value.status !== "PASSIVE", coverImage: value.imageUrl || null };
        const item = value.id ? await db.project.update({ where: { id: value.id }, data }) : await db.project.create({ data: { ...data, content: { body: value.summary || "" } } });
        recordId = item.id;
        break;
      }
      case "pages": {
        const existing = value.id ? await db.page.findUnique({ where: { id: value.id } }) : null;
        const deletedWithSameSlug = !value.id ? await db.page.findUnique({ where: { slug } }) : null;
        if (existing && existing.template !== "DEFAULT") slug = existing.slug;
        const data = {
          name: value.title,
          slug,
          excerpt: value.summary || null,
          content: value.content || "",
          status: value.status,
          showInMenu: Boolean(value.showInMenu),
          showInFooter: Boolean(value.showInFooter),
          coverImage: value.imageUrl || null,
          seoTitle: value.seoTitle || null,
          seoDescription: value.seoDescription || null,
        };
        const item = value.id
          ? await db.page.update({ where: { id: value.id }, data })
          : deletedWithSameSlug?.deletedAt
            ? await db.page.update({ where: { id: deletedWithSameSlug.id }, data: { ...data, deletedAt: null } })
            : await db.page.create({ data: { ...data, template: "DEFAULT" } });
        recordId = item.id;
        break;
      }
      case "references": {
        const data = { company: value.title, website: value.extra, logo: value.imageUrl || null, active: value.status !== "PASSIVE", showOnHome: Boolean(value.showOnHome) };
        const item = value.id ? await db.reference.update({ where: { id: value.id }, data }) : await db.reference.create({ data });
        recordId = item.id;
        break;
      }
      case "testimonials": {
        const data = { name: value.title, comment: value.summary || "", company: value.extra, image: value.imageUrl || null, active: value.status !== "PASSIVE", rating: 5 };
        const item = value.id ? await db.testimonial.update({ where: { id: value.id }, data }) : await db.testimonial.create({ data });
        recordId = item.id;
        break;
      }
      case "menus": {
        const menu = await db.menu.upsert({ where: { location: value.status === "FOOTER" ? "FOOTER" : "HEADER" }, update: {}, create: { name: value.status === "FOOTER" ? "Alt Menü" : "Üst Menü", location: value.status === "FOOTER" ? "FOOTER" : "HEADER" } });
        const data = { label: value.title, url: value.extra || "/", menuId: menu.id, active: true };
        const item = value.id ? await db.menuItem.update({ where: { id: value.id }, data }) : await db.menuItem.create({ data });
        recordId = item.id;
        break;
      }
      case "contacts":
        if (!value.id) return { error: "Yeni talep panelden oluşturulamaz." };
        await db.contactSubmission.update({ where: { id: value.id }, data: { status: value.status } });
        break;
      case "users": {
        const role = ["SUPER_ADMIN", "EDITOR", "VIEWER"].includes(value.status) ? value.status : "VIEWER";
        if (value.id) {
          await db.user.update({ where: { id: value.id }, data: { name: value.title, email: value.extra?.toLowerCase(), role } });
        } else {
          if (!value.summary || value.summary.length < 12) return { error: "Yeni kullanıcı şifresi en az 12 karakter olmalı." };
          const item = await db.user.create({ data: { name: value.title, email: String(value.extra).toLowerCase(), role, passwordHash: await hash(value.summary, 12) } });
          recordId = item.id;
        }
        break;
      }
      default:
        return { error: "Bu modül bu formdan düzenlenemez." };
    }
    await audit({ userId: user.id, action: value.id ? "UPDATE" : "CREATE", module: module.toUpperCase(), recordId, newData: { ...value, summary: module === "users" ? undefined : value.summary } });
    revalidatePath(`/admin/${module}`);
    // Public sayfalar statik üretildiği için tüm site (header/footer menüleri, listeler, sitemap) yenilenir.
    revalidatePath("/", "layout");
    revalidatePath("/sitemap.xml");
    return { ok: true };
  } catch (error) {
    return { error: error instanceof Error && error.message.includes("Unique constraint") ? "Bu slug veya e-posta zaten kullanılıyor." : "Kayıt sırasında bir hata oluştu." };
  }
}

export async function deleteItem(module: AdminModule, id: string) {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN", "EDITOR"]);
  if (module === "users" && user.role !== "SUPER_ADMIN") throw new Error("Yetkisiz işlem.");
  switch (module) {
    case "services": await db.service.update({ where: { id }, data: { deletedAt: new Date() } }); break;
    case "projects": await db.project.update({ where: { id }, data: { deletedAt: new Date() } }); break;
    case "pages": {
      const page = await db.page.findUnique({ where: { id } });
      if (!page) throw new Error("Sayfa bulunamadı.");
      if (page.slug === "ana-sayfa") throw new Error("Ana sayfa silinemez.");
      await db.page.update({ where: { id }, data: { deletedAt: new Date() } });
      break;
    }
    case "references": await db.reference.update({ where: { id }, data: { deletedAt: new Date() } }); break;
    case "testimonials": await db.testimonial.update({ where: { id }, data: { deletedAt: new Date() } }); break;
    case "contacts": await db.contactSubmission.update({ where: { id }, data: { deletedAt: new Date() } }); break;
    case "media": await db.media.update({ where: { id }, data: { deletedAt: new Date() } }); break;
    case "menus": await db.menuItem.delete({ where: { id } }); break;
    case "users": if (id !== user.id) await db.user.update({ where: { id }, data: { deletedAt: new Date(), active: false } }); break;
    default: throw new Error("Silme desteklenmiyor.");
  }
  await audit({ userId: user.id, action: "DELETE", module: module.toUpperCase(), recordId: id });
  revalidatePath(`/admin/${module}`);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
}

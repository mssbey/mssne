"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { audit } from "@/lib/auth/audit";
import { assertSameOrigin, requireRole } from "@/lib/auth/session";
import { slugify } from "@/lib/cms/slug";
import { db } from "@/lib/db";

export type PromotionState = { ok?: boolean; error?: string };

const isMediaUrl = (value: string) => value.startsWith("/") || /^https:\/\/[a-z0-9-]+\.public\.blob\.vercel-storage\.com\//i.test(value);

const localImage = z.string().trim().max(800).refine((value) => !value || isMediaUrl(value), "Görsel medya kütüphanesinden seçilmelidir.");

const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(2).max(180),
  slug: z.string().trim().max(180).optional(),
  categoryId: z.string().min(1),
  description: z.string().trim().min(5).max(5000),
  features: z.string().max(5000),
  minQty: z.coerce.number().int().min(1).max(1_000_000),
  imageUrl: localImage,
  galleryUrls: z.string().max(20_000),
  status: z.enum(["DRAFT", "PUBLISHED", "PASSIVE"]),
  featured: z.string().optional(),
});

const categorySchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(2).max(120),
  slug: z.string().trim().max(150).optional(),
  description: z.string().trim().max(1000),
  imageUrl: localImage,
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  icon: z.string().trim().max(60),
  active: z.string().optional(),
});

export async function savePromotionProduct(_state: PromotionState, formData: FormData): Promise<PromotionState> {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN", "EDITOR"]);
  const parsed = productSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };
  const value = parsed.data;
  const data = {
    name: value.name,
    slug: slugify(value.slug || value.name),
    categoryId: value.categoryId,
    description: value.description,
    features: value.features.split(/\r?\n/).map((item) => item.trim()).filter(Boolean),
    minQty: value.minQty,
    image: value.imageUrl || null,
    status: value.status,
    active: value.status !== "PASSIVE",
    featured: value.featured === "on",
  };
  try {
    const product = value.id
      ? await db.promotionProduct.update({ where: { id: value.id }, data })
      : await db.promotionProduct.create({ data });
    const gallery = value.galleryUrls.split(/\r?\n|,/).map((item) => item.trim()).filter(isMediaUrl);
    await db.$transaction([
      db.promotionImage.deleteMany({ where: { productId: product.id } }),
      ...(gallery.length ? [db.promotionImage.createMany({ data: gallery.map((url, sortOrder) => ({ productId: product.id, url, alt: value.name, sortOrder })) })] : []),
    ]);
    await audit({ userId: user.id, action: value.id ? "UPDATE" : "CREATE", module: "PROMOTION_PRODUCT", recordId: product.id, newData: { ...data, gallery } });
    revalidatePath("/admin/promotions");
    revalidatePath("/promosyon", "layout");
    return { ok: true };
  } catch (error) {
    return { error: error instanceof Error && error.message.includes("Unique constraint") ? "Bu ürün slug’ı zaten kullanılıyor." : "Ürün kaydedilemedi." };
  }
}

export async function savePromotionCategory(_state: PromotionState, formData: FormData): Promise<PromotionState> {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN", "EDITOR"]);
  const parsed = categorySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };
  const value = parsed.data;
  const data = {
    name: value.name,
    slug: slugify(value.slug || value.name),
    description: value.description,
    image: value.imageUrl || null,
    color: value.color,
    icon: value.icon || "Gift",
    active: value.active === "on",
  };
  try {
    const category = value.id
      ? await db.promotionCategory.update({ where: { id: value.id }, data })
      : await db.promotionCategory.create({ data });
    await audit({ userId: user.id, action: value.id ? "UPDATE" : "CREATE", module: "PROMOTION_CATEGORY", recordId: category.id, newData: data });
    revalidatePath("/admin/promotions");
    revalidatePath("/promosyon", "layout");
    return { ok: true };
  } catch (error) {
    return { error: error instanceof Error && error.message.includes("Unique constraint") ? "Bu kategori slug’ı zaten kullanılıyor." : "Kategori kaydedilemedi." };
  }
}

export async function deletePromotionProduct(id: string) {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN", "EDITOR"]);
  await db.promotionProduct.update({ where: { id }, data: { deletedAt: new Date(), active: false } });
  await audit({ userId: user.id, action: "DELETE", module: "PROMOTION_PRODUCT", recordId: id });
  revalidatePath("/admin/promotions");
  revalidatePath("/promosyon", "layout");
}

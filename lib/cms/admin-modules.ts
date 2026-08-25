import { db } from "@/lib/db";

export const adminModules = [
  "services",
  "projects",
  "pages",
  "references",
  "testimonials",
  "menus",
  "contacts",
  "media",
  "users",
  "audit",
] as const;

export type AdminModule = (typeof adminModules)[number];

export const moduleMeta: Record<AdminModule, { title: string; singular: string; description: string }> = {
  services: { title: "Hizmetler", singular: "Hizmet", description: "Hizmet sayfaları, yayın ve vitrin ayarları" },
  projects: { title: "Projeler", singular: "Proje", description: "Portföy çalışmaları ve proje detayları" },
  pages: { title: "Sayfalar", singular: "Sayfa", description: "Sayfa içeriği, kapak görseli, SEO ve menü görünürlüğü" },
  references: { title: "Referanslar", singular: "Referans", description: "Firma logoları ve bağlantıları" },
  testimonials: { title: "Müşteri Yorumları", singular: "Yorum", description: "Yayınlanacak müşteri deneyimleri" },
  menus: { title: "Menüler", singular: "Menü öğesi", description: "Header ve footer bağlantıları" },
  contacts: { title: "İletişim Talepleri", singular: "Talep", description: "Formdan gelen talepler ve durumları" },
  media: { title: "Medya", singular: "Dosya", description: "Görsel ve belge kütüphanesi" },
  users: { title: "Yöneticiler", singular: "Kullanıcı", description: "Roller ve panel erişimi" },
  audit: { title: "Audit Log", singular: "Kayıt", description: "Kritik yönetim hareketleri" },
};

export type AdminRow = {
  id: string;
  title: string;
  subtitle: string;
  slug?: string;
  status: string;
  updatedAt: string;
  extra?: string;
  image?: string;
  content?: string;
  seoTitle?: string;
  seoDescription?: string;
  template?: string;
  showInMenu?: boolean;
  showInFooter?: boolean;
  protected?: boolean;
};

export async function listModule(module: AdminModule): Promise<AdminRow[]> {
  switch (module) {
    case "services":
      return (await db.service.findMany({ where: { deletedAt: null }, orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] }))
        .map((item) => ({ id: item.id, title: item.name, subtitle: item.shortDescription || "Açıklama yok", slug: item.slug, status: item.status, updatedAt: item.updatedAt.toISOString(), extra: item.showOnHome ? "Ana sayfada" : "", image: item.coverImage || undefined }));
    case "projects":
      return (await db.project.findMany({ where: { deletedAt: null }, orderBy: { updatedAt: "desc" } }))
        .map((item) => ({ id: item.id, title: item.name, subtitle: item.clientName || item.shortDescription || "Müşteri belirtilmedi", slug: item.slug, status: item.status, updatedAt: item.updatedAt.toISOString(), extra: item.featured ? "Öne çıkan" : "", image: item.coverImage || undefined }));
    case "pages":
      return (await db.page.findMany({ where: { deletedAt: null }, orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] }))
        .map((item) => ({
          id: item.id,
          title: item.name,
          subtitle: item.excerpt || "Kısa açıklama yok",
          slug: item.slug,
          status: item.status,
          updatedAt: item.updatedAt.toISOString(),
          extra: [item.showInMenu && "Üst menü", item.showInFooter && "Alt menü"].filter(Boolean).join(" · "),
          image: item.coverImage || undefined,
          content: item.content,
          seoTitle: item.seoTitle || undefined,
          seoDescription: item.seoDescription || undefined,
          template: item.template,
          showInMenu: item.showInMenu,
          showInFooter: item.showInFooter,
          protected: item.slug === "ana-sayfa",
        }));
    case "references":
      return (await db.reference.findMany({ where: { deletedAt: null }, orderBy: { sortOrder: "asc" } }))
        .map((item) => ({ id: item.id, title: item.company, subtitle: item.website || "Web sitesi yok", status: item.active ? "ACTIVE" : "PASSIVE", updatedAt: item.updatedAt.toISOString(), extra: item.showOnHome ? "Ana sayfada" : "", image: item.logo || undefined }));
    case "testimonials":
      return (await db.testimonial.findMany({ where: { deletedAt: null }, orderBy: { sortOrder: "asc" } }))
        .map((item) => ({ id: item.id, title: item.name, subtitle: item.comment, status: item.active ? "ACTIVE" : "PASSIVE", updatedAt: item.updatedAt.toISOString(), extra: `${item.rating}/5`, image: item.image || undefined }));
    case "menus":
      return (await db.menuItem.findMany({ include: { menu: true }, orderBy: [{ menuId: "asc" }, { sortOrder: "asc" }] }))
        .map((item) => ({ id: item.id, title: item.label, subtitle: item.url, status: item.active ? "ACTIVE" : "PASSIVE", updatedAt: item.menu.updatedAt.toISOString(), extra: item.menu.location }));
    case "contacts":
      return (await db.contactSubmission.findMany({ where: { deletedAt: null }, orderBy: { createdAt: "desc" } }))
        .map((item) => ({ id: item.id, title: item.name, subtitle: item.message, status: item.status, updatedAt: item.updatedAt.toISOString(), extra: item.email }));
    case "media":
      return (await db.media.findMany({ where: { deletedAt: null }, orderBy: { createdAt: "desc" } }))
        .map((item) => ({ id: item.id, title: item.title || item.originalName, subtitle: item.url, status: item.mimeType, updatedAt: item.updatedAt.toISOString(), extra: `${Math.ceil(item.size / 1024)} KB` }));
    case "users":
      return (await db.user.findMany({ where: { deletedAt: null }, orderBy: { createdAt: "asc" } }))
        .map((item) => ({ id: item.id, title: item.name, subtitle: item.email, status: item.active ? item.role : "PASSIVE", updatedAt: item.updatedAt.toISOString(), extra: item.lastLoginAt ? `Son giriş ${item.lastLoginAt.toLocaleDateString("tr-TR")}` : "Henüz giriş yok" }));
    case "audit":
      return (await db.auditLog.findMany({ include: { user: true }, orderBy: { createdAt: "desc" }, take: 250 }))
        .map((item) => ({ id: item.id, title: item.action, subtitle: `${item.module}${item.recordId ? ` · ${item.recordId}` : ""}`, status: item.user?.name || "Sistem", updatedAt: item.createdAt.toISOString(), extra: item.ip || "" }));
  }
}

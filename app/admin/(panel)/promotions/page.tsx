import { PromotionManager } from "@/components/admin/PromotionManager";
import { requireRole } from "@/lib/auth/session";
import { db } from "@/lib/db";

export default async function PromotionsAdminPage() {
  await requireRole(["SUPER_ADMIN", "EDITOR"]);
  const [categories, products, media] = await Promise.all([
    db.promotionCategory.findMany({ where: { deletedAt: null }, include: { _count: { select: { products: { where: { deletedAt: null } } } } }, orderBy: { sortOrder: "asc" } }),
    db.promotionProduct.findMany({ where: { deletedAt: null }, include: { category: true, images: { orderBy: { sortOrder: "asc" } } }, orderBy: [{ category: { sortOrder: "asc" } }, { sortOrder: "asc" }] }),
    db.media.findMany({ where: { deletedAt: null, mimeType: { startsWith: "image/" } }, orderBy: { createdAt: "desc" } }),
  ]);
  return (
    <>
      <div className="admin-page-heading"><div><p>Ürün kataloğu</p><h1>Promosyon ürünleri</h1><span>Kategorileri, ürünleri, kapak görsellerini ve ürün galerilerini yönetin.</span></div></div>
      <PromotionManager
        categories={categories.map((item) => ({ id: item.id, name: item.name, slug: item.slug, description: item.description || "", image: item.image || "", color: item.color, icon: item.icon || "Gift", active: item.active, productCount: item._count.products }))}
        products={products.map((item) => ({ id: item.id, name: item.name, slug: item.slug, description: item.description, categoryId: item.categoryId, categoryName: item.category.name, features: Array.isArray(item.features) ? item.features.map(String) : [], minQty: item.minQty, image: item.image || "", gallery: item.images.map((image) => image.url), status: item.status, featured: item.featured }))}
        media={media.map((item) => ({ url: item.url, title: item.title || item.originalName }))}
      />
    </>
  );
}

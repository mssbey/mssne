import { cache } from "react";
import { db } from "@/lib/db";
import { PROMO_CATEGORIES, type PromoCategory } from "@/lib/promosyon";

export const getCmsPromoCategories = cache(async (): Promise<PromoCategory[]> => {
  try {
    const categories = await db.promotionCategory.findMany({
      where: { deletedAt: null, active: true },
      include: {
        products: {
          where: { deletedAt: null, active: true, status: "PUBLISHED" },
          include: { images: { orderBy: { sortOrder: "asc" } } },
          orderBy: { sortOrder: "asc" },
        },
      },
      orderBy: { sortOrder: "asc" },
    });
    if (!categories.length) return PROMO_CATEGORIES;
    return categories.map((category) => ({
      slug: category.slug,
      title: category.name,
      desc: category.description || "",
      icon: category.icon || "Gift",
      image: category.image || "/promosyon/hero.jpg",
      color: category.color,
      products: category.products.map((product) => ({
        slug: product.slug,
        name: product.name,
        description: product.description,
        features: Array.isArray(product.features) ? product.features.map(String) : [],
        minQty: product.minQty,
        image: product.image || category.image || "/promosyon/hero.jpg",
        gallery: product.images.map((image) => image.url),
      })),
    }));
  } catch {
    return PROMO_CATEGORIES;
  }
});

export const getCmsPromoCategory = cache(async (slug: string) => {
  const categories = await getCmsPromoCategories();
  return categories.find((category) => category.slug === slug) || null;
});

export const getCmsPromoProduct = cache(async (categorySlug: string, productSlug: string) => {
  const category = await getCmsPromoCategory(categorySlug);
  const product = category?.products.find((item) => item.slug === productSlug) || null;
  return category && product ? { category, product } : null;
});

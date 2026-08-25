import { cache } from "react";
import { db } from "@/lib/db";
import { SERVICES, type ServiceData } from "@/lib/services";

function hydrateService(record: {
  slug: string;
  name: string;
  shortDescription: string | null;
  content: unknown;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
  coverImage: string | null;
}): ServiceData | null {
  const fallback = SERVICES.find((item) => item.slug === record.slug);
  const stored = record.content && typeof record.content === "object" ? record.content as Partial<ServiceData> : {};
  const base = fallback || (stored.seo && stored.faq ? stored as ServiceData : null);
  if (!base) return null;
  return {
    ...base,
    ...stored,
    slug: record.slug,
    title: record.name,
    shortTitle: record.name,
    navLabel: record.name,
    tagline: record.shortDescription || base.tagline,
    coverImage: record.coverImage || stored.coverImage || base.coverImage,
    seo: {
      ...base.seo,
      ...(stored.seo || {}),
      title: record.seoTitle || stored.seo?.title || base.seo.title,
      description: record.seoDescription || stored.seo?.description || base.seo.description,
      keywords: record.seoKeywords?.split(",").map((item) => item.trim()).filter(Boolean) || stored.seo?.keywords || base.seo.keywords,
    },
  };
}

export const getCmsServices = cache(async () => {
  try {
    const records = await db.service.findMany({
      where: { deletedAt: null, active: true, status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    });
    const values = records.map(hydrateService).filter((item): item is ServiceData => Boolean(item));
    return values.length ? values : SERVICES;
  } catch {
    return SERVICES;
  }
});

export const getCmsService = cache(async (slug: string) => {
  const services = await getCmsServices();
  return services.find((item) => item.slug === slug) || null;
});

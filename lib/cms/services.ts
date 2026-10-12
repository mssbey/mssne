import { cache } from "react";
import { db } from "@/lib/db";
import { SERVICES, type ServiceData } from "@/lib/services";

// Panelden yeni eklenen ve kodda şablonu olmayan hizmetler için sade bir sayfa iskeleti.
function genericService(record: { slug: string; name: string; shortDescription: string | null }, stored: object): ServiceData {
  const summary = record.shortDescription || "";
  const storedBody = "body" in stored ? stored.body : undefined;
  const body = typeof storedBody === "string" && storedBody.trim() ? storedBody : summary;
  return {
    slug: record.slug,
    navLabel: record.name,
    title: record.name,
    shortTitle: record.name,
    tagline: summary,
    heroIcon: "Sparkles",
    category: "Hizmetler",
    color: "#D9668A",
    seo: { title: `${record.name} | Ikarus Reklam`, description: summary || record.name, keywords: [] },
    intro: { eyebrow: "Hizmet detayı", heading: record.name, paragraphs: body.split(/\r?\n\s*\r?\n/).map((item) => item.trim()).filter(Boolean) },
    whyUs: [],
    useCases: [],
    process: [],
    materials: [],
    advantages: [],
    gallery: [],
    faq: [],
    cta: { heading: `${record.name} için teklif alın`, sub: "Projenizi anlatın, size en uygun çözümü birlikte planlayalım.", whatsappMessage: `Merhaba! ${record.name} hizmeti hakkında bilgi almak istiyorum.` },
  };
}

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
  const base = fallback || (stored.seo && stored.faq ? stored as ServiceData : genericService(record, stored));
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

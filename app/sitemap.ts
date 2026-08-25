import type { MetadataRoute } from "next";
import { db } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ikarusreklam.com";
  const legalPaths = ["gizlilik-politikasi", "iade-sartlari", "satis-sozlesmesi"];
  const [services, pages, projects] = await Promise.all([
    db.service.findMany({ where: { deletedAt: null, active: true, status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
    db.page.findMany({ where: { deletedAt: null, status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
    db.project.findMany({ where: { deletedAt: null, active: true, status: "PUBLISHED" }, select: { slug: true, updatedAt: true } }).catch(() => []),
  ]);
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...services.map((item) => ({ url: `${base}/hizmetler/${item.slug}`, lastModified: item.updatedAt, changeFrequency: "monthly" as const, priority: .8 })),
    ...projects.map((item) => ({ url: `${base}/projeler/${item.slug}`, lastModified: item.updatedAt, changeFrequency: "monthly" as const, priority: .7 })),
    ...pages.filter((item) => item.slug !== "ana-sayfa").map((item) => ({
      url: `${base}/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: legalPaths.includes(item.slug) ? "yearly" as const : "monthly" as const,
      priority: item.slug === "hizmetler" ? .9 : item.slug === "iletisim" ? .8 : legalPaths.includes(item.slug) ? .4 : .5,
    })),
  ];
}

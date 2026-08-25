import { cache } from "react";
import type { Metadata } from "next";
import { db } from "@/lib/db";

export const getManagedPage = cache(async (slug: string) => db.page.findUnique({ where: { slug } }));

export async function getManagedPageMetadata(slug: string, fallback: Metadata): Promise<Metadata> {
  const page = await getManagedPage(slug);
  if (!page || page.deletedAt || page.status !== "PUBLISHED") return fallback;
  return {
    ...fallback,
    title: page.seoTitle || page.name || fallback.title,
    description: page.seoDescription || page.excerpt || fallback.description,
  };
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import Image from "next/image";
import { ManagedPageContent } from "@/components/cms/ManagedPageContent";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await db.page.findFirst({ where: { slug, deletedAt: null, status: "PUBLISHED" } });
  if (!page) return {};
  return { title: page.seoTitle || page.name, description: page.seoDescription || page.excerpt };
}

export default async function CustomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await db.page.findFirst({ where: { slug, deletedAt: null, status: "PUBLISHED" } });
  if (!page || slug === "ana-sayfa") notFound();
  return <article className="public-article"><header><span>İkarus Reklam</span><h1>{page.name}</h1>{page.excerpt && <p>{page.excerpt}</p>}{page.coverImage && <div className="public-article-cover"><Image src={page.coverImage} alt={page.name} fill sizes="(max-width: 900px) 100vw, 900px" preload /></div>}</header><ManagedPageContent content={page.content} className="public-rich-text" /></article>;
}

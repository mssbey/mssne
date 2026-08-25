import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await db.project.findFirst({ where: { slug, deletedAt: null, active: true, status: "PUBLISHED" } });
  if (!project) return {};
  return { title: project.seoTitle || project.name, description: project.seoDescription || project.shortDescription };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await db.project.findFirst({ where: { slug, deletedAt: null, active: true, status: "PUBLISHED" }, include: { images: { orderBy: { sortOrder: "asc" } }, category: true } });
  if (!project) notFound();
  const content = project.content && typeof project.content === "object" && "body" in project.content ? String(project.content.body || "") : project.shortDescription || "";
  return <article className="public-article"><header><span>{project.category?.name || "Proje"} {project.clientName && `· ${project.clientName}`}</span><h1>{project.name}</h1><p>{project.shortDescription}</p>{project.coverImage && <div className="public-article-cover"><Image src={project.coverImage} alt={project.name} fill sizes="(max-width: 900px) 100vw, 900px" preload /></div>}</header><div className="public-rich-text">{content.split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></article>;
}

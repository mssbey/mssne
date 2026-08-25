import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FolderOpen } from "lucide-react";
import Image from "next/image";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { ManagedPageContent } from "@/components/cms/ManagedPageContent";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";

const fallbackMetadata: Metadata = {
  title: "Projeler | İkarus Reklam",
  description: "İkarus Reklam tarafından tasarlanan ve uygulanan seçili reklam, tabela ve baskı projeleri.",
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("projeler", fallbackMetadata);
}

export default async function ProjectsPage() {
  const [projects, page] = await Promise.all([
    db.project.findMany({ where: { deletedAt: null, active: true, status: "PUBLISHED" }, orderBy: [{ featured: "desc" }, { sortOrder: "asc" }] }),
    getManagedPage("projeler"),
  ]);
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();
  return <div className="public-cms-page"><header><span>Portföy</span><h1>{page?.name || "Fikirden uygulamaya işlerimiz."}</h1><p>{page?.excerpt || "Markalar için tasarladığımız seçili projeleri inceleyin."}</p>{page?.coverImage && <div className="managed-page-cover"><Image src={page.coverImage} alt={page.name} fill sizes="(max-width: 900px) 100vw, 950px" priority /></div>}</header><ManagedPageContent content={page?.content} /><div className="public-card-grid">{projects.map((project) => <Link href={`/projeler/${project.slug}`} key={project.id} className="public-content-card">{project.coverImage ? <div className="public-card-image"><Image src={project.coverImage} alt={project.name} fill sizes="(max-width: 700px) 100vw, 33vw" /></div> : <FolderOpen size={24} />}<small>{project.clientName || "İkarus Reklam"}</small><h2>{project.name}</h2><p>{project.shortDescription}</p><span>Projeyi incele <ArrowRight size={14} /></span></Link>)}{!projects.length && <div className="public-empty">Henüz yayınlanmış bir proje yok.</div>}</div></div>;
}

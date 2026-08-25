import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";
import GaleriClient from "./GaleriClient";

const fallbackMetadata: Metadata = {
  title: "Neon Çalışmalarımız | Ikarus Reklam",
  description: "İşletme, ev dekorasyonu ve özel günler için hazırladığımız neon çalışmalarından ilham alın.",
  alternates: { canonical: "https://www.ikarusreklam.com/galeri" },
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("galeri", fallbackMetadata);
}

export default async function GaleriPage() {
  const page = await getManagedPage("galeri");
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();

  return (
    <GaleriClient
      title={page?.name || "Neon Çalışmalarımız"}
      description={page?.excerpt}
      coverImage={page?.coverImage}
      content={page?.content}
    />
  );
}

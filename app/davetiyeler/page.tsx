import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";
import DavetiyelerClient from "./DavetiyelerClient";

const fallbackMetadata: Metadata = {
  title: "Davetiye Modelleri | Ikarus Reklam",
  description: "Düğün, nişan ve özel günler için davetiye modellerimizi inceleyin.",
  alternates: { canonical: "https://www.ikarusreklam.com/davetiyeler" },
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("davetiyeler", fallbackMetadata);
}

export default async function DavetiyelerPage() {
  const page = await getManagedPage("davetiyeler");
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();

  return (
    <DavetiyelerClient
      title={page?.name || "Davetiyeler"}
      description={page?.excerpt}
      coverImage={page?.coverImage}
      content={page?.content}
    />
  );
}

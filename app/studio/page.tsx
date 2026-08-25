import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";
import StudioClient from "./StudioClient";

const fallbackMetadata: Metadata = {
  title: "Neon Stüdyo | Ikarus Reklam",
  description: "Yazınızı, renginizi ve ölçünüzü seçerek kişiye özel neon tasarımınızı hazırlayın.",
  alternates: { canonical: "https://www.ikarusreklam.com/studio" },
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("studio", fallbackMetadata);
}

export default async function StudioPage() {
  const page = await getManagedPage("studio");
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();

  return (
    <StudioClient
      title={page?.name || "Neon Stüdyo"}
      description={page?.excerpt}
      coverImage={page?.coverImage}
      content={page?.content}
    />
  );
}

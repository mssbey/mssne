import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";
import UrunlerClient from "./UrunlerClient";

const fallbackMetadata: Metadata = {
  title: "Neon Ürünler | Ikarus Reklam",
  description: "Kişiye özel neon tabela ve dekoratif neon ürünlerini keşfedin.",
  alternates: { canonical: "https://www.ikarusreklam.com/urunler" },
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("urunler", fallbackMetadata);
}

export default async function UrunlerPage() {
  const page = await getManagedPage("urunler");
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();

  return (
    <UrunlerClient
      title={page?.name || "Tüm Ürünler"}
      description={page?.excerpt}
      coverImage={page?.coverImage}
      content={page?.content}
    />
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { getCmsPromoProduct } from "@/lib/cms/promotions";
import { getPublicSettings } from "@/lib/cms/settings";

type Props = { params: Promise<{ slug: string; productSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const value = await getCmsPromoProduct(slug, productSlug);
  if (!value) return {};
  return {
    title: `${value.product.name} | ${value.category.title} — İkarus Reklam`,
    description: value.product.description,
    openGraph: { images: [value.product.image] },
  };
}

export default async function PromotionProductPage({ params }: Props) {
  const { slug, productSlug } = await params;
  const [value, settings] = await Promise.all([getCmsPromoProduct(slug, productSlug), getPublicSettings()]);
  if (!value) notFound();
  const { category, product } = value;
  const gallery = [product.image, ...(product.gallery || [])].filter((url, index, all) => all.indexOf(url) === index);
  return (
    <main className="promo-product-page">
      <div className="promo-product-wrap">
        <nav><Link href="/promosyon">Promosyon</Link><span>/</span><Link href={`/promosyon/${category.slug}`}>{category.title}</Link><span>/</span><strong>{product.name}</strong></nav>
        <div className="promo-product-hero">
          <div className="promo-product-cover"><Image src={product.image} alt={product.name} fill sizes="(max-width: 900px) 100vw, 55vw" preload /></div>
          <section>
            <span style={{ color: category.color }}>{category.title}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <ul>{product.features.map((feature) => <li key={feature}><Check size={15} style={{ color: category.color }} />{feature}</li>)}</ul>
            <div className="promo-product-order"><strong>Minimum sipariş: {product.minQty} adet</strong><a href={`https://wa.me/${settings.contact.whatsapp}?text=${encodeURIComponent(`Merhaba! "${product.name}" için teklif almak istiyorum.`)}`} target="_blank" rel="noreferrer" style={{ background: category.color }}><MessageCircle size={17} /> Teklif al</a></div>
          </section>
        </div>
        {gallery.length > 1 && <section className="promo-gallery"><header><span>Ürün görselleri</span><h2>Galeri</h2></header><div>{gallery.map((url, index) => <figure key={url}><Image src={url} alt={`${product.name} görsel ${index + 1}`} fill sizes="(max-width: 700px) 50vw, 33vw" /></figure>)}</div></section>}
        <Link className="promo-back" href={`/promosyon/${category.slug}`}><ArrowLeft size={15} /> {category.title} kategorisine dön</Link>
      </div>
    </main>
  );
}

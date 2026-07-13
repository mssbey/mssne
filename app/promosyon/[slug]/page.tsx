import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { PROMO_CATEGORIES, getPromoCategory } from "@/lib/promosyon";
import { CONTACT } from "@/lib/data";

export function generateStaticParams() {
  return PROMO_CATEGORIES.map((c) => ({ slug: c.slug }));
}

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getPromoCategory(slug);
  if (!cat) return {};
  return {
    title: `${cat.title} — Promosyon Ürünleri | Ikarus Reklam`,
    description: cat.desc,
  };
}

export default async function PromoCategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getPromoCategory(slug);
  if (!cat) notFound();

  const others = PROMO_CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 5);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-black/30 mb-8">
          <Link href="/" className="hover:text-black transition-colors cursor-none">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/promosyon" className="hover:text-black transition-colors cursor-none">Promosyon Ürünleri</Link>
          <span>/</span>
          <span className="text-black/60">{cat.title}</span>
        </nav>

        {/* Kategori başlığı */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-[4px] mb-3 block"
              style={{ color: cat.color }}
            >
              Promosyon Ürünleri
            </span>
            <h1 className="text-[clamp(28px,4vw,48px)] font-black tracking-[-1.5px] text-black leading-tight mb-4">
              {cat.title}
            </h1>
            <p className="text-black/50 text-base leading-relaxed mb-6">{cat.desc}</p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                `Merhaba! "${cat.title}" kategorisinde promosyon ürünü yaptırmak istiyorum. Teklif alabilir miyim?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-black text-sm transition-all hover:scale-105 cursor-none"
              style={{ background: "#25D366", boxShadow: "0 0 24px rgba(37,211,102,0.3)" }}
            >
              <MessageCircle size={16} /> Hızlı Teklif Al
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-black/8">
            <Image
              src={cat.image}
              alt={cat.title}
              width={800}
              height={520}
              priority
              className="w-full h-[280px] md:h-[340px] object-cover"
            />
          </div>
        </div>

        {/* Ürünler */}
        <h2 className="text-xl font-black text-black tracking-[-0.5px] mb-6">Ürün Seçenekleri</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {cat.products.map((p) => (
            <div
              key={p.slug}
              className="rounded-2xl border border-black/8 bg-white overflow-hidden flex flex-col hover:border-black/18 transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-black leading-snug mb-3">{p.name}</h3>
                <p className="text-sm text-black/45 leading-relaxed mb-4 flex-1">{p.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-black/50">
                      <Check size={12} style={{ color: cat.color }} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <span className="text-xs text-black/35">Min. {p.minQty} adet</span>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                      `Merhaba! "${p.name}" için teklif almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold text-black transition-all hover:scale-105 cursor-none"
                    style={{ background: cat.color, boxShadow: `0 0 14px ${cat.color}40` }}
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diğer kategoriler */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-black tracking-[-0.5px]">Diğer Kategoriler</h2>
          <Link
            href="/promosyon"
            className="flex items-center gap-1.5 text-sm text-black/40 hover:text-black transition-colors cursor-none"
          >
            <ArrowLeft size={14} /> Tüm kategoriler
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/promosyon/${c.slug}`}
              className="group rounded-2xl border border-black/8 bg-white overflow-hidden hover:border-black/20 hover:-translate-y-1 transition-all cursor-none"
            >
              <div className="h-24 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs font-bold text-black p-3">{c.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

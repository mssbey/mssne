import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PROMO_CATEGORIES } from "@/lib/promosyon";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Promosyon Ürünleri — Ikarus Reklam",
  description:
    "Kişiye özel termos, kupa, defter, kalem, powerbank ve daha fazlası. Logonuzla markanızı her yere taşıyın.",
};

export default function PromosyonPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-14 border border-black/8">
          <Image
            src="/promosyon/hero.jpg"
            alt="Promosyon ürünleri"
            width={1400}
            height={480}
            priority
            className="w-full h-[280px] md:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent flex items-center">
            <div className="px-8 md:px-14 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#F2B84B] mb-3 block">
                Kurumsal Hediye & Promosyon
              </span>
              <h1 className="text-[clamp(28px,4.5vw,52px)] font-black tracking-[-1.5px] text-white leading-tight mb-4">
                Promosyon Ürünleri
              </h1>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Termos&apos;tan kupaya, defterden powerbank&apos;e — logonuzu taşıyan
                15 farklı ürün kategorisi. Tasarım desteği bizden.
              </p>
            </div>
          </div>
        </div>

        {/* Kategoriler */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {PROMO_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/promosyon/${cat.slug}`}
              className="group relative rounded-2xl border border-black/8 bg-white overflow-hidden hover:border-black/20 hover:-translate-y-1 transition-all duration-300 cursor-none"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={400}
                  height={280}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(180deg, transparent 40%, ${cat.color}30 100%)` }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-bold text-black mb-1 leading-snug">{cat.title}</h2>
                <p className="text-xs text-black/40 leading-relaxed line-clamp-2 mb-2">{cat.desc}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.products.length} ürün <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Teklif CTA */}
        <div className="rounded-3xl border border-black/8 bg-white p-10 text-center">
          <h2 className="text-2xl font-black text-black tracking-[-1px] mb-3">
            Toplu sipariş mi vereceksiniz?
          </h2>
          <p className="text-black/45 text-sm max-w-md mx-auto mb-6">
            Adet, baskı tekniği ve teslim süresine göre size özel fiyat çıkaralım.
            Logonuzu gönderin, ücretsiz görsel taslak hazırlayalım.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
              "Merhaba! Promosyon ürünleri için teklif almak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-sm transition-all hover:scale-105 cursor-none"
            style={{ background: "#25D366", boxShadow: "0 0 28px rgba(37,211,102,0.35)" }}
          >
            <MessageCircle size={18} /> WhatsApp&apos;tan Teklif Al
          </a>
        </div>
      </div>
    </div>
  );
}

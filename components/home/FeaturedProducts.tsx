import Link from "next/link";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts() {
  const products = getBestSellers().slice(0, 6);

  return (
    <section className="py-28 px-6 bg-[#F3EDEA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#5FAE7F] mb-4 block">
              Çok Satanlar
            </span>
            <h2
              className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px] leading-tight"
              style={{
                background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sizin İçin
              <br />
              Seçtiklerimiz
            </h2>
          </div>
          <Link
            href="/urunler"
            className="text-sm text-black/40 hover:text-black transition-colors cursor-none shrink-0"
          >
            Tüm Ürünleri Gör →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

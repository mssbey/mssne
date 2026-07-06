"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/store/useFavorites";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { useEffect, useState } from "react";

export default function FavorilerPage() {
  const { ids } = useFavorites();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  const favorites = PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-3 block">
            Listelerim
          </span>
          <h1
            className="text-[clamp(28px,4vw,48px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Favorilerim
          </h1>
        </motion.div>

        {!hydrated ? null : favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-5 text-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "rgba(217,102,138,0.08)", border: "1px solid rgba(217,102,138,0.2)" }}
            >
              <Heart size={32} className="text-[#D9668A]/40" />
            </div>
            <p className="text-black/40 text-base">Henüz favori ürününüz yok</p>
            <p className="text-black/25 text-sm max-w-xs">
              Ürünleri incelerken kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.
            </p>
            <Link
              href="/urunler"
              className="px-6 py-3 rounded-full font-semibold text-sm text-black cursor-none mt-2"
              style={{ background: "#D9668A", boxShadow: "0 0 24px rgba(217,102,138,0.35)" }}
            >
              Ürünleri Keşfet
            </Link>
          </div>
        ) : (
          <>
            <p className="text-black/35 text-sm mb-8">{favorites.length} ürün favorilendi</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {favorites.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

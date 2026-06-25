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
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#FF00C8] mb-3 block">
            Listelerim
          </span>
          <h1
            className="text-[clamp(28px,4vw,48px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
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
              style={{ background: "rgba(255,0,200,0.08)", border: "1px solid rgba(255,0,200,0.2)" }}
            >
              <Heart size={32} className="text-[#FF00C8]/40" />
            </div>
            <p className="text-white/40 text-base">Henüz favori ürününüz yok</p>
            <p className="text-white/25 text-sm max-w-xs">
              Ürünleri incelerken kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.
            </p>
            <Link
              href="/urunler"
              className="px-6 py-3 rounded-full font-semibold text-sm text-black cursor-none mt-2"
              style={{ background: "#FF00C8", boxShadow: "0 0 24px rgba(255,0,200,0.35)" }}
            >
              Ürünleri Keşfet
            </Link>
          </div>
        ) : (
          <>
            <p className="text-white/35 text-sm mb-8">{favorites.length} ürün favorilendi</p>
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

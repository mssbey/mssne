"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { useFavorites } from "@/lib/store/useFavorites";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCart();
  const { toggle, isFavorite } = useFavorites();
  const fav = isFavorite(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultColor = product.colors[0]?.name ?? "";
    const defaultSize = product.sizes[0]?.label ?? "";
    addItem(product, defaultColor, defaultSize, product.price);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-black/8 bg-[#FFFFFF] overflow-hidden hover:border-black/18 transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
    >
      <Link href={`/urunler/${product.slug}`} className="flex flex-col flex-1 cursor-none">
        {/* Image area */}
        <div
          className="relative h-52 flex items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${product.glowColor}18 0%, transparent 70%), #090909`,
          }}
        >
          <span
            className="text-5xl select-none transition-transform duration-500 group-hover:scale-110"
            style={{
              filter: `drop-shadow(0 0 20px ${product.glowColor})`,
            }}
          >
            {product.emoji}
          </span>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: `${product.glowColor}20`,
                  color: product.glowColor,
                  border: `1px solid ${product.glowColor}40`,
                }}
              >
                {product.badge}
              </span>
            )}
            {product.isNew && !product.badge && (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F2B84B]/15 text-[#F2B84B] border border-[#F2B84B]/30">
                Yeni
              </span>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={handleFavorite}
            className={cn(
              "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border transition-all cursor-none",
              fav
                ? "bg-[#D9668A]/20 border-[#D9668A]/50 text-[#D9668A]"
                : "bg-black/40 border-white/10 text-white/40 hover:text-white/80"
            )}
          >
            <Heart size={13} fill={fav ? "#D9668A" : "none"} />
          </button>

          {/* Stock */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white/60 text-sm font-medium">Stokta Yok</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 flex-1 flex flex-col">
          <p className="text-xs text-black/30 mb-1 uppercase tracking-wider">{product.category}</p>
          <h3 className="text-sm font-bold text-black mb-2 leading-snug flex-1">{product.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  fill={i < Math.floor(product.rating) ? product.glowColor : "none"}
                  stroke={i < Math.floor(product.rating) ? product.glowColor : "rgba(0,0,0,0.2)"}
                />
              ))}
            </div>
            <span className="text-xs text-black/30">({product.reviewCount})</span>
          </div>

          {/* Price + Cart */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/5">
            <div>
              <span className="text-lg font-black text-black">{formatPrice(product.price)}</span>
              <span className="text-xs text-black/30 ml-1">den</span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-black transition-all hover:scale-105 disabled:opacity-40 cursor-none"
              style={{ background: product.glowColor, boxShadow: `0 0 16px ${product.glowColor}40` }}
            >
              <ShoppingBag size={12} /> Sepete
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

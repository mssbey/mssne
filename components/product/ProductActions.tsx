"use client";

import { useState } from "react";
import { ShoppingBag, Heart, MessageCircle, Check, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { useFavorites } from "@/lib/store/useFavorites";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function ProductActions({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();
  const { toggle, isFavorite } = useFavorites();
  const fav = isFavorite(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor.name, selectedSize.label, 0);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const waLink = `https://wa.me/905468156089?text=${encodeURIComponent(
    `Merhaba! Şu ürün için teklif almak istiyorum:\n\n• ${product.name}\n  Renk: ${selectedColor.name}\n  Boyut: ${selectedSize.label} (${selectedSize.cm})\n  Adet: ${quantity}\n\nFiyat bilgisi alabilir miyim?`
  )}`;

  return (
    <div className="space-y-6">
      {/* Teklif notu */}
      <div
        className="rounded-2xl border px-5 py-4"
        style={{ borderColor: `${product.glowColor}30`, background: `${product.glowColor}08` }}
      >
        <p className="text-sm font-bold" style={{ color: product.glowColor }}>
          Kişiye özel üretim — fiyat için teklif alın
        </p>
        <p className="text-xs text-black/40 mt-1">
          Boyut, renk ve adedinizi seçin; WhatsApp üzerinden dakikalar içinde net fiyat verelim.
        </p>
      </div>

      {/* Color */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-black/30 mb-3">
          Renk — <span className="text-black/60 normal-case font-normal">{selectedColor.name}</span>
        </p>
        <div className="flex flex-wrap gap-2.5">
          {product.colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => setSelectedColor(c)}
              title={c.name}
              className="w-9 h-9 rounded-full transition-all cursor-none hover:scale-110"
              style={{
                background: c.hex,
                boxShadow: selectedColor.hex === c.hex
                  ? `0 0 0 2px #FBF8F6, 0 0 0 4px ${c.hex}, 0 0 16px ${c.hex}`
                  : `0 0 8px ${c.hex}40`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-black/30 mb-3">
          Boyut — <span className="text-black/60 normal-case font-normal">{selectedSize.label} ({selectedSize.cm})</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s.key}
              onClick={() => setSelectedSize(s)}
              className="flex flex-col items-center px-4 py-2.5 rounded-xl border transition-all cursor-none min-w-[68px]"
              style={{
                borderColor: selectedSize.key === s.key ? product.glowColor : "rgba(0,0,0,0.08)",
                background: selectedSize.key === s.key ? `${product.glowColor}10` : "transparent",
                color: selectedSize.key === s.key ? product.glowColor : "rgba(0,0,0,0.45)",
              }}
            >
              <span className="text-sm font-bold">{s.label}</span>
              <span className="text-[10px] opacity-60">{s.cm}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-black/30 mb-3">Adet</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-black hover:border-black/25 transition-all cursor-none"
          >
            <Minus size={14} />
          </button>
          <span className="text-xl font-bold text-black w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-black hover:border-black/25 transition-all cursor-none"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 pt-2">
        <button
          onClick={handleAddToCart}
          className={cn(
            "flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.02] cursor-none",
            added ? "bg-green-500 text-black" : "text-black"
          )}
          style={
            added
              ? { boxShadow: "0 0 24px rgba(34,197,94,0.3)" }
              : { background: product.glowColor, boxShadow: `0 0 32px ${product.glowColor}50` }
          }
        >
          {added ? <><Check size={18} /> Sepete Eklendi</> : <><ShoppingBag size={18} /> Sepete Ekle</>}
        </button>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-black text-base transition-all hover:scale-[1.02] cursor-none border border-[#25D366]/30 hover:bg-[#25D366]/10"
        >
          <MessageCircle size={18} className="text-[#25D366]" />
          WhatsApp ile Teklif Al
        </a>

        <button
          onClick={() => toggle(product.id)}
          className={cn(
            "flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-medium border transition-all cursor-none",
            fav
              ? "border-[#D9668A]/40 text-[#D9668A] bg-[#D9668A]/8"
              : "border-black/8 text-black/40 hover:border-black/15 hover:text-black/70"
          )}
        >
          <Heart size={15} fill={fav ? "#D9668A" : "none"} />
          {fav ? "Favorilerden Çıkar" : "Favorilere Ekle"}
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {[
          { icon: "🛡️", label: "2 Yıl Garanti" },
          { icon: "🚀", label: product.deliveryDays },
          { icon: "✅", label: "Ücretsiz Montaj Seti" },
          { icon: "↩️", label: "30 Gün İade" },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-2 p-3 rounded-xl border border-black/6 bg-black/2">
            <span className="text-lg">{b.icon}</span>
            <span className="text-xs text-black/40">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ShoppingBag, Heart, MessageCircle, Check, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { useFavorites } from "@/lib/store/useFavorites";
import { formatPrice } from "@/lib/utils";
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

  const unitPrice = product.price + (selectedSize?.priceAdd ?? 0);
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor.name, selectedSize.label, unitPrice);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const waLink = `https://wa.me/905001234567?text=${encodeURIComponent(
    `Merhaba! Şu ürünü sipariş etmek istiyorum:\n\n• ${product.name}\n  Renk: ${selectedColor.name}\n  Boyut: ${selectedSize.label} (${selectedSize.cm})\n  Adet: ${quantity}\n  Tutar: ${formatPrice(totalPrice)}\n\nNasıl devam edebilirim?`
  )}`;

  return (
    <div className="space-y-6">
      {/* Price */}
      <div>
        <span
          className="text-4xl font-black"
          style={{ color: product.glowColor, filter: `drop-shadow(0 0 12px ${product.glowColor}60)` }}
        >
          {formatPrice(totalPrice)}
        </span>
        {quantity > 1 && (
          <span className="text-sm text-white/30 ml-2">({formatPrice(unitPrice)} / adet)</span>
        )}
        {selectedSize.priceAdd > 0 && (
          <p className="text-xs text-white/30 mt-1">Temel fiyat: {formatPrice(product.price)} + boyut farkı: +{formatPrice(selectedSize.priceAdd)}</p>
        )}
      </div>

      {/* Color */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">
          Renk — <span className="text-white/60 normal-case font-normal">{selectedColor.name}</span>
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
                  ? `0 0 0 2px #050505, 0 0 0 4px ${c.hex}, 0 0 16px ${c.hex}`
                  : `0 0 8px ${c.hex}40`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">
          Boyut — <span className="text-white/60 normal-case font-normal">{selectedSize.label} ({selectedSize.cm})</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s.key}
              onClick={() => setSelectedSize(s)}
              className="flex flex-col items-center px-4 py-2.5 rounded-xl border transition-all cursor-none min-w-[68px]"
              style={{
                borderColor: selectedSize.key === s.key ? product.glowColor : "rgba(255,255,255,0.08)",
                background: selectedSize.key === s.key ? `${product.glowColor}10` : "transparent",
                color: selectedSize.key === s.key ? product.glowColor : "rgba(255,255,255,0.45)",
              }}
            >
              <span className="text-sm font-bold">{s.label}</span>
              <span className="text-[10px] opacity-60">{s.cm}</span>
              {s.priceAdd > 0 && (
                <span className="text-[10px] opacity-50">+{formatPrice(s.priceAdd)}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Adet</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all cursor-none"
          >
            <Minus size={14} />
          </button>
          <span className="text-xl font-bold text-white w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all cursor-none"
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
            added ? "bg-green-500 text-white" : "text-black"
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
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-[1.02] cursor-none border border-[#25D366]/30 hover:bg-[#25D366]/10"
        >
          <MessageCircle size={18} className="text-[#25D366]" />
          WhatsApp ile Direkt Sipariş
        </a>

        <button
          onClick={() => toggle(product.id)}
          className={cn(
            "flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-medium border transition-all cursor-none",
            fav
              ? "border-[#FF00C8]/40 text-[#FF00C8] bg-[#FF00C8]/8"
              : "border-white/8 text-white/40 hover:border-white/15 hover:text-white/70"
          )}
        >
          <Heart size={15} fill={fav ? "#FF00C8" : "none"} />
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
          <div key={b.label} className="flex items-center gap-2 p-3 rounded-xl border border-white/6 bg-white/2">
            <span className="text-lg">{b.icon}</span>
            <span className="text-xs text-white/40">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

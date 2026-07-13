"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/store/useCart";

export default function SepetPage() {
  const { items, removeItem, updateQuantity, clearCart, buildWhatsAppMessage } = useCart();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  if (!hydrated) return null;

  const waLink = `https://wa.me/905001234567?text=${buildWhatsAppMessage()}`;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link href="/urunler" className="flex items-center gap-2 text-sm text-black/35 hover:text-black mb-6 transition-colors cursor-none w-fit">
            <ArrowLeft size={14} /> Alışverişe Devam Et
          </Link>
          <h1
            className="text-[clamp(28px,4vw,48px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sepetim
          </h1>
        </motion.div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-5 text-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center border border-black/8 bg-black/3">
              <ShoppingBag size={32} className="text-black/20" />
            </div>
            <p className="text-black/40">Sepetiniz boş</p>
            <Link
              href="/urunler"
              className="px-6 py-3 rounded-full font-semibold text-sm text-black cursor-none"
              style={{ background: "#D9668A" }}
            >
              Ürünleri Keşfet
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-5 p-5 rounded-2xl border border-black/8 bg-[#FFFFFF]"
                >
                  {/* Preview */}
                  <div
                    className="w-24 h-24 rounded-xl flex items-center justify-center text-4xl shrink-0"
                    style={{
                      background: `radial-gradient(circle, ${item.product.glowColor}18 0%, transparent 70%)`,
                    }}
                  >
                    {item.product.emoji}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <Link
                          href={`/urunler/${item.product.slug}`}
                          className="font-bold text-black hover:text-[#D9668A] transition-colors cursor-none text-sm leading-tight block"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-black/35 mt-1">
                          {item.selectedColor} · {item.selectedSize}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                        className="text-black/20 hover:text-red-400 transition-colors cursor-none shrink-0 mt-0.5"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/25 transition-all cursor-none"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-bold text-black w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/25 transition-all cursor-none"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-xs font-semibold text-black/40">
                        Fiyat teklifle netleşir
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={clearCart}
                className="text-xs text-black/25 hover:text-red-400/70 transition-colors cursor-none mt-2"
              >
                Sepeti Temizle
              </button>
            </div>

            {/* Summary */}
            <div className="sticky top-28 space-y-4">
              <div className="p-6 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <h2 className="font-bold text-black mb-5">Sipariş Özeti</h2>

                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex justify-between text-sm">
                      <span className="text-black/40 truncate mr-2">
                        {item.product.name} ×{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/5 pt-4 mb-6">
                  <p className="text-sm text-black/50 leading-relaxed">
                    Fiyatlar boyut, renk ve adede göre kişiye özel hesaplanır.
                    Listenizi WhatsApp&apos;tan gönderin, dakikalar içinde net teklif verelim.
                  </p>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-black transition-all hover:scale-[1.02] cursor-none"
                  style={{ background: "#25D366", boxShadow: "0 0 24px rgba(37,211,102,0.3)" }}
                >
                  <MessageCircle size={18} />
                  WhatsApp ile Teklif Al
                </a>

                <p className="text-[11px] text-black/20 text-center mt-3">
                  Liste detayları WhatsApp&apos;a aktarılır, teklif sonrası siparişiniz teyit edilir
                </p>
              </div>

              <div className="p-4 rounded-xl border border-black/5 bg-black/2 space-y-2">
                {["🛡️ 2 Yıl Garanti", "🚀 Hızlı Kargo", "✅ Ücretsiz Montaj Seti", "↩️ 30 Gün İade"].map((f) => (
                  <p key={f} className="text-xs text-black/30">{f}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

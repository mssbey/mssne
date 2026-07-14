"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/store/useCart";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount, buildWhatsAppMessage } = useCart();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const waLink = `https://wa.me/905468156089?text=${buildWhatsAppMessage()}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col"
            style={{ background: "#FFFFFF", borderLeft: "1px solid rgba(0,0,0,0.08)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-[#D9668A]" />
                <span className="font-bold text-black">Sepetim</span>
                {itemCount() > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#D9668A] text-black">
                    {itemCount()}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="text-black/40 hover:text-black transition-colors cursor-none">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-20">
                  <ShoppingBag size={48} className="text-black/10" />
                  <p className="text-black/40 text-sm">Sepetiniz boş</p>
                  <button
                    onClick={closeCart}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-black cursor-none"
                    style={{ background: "#D9668A" }}
                  >
                    Ürünlere Git
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-4 p-4 rounded-xl border border-black/8 bg-[#F3EDEA]"
                  >
                    {/* Preview */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{
                        background: `radial-gradient(circle, ${item.product.glowColor}20 0%, transparent 70%)`,
                      }}
                    >
                      {item.product.emoji}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-black leading-tight mb-1 truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-black/35 mb-2">
                        {item.selectedColor} · {item.selectedSize}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-black/40">
                          Teklif verilecek
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-black hover:border-black/30 transition-all cursor-none"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-sm text-black w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-black hover:border-black/30 transition-all cursor-none"
                          >
                            <Plus size={10} />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                            className="w-6 h-6 flex items-center justify-center text-black/30 hover:text-red-400 transition-colors cursor-none ml-1"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-black/5 space-y-4">
                <p className="text-xs text-black/30 text-center">
                  Fiyatlar kişiye özel hesaplanır · WhatsApp&apos;tan dakikalar içinde teklif
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-black text-base transition-all hover:scale-[1.02] cursor-none"
                  style={{ background: "#25D366", boxShadow: "0 0 24px rgba(37,211,102,0.3)" }}
                >
                  <MessageCircle size={18} />
                  WhatsApp ile Teklif Al
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

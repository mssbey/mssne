"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const FILTERS = ["Tümü", "İşletme", "Ev Dekorasyon", "Özel Gün", "Kafe", "Güzellik", "Spor"];

const GALLERY_ITEMS = [
  { id: 1, name: "Bi Güzellik Yap", cat: "Güzellik", color: "#FF00C8", emoji: "✨", size: "tall" },
  { id: 2, name: "Coffee Shop", cat: "Kafe", color: "#FF7A00", emoji: "☕", size: "wide" },
  { id: 3, name: "OPEN 24/7", cat: "İşletme", color: "#00E5FF", emoji: "🟢", size: "normal" },
  { id: 4, name: "Love & Neon", cat: "Özel Gün", color: "#FF00C8", emoji: "❤️", size: "normal" },
  { id: 5, name: "Home Sweet Home", cat: "Ev Dekorasyon", color: "#9B5CFF", emoji: "🏠", size: "wide" },
  { id: 6, name: "GYM — No Pain", cat: "Spor", color: "#9B5CFF", emoji: "💪", size: "tall" },
  { id: 7, name: "Dream Big", cat: "Ev Dekorasyon", color: "#00E5FF", emoji: "💭", size: "normal" },
  { id: 8, name: "Beauty Studio", cat: "Güzellik", color: "#FF00C8", emoji: "💄", size: "normal" },
  { id: 9, name: "İyi Geceler", cat: "Ev Dekorasyon", color: "#9B5CFF", emoji: "🌙", size: "wide" },
  { id: 10, name: "Restoran Açık", cat: "İşletme", color: "#FF7A00", emoji: "🍽️", size: "normal" },
  { id: 11, name: "Happy Birthday", cat: "Özel Gün", color: "#FF00C8", emoji: "🎉", size: "tall" },
  { id: 12, name: "Barber Shop", cat: "İşletme", color: "#00E5FF", emoji: "✂️", size: "normal" },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [selected, setSelected] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = activeFilter === "Tümü"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#FF7A00] mb-3 block">
            İlham Galerisi
          </span>
          <h1
            className="text-[clamp(32px,5vw,60px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neon Çalışmalarımız
          </h1>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-none"
              style={{
                borderColor: activeFilter === f ? "#FF00C8" : "rgba(255,255,255,0.08)",
                background: activeFilter === f ? "rgba(255,0,200,0.08)" : "transparent",
                color: activeFilter === f ? "#FF00C8" : "rgba(255,255,255,0.45)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelected(item)}
                className="group relative rounded-2xl border border-white/8 overflow-hidden cursor-none hover:border-white/20 transition-all break-inside-avoid"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${item.color}15 0%, transparent 70%), #0D0D0D`,
                  minHeight: item.size === "tall" ? "320px" : item.size === "wide" ? "200px" : "250px",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-8 min-h-[200px]">
                  <span
                    className="text-5xl mb-4"
                    style={{ filter: `drop-shadow(0 0 20px ${item.color})` }}
                  >
                    {item.emoji}
                  </span>
                  <p
                    className="text-xl font-black text-center"
                    style={{
                      color: item.color,
                      textShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}60`,
                    }}
                  >
                    {item.name}
                  </p>
                  <span
                    className="mt-3 text-xs px-3 py-1 rounded-full border"
                    style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}10` }}
                  >
                    {item.cat}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">Sipariş Ver →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/40 mb-6">Beğendiğiniz tasarım burada yok mu?</p>
          <a
            href={`https://wa.me/905001234567?text=${encodeURIComponent("Merhaba! Özel tasarım neon tabela yaptırmak istiyorum.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white cursor-none hover:scale-105 transition-all"
            style={{ background: "#25D366", boxShadow: "0 0 32px rgba(37,211,102,0.35)" }}
          >
            <MessageCircle size={18} />
            Özel Tasarım İsteyin
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl border border-white/15 p-12 text-center"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${selected.color}15 0%, transparent 70%), #0D0D0D`,
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white cursor-none"
              >
                <X size={20} />
              </button>

              <span className="text-7xl mb-6 block" style={{ filter: `drop-shadow(0 0 30px ${selected.color})` }}>
                {selected.emoji}
              </span>
              <p
                className="text-3xl font-black mb-2"
                style={{ color: selected.color, textShadow: `0 0 30px ${selected.color}` }}
              >
                {selected.name}
              </p>
              <p className="text-sm text-white/40 mb-8">{selected.cat}</p>

              <a
                href={`https://wa.me/905001234567?text=${encodeURIComponent(`Merhaba! "${selected.name}" tasarımı neon tabela olarak yaptırmak istiyorum. Fiyat öğrenebilir miyim?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white cursor-none"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={16} /> Bu Tasarımı Sipariş Et
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

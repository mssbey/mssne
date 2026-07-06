"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const FILTERS = ["Tümü", "İşletme", "Ev Dekorasyon", "Özel Gün", "Kafe", "Güzellik", "Spor"];

const GALLERY_ITEMS = [
  { id: 1, name: "Bi Güzellik Yap", cat: "Güzellik", color: "#D9668A", emoji: "✨", size: "tall" },
  { id: 2, name: "Coffee Shop", cat: "Kafe", color: "#FF8F66", emoji: "☕", size: "wide" },
  { id: 3, name: "OPEN 24/7", cat: "İşletme", color: "#F2B84B", emoji: "🟢", size: "normal" },
  { id: 4, name: "Love & Neon", cat: "Özel Gün", color: "#D9668A", emoji: "❤️", size: "normal" },
  { id: 5, name: "Home Sweet Home", cat: "Ev Dekorasyon", color: "#5FAE7F", emoji: "🏠", size: "wide" },
  { id: 6, name: "GYM — No Pain", cat: "Spor", color: "#5FAE7F", emoji: "💪", size: "tall" },
  { id: 7, name: "Dream Big", cat: "Ev Dekorasyon", color: "#F2B84B", emoji: "💭", size: "normal" },
  { id: 8, name: "Beauty Studio", cat: "Güzellik", color: "#D9668A", emoji: "💄", size: "normal" },
  { id: 9, name: "İyi Geceler", cat: "Ev Dekorasyon", color: "#5FAE7F", emoji: "🌙", size: "wide" },
  { id: 10, name: "Restoran Açık", cat: "İşletme", color: "#FF8F66", emoji: "🍽️", size: "normal" },
  { id: 11, name: "Happy Birthday", cat: "Özel Gün", color: "#D9668A", emoji: "🎉", size: "tall" },
  { id: 12, name: "Barber Shop", cat: "İşletme", color: "#F2B84B", emoji: "✂️", size: "normal" },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [selected, setSelected] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = activeFilter === "Tümü"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#FF8F66] mb-3 block">
            İlham Galerisi
          </span>
          <h1
            className="text-[clamp(32px,5vw,60px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
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
                borderColor: activeFilter === f ? "#D9668A" : "rgba(0,0,0,0.08)",
                background: activeFilter === f ? "rgba(217,102,138,0.08)" : "transparent",
                color: activeFilter === f ? "#D9668A" : "rgba(0,0,0,0.45)",
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
                className="group relative rounded-2xl border border-black/8 overflow-hidden cursor-none hover:border-black/20 transition-all break-inside-avoid"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${item.color}15 0%, transparent 70%), #FFFFFF`,
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
          <p className="text-black/40 mb-6">Beğendiğiniz tasarım burada yok mu?</p>
          <a
            href={`https://wa.me/905001234567?text=${encodeURIComponent("Merhaba! Özel tasarım neon tabela yaptırmak istiyorum.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black cursor-none hover:scale-105 transition-all"
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
              className="relative max-w-lg w-full rounded-3xl border border-black/15 p-12 text-center"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${selected.color}15 0%, transparent 70%), #FFFFFF`,
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-black/40 hover:text-black cursor-none"
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
              <p className="text-sm text-black/40 mb-8">{selected.cat}</p>

              <a
                href={`https://wa.me/905001234567?text=${encodeURIComponent(`Merhaba! "${selected.name}" tasarımı neon tabela olarak yaptırmak istiyorum. Fiyat öğrenebilir miyim?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-black cursor-none"
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

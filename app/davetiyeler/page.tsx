"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { DAVETIYE_NUMARALARI } from "@/lib/davetiyeler";

const ACCENT = "#FF00C8";

export default function DavetiyelerPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = query.trim()
    ? DAVETIYE_NUMARALARI.filter((no) => no.includes(query.trim()))
    : DAVETIYE_NUMARALARI;

  const selectedIndex = selected ? filtered.indexOf(selected) : -1;

  const goPrev = () => {
    if (selectedIndex > 0) setSelected(filtered[selectedIndex - 1]);
  };
  const goNext = () => {
    if (selectedIndex >= 0 && selectedIndex < filtered.length - 1)
      setSelected(filtered[selectedIndex + 1]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#FF00C8] mb-3 block">
            Davetiye Koleksiyonu
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
            Davetiyeler
          </h1>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Düğün, nişan ve özel günleriniz için {DAVETIYE_NUMARALARI.length} farklı davetiye modeli.
            Beğendiğiniz modelin numarasıyla bize ulaşın, sizin için hazırlayalım.
          </p>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-sm">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              inputMode="numeric"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Model numarası ara — örn. 9152"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/25 outline-none focus:border-[#FF00C8]/60 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-white/40 py-20">
            &quot;{query}&quot; numaralı model bulunamadı.
          </p>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((no) => (
                <motion.div
                  key={no}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setSelected(no)}
                  className="group relative rounded-2xl border border-white/8 overflow-hidden cursor-none hover:border-[#FF00C8]/40 transition-all bg-[#0D0D0D]"
                >
                  <div className="relative aspect-[1211/808]">
                    <Image
                      src={`/davetiyeler/${no}.webp`}
                      alt={`Davetiye Model ${no}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">İncele →</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm font-bold text-white">
                      Model <span style={{ color: ACCENT }}>{no}</span>
                    </p>
                    <span className="text-[10px] uppercase tracking-[2px] text-white/30">
                      Davetiye
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/40 mb-6">Aradığınız tarzda davetiye bulamadınız mı?</p>
          <a
            href={`https://wa.me/905001234567?text=${encodeURIComponent("Merhaba! Özel tasarım davetiye yaptırmak istiyorum.")}`}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl border border-white/15 overflow-hidden bg-[#0D0D0D]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white/60 hover:text-white cursor-none"
              >
                <X size={18} />
              </button>

              {selectedIndex > 0 && (
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white/60 hover:text-white cursor-none"
                >
                  <ChevronLeft size={20} />
                </button>
              )}
              {selectedIndex >= 0 && selectedIndex < filtered.length - 1 && (
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white/60 hover:text-white cursor-none"
                >
                  <ChevronRight size={20} />
                </button>
              )}

              <div className="relative aspect-[1211/808]">
                <Image
                  src={`/davetiyeler/${selected}.webp`}
                  alt={`Davetiye Model ${selected}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-black text-white">
                    Model <span style={{ color: ACCENT, textShadow: `0 0 20px ${ACCENT}` }}>{selected}</span>
                  </p>
                  <p className="text-sm text-white/40 mt-1">
                    Sipariş için model numarasını bize iletin.
                  </p>
                </div>
                <a
                  href={`https://wa.me/905001234567?text=${encodeURIComponent(`Merhaba! ${selected} numaralı davetiye modelini sipariş etmek istiyorum. Bilgi alabilir miyim?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white cursor-none whitespace-nowrap"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={16} /> Sipariş Et
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

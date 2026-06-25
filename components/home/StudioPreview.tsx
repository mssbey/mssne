"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FONTS = ["Pacifico", "Satisfy", "Lobster", "Oswald", "Montserrat"];
const COLORS_DEMO = ["#FF00C8", "#00E5FF", "#9B5CFF", "#FF7A00", "#fff"];

export function StudioPreview() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Preview card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#0D0D0D] overflow-hidden p-8">
              {/* Neon display */}
              <div
                className="h-48 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
                style={{
                  background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(155,92,255,0.12) 0%, transparent 70%), #090909",
                }}
              >
                <span
                  className="text-4xl font-black"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    color: "#FF00C8",
                    textShadow: "0 0 20px #FF00C8, 0 0 40px #FF00C8, 0 0 80px rgba(255,0,200,0.4)",
                    animation: "neon-pulse 2s ease-in-out infinite",
                  }}
                >
                  Ikarus Studio
                </span>
              </div>

              {/* Controls preview */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Font</p>
                  <div className="flex gap-2 flex-wrap">
                    {FONTS.map((f, i) => (
                      <span
                        key={f}
                        className="px-3 py-1 rounded-lg text-xs border transition-all"
                        style={{
                          borderColor: i === 0 ? "#FF00C8" : "rgba(255,255,255,0.08)",
                          background: i === 0 ? "rgba(255,0,200,0.1)" : "transparent",
                          color: i === 0 ? "#FF00C8" : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Renk</p>
                  <div className="flex gap-2">
                    {COLORS_DEMO.map((c, i) => (
                      <span
                        key={c}
                        className="w-8 h-8 rounded-full border-2 cursor-none transition-transform hover:scale-110"
                        style={{
                          background: c,
                          borderColor: i === 0 ? "#fff" : "transparent",
                          boxShadow: `0 0 10px ${c}80`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating glow */}
              <div
                className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: "rgba(155,92,255,0.08)", filter: "blur(60px)" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#9B5CFF] mb-4 block">
              İnteraktif Stüdyo
            </span>
            <h2
              className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px] leading-tight mb-6"
              style={{
                background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gerçek Zamanlı
              <br />
              Neon Önizleme
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Yazını gir, fontunu seç, rengini belirle. Neonun nasıl görüneceğini
              anında önizle. Beğenince WhatsApp&apos;tan sipariş ver — dakikalar içinde hazır.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/studio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-black transition-all hover:scale-105 cursor-none"
                style={{ background: "#9B5CFF", boxShadow: "0 0 30px rgba(155,92,255,0.4)" }}
              >
                Stüdyoyu Aç
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mini features */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: "10+ Font", color: "#FF00C8" },
                { label: "Sonsuz Renk", color: "#00E5FF" },
                { label: "Boyut Seçimi", color: "#9B5CFF" },
                { label: "Anlık Önizleme", color: "#FF7A00" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: f.color }} />
                  <span className="text-sm text-white/50">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

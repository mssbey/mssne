"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 px-6 bg-[#F3EDEA]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#D9668A] opacity-[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#F2B84B] opacity-[0.08] blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-4 block">
            Yorumlar
          </span>
          <h2
            className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Müşterilerimiz
            <br />
            Ne Diyor?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-2xl border border-black/8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />

              <Quote size={26} className="mb-3 opacity-[0.14]" style={{ color: t.color }} fill={t.color} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} fill={t.color} stroke="none" />
                ))}
              </div>

              <p className="text-sm text-black/60 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-black/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: `${t.color}20`, color: t.color, boxShadow: `0 0 0 3px ${t.color}15` }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-black/35">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function CategoriesSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-4 block">
            Kategoriler
          </span>
          <h2
            className="text-[clamp(36px,5vw,60px)] font-black tracking-[-2px] leading-tight"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hangi Alan İçin
            <br />
            Neon İstiyorsunuz?
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/${cat.id}`}
                className="group relative flex flex-col p-8 rounded-2xl border border-black/8 bg-[#FFFFFF] hover:border-black/15 transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-none"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${cat.color}12 0%, transparent 70%)`,
                  }}
                />

                <span className="text-4xl mb-5">{cat.emoji}</span>
                <h3 className="text-lg font-bold text-black mb-1">{cat.title}</h3>
                <p className="text-sm text-black/40 mb-4 flex-1">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: cat.color }}>
                    {cat.count}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-black/20 transition-all group-hover:text-black/70 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

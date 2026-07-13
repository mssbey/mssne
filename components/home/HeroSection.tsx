"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TubesBackground } from "@/components/ui/TubesBackground";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <TubesBackground
      className="min-h-screen"
      enableClickInteraction
    >
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 pointer-events-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6EC7]/30 bg-[#FF6EC7]/10 backdrop-blur-sm"
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#FF6EC7", boxShadow: "0 0 8px #FF6EC7" }}
          />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6EC7]">
            Tabela · Baskı · Açık Hava · Neon — Tek Adres
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(56px,10vw,120px)] font-black leading-[0.92] tracking-[-4px] mb-8"
        >
          <span
            style={{
              backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tasarla.
            <br />
            Üretelim.
            <br />
          </span>
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #FF6EC7 0%, #00D4FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(255,110,199,0.45))",
            }}
          >
            Parlatalım.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-[clamp(16px,2vw,20px)] text-white/60 font-normal leading-relaxed mb-12 tracking-[-0.2px]"
        >
          Tabela sistemlerinden baskı ve matbaaya, açık hava reklamlarından kişiye özel
          neon tasarıma kadar markanızın ihtiyaç duyduğu her şeyi tek çatı altında üretiyoruz.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/hizmetler"
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-black transition-all hover:scale-105 cursor-none"
            style={{
              background: "#FF6EC7",
              boxShadow: "0 0 40px rgba(255,110,199,0.5)",
            }}
          >
            ✦ Hizmetlerimizi Keşfet
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/studio"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/35 transition-all cursor-none"
          >
            Kendi Neonunu Tasarla
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 text-[11px] font-medium tracking-[2px] uppercase"
        >
          <ChevronDown size={16} className="animate-bounce" />
          Kaydır
        </motion.div>

      </div>
    </TubesBackground>
  );
}

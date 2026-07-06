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
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D9668A]/30 bg-[#D9668A]/5 backdrop-blur-sm"
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#D9668A", boxShadow: "0 0 8px #D9668A" }}
          />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D9668A]">
            Türkiye&apos;nin 1 Numaralı Neon Stüdyosu
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
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
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
              background: "linear-gradient(135deg, #D9668A 0%, #5FAE7F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(217,102,138,0.4))",
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
          className="max-w-xl text-[clamp(16px,2vw,20px)] text-black/55 font-normal leading-relaxed mb-12 tracking-[-0.2px]"
        >
          Türkiye&apos;nin en premium kişiye özel neon tasarım stüdyosu.
          Markanız için sınırsız ışık, sonsuz tasarım.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/studio"
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-black transition-all hover:scale-105 cursor-none"
            style={{
              background: "#D9668A",
              boxShadow: "0 0 40px rgba(217,102,138,0.5)",
            }}
          >
            ✦ Kendi Neonunu Tasarla
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/galeri"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-black border border-black/15 bg-black/5 backdrop-blur-sm hover:bg-black/10 hover:border-black/25 transition-all cursor-none"
          >
            Örnek Çalışmalar
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/30 text-[11px] font-medium tracking-[2px] uppercase"
        >
          <ChevronDown size={16} className="animate-bounce" />
          Kaydır
        </motion.div>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 2 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 text-[11px] text-black/30 tracking-wider"
        >
          Renk değiştirmek için tıkla
        </motion.p>
      </div>
    </TubesBackground>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { ServiceImage } from "./ServiceImage";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ServiceHero({ service }: { service: ServiceData }) {
  const Icon = getServiceIcon(service.heroIcon);

  return (
    <section className="relative min-h-[86vh] flex flex-col justify-end overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0">
        <ServiceImage
          src={`/hizmetler/${service.slug}/hero.jpg`}
          alt={`${service.title} — Ikarus Reklam`}
          label={`${service.title} hero görseli — public/hizmetler/${service.slug}/hero.jpg`}
          icon={service.heroIcon}
          color={service.color}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30" />
        <div className="absolute inset-0 bg-[#050505]/35" />
      </div>

      <div className="relative z-10 px-6 pb-16 pt-40">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center gap-1.5 text-xs text-white/45 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors cursor-none">
              Ana Sayfa
            </Link>
            <ChevronRight size={12} />
            <Link href="/hizmetler" className="hover:text-white transition-colors cursor-none">
              Hizmetler
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{service.shortTitle}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 backdrop-blur-sm"
            style={{ borderColor: `${service.color}40`, background: `${service.color}0d` }}
          >
            {/* eslint-disable-next-line react-hooks/static-components -- Icon resolved from a stable module-level map, safe to render directly */}
            <Icon size={14} style={{ color: service.color }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: service.color }}
            >
              {service.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="text-[clamp(40px,7vw,86px)] font-black leading-[0.95] tracking-[-3px] text-white mb-6 max-w-4xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="text-[clamp(16px,2vw,22px)] text-white/65 max-w-xl leading-relaxed mb-10"
          >
            {service.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`https://wa.me/905001234567?text=${encodeURIComponent(service.cta.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-black transition-all hover:scale-105 cursor-none"
              style={{ background: service.color, boxShadow: `0 0 40px ${service.color}66` }}
            >
              Ücretsiz Teklif Al
            </a>
            <a
              href="#galeri"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all cursor-none"
            >
              Örnek Çalışmalar
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 flex justify-center pb-8 text-white/30 text-[11px] font-medium tracking-[2px] uppercase"
      >
        <div className="flex flex-col items-center gap-2">
          <ChevronDown size={16} className="animate-bounce" />
          Kaydır
        </div>
      </motion.div>
    </section>
  );
}

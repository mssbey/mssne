"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getServiceIcon } from "@/components/services/icon-map";

interface OtherService {
  href: string;
  title: string;
  tagline: string;
  icon?: string;
  emoji?: string;
  color: string;
}

const OTHER_SERVICES: OtherService[] = [
  {
    href: "/hizmetler",
    title: "Tabela Sistemleri",
    tagline: "Kutu harf, ışıklı tabela, kompozit, totem ve cephe giydirme.",
    icon: "CaseSensitive",
    color: "#FF00C8",
  },
  {
    href: "/urunler",
    title: "Neon Tabela",
    tagline: "Kişiye özel LED neon tasarımları, online stüdyoda hazırla.",
    icon: "Sparkles",
    color: "#9B5CFF",
  },
  {
    href: "/baski-matbaa",
    title: "Baskı ve Matbaa",
    tagline: "Kartvizit, broşür ve magnet baskı hizmeti.",
    icon: "CreditCard",
    color: "#00E5FF",
  },
  {
    href: "/acik-hava",
    title: "Açık Hava Reklamları",
    tagline: "Billboard, vinil germe ve araç giydirme çözümleri.",
    icon: "Image",
    color: "#FF7A00",
  },
  {
    href: "/davetiyeler",
    title: "Davetiye",
    tagline: "Düğün, nişan ve özel günler için davetiye koleksiyonu.",
    emoji: "💌",
    color: "#9B5CFF",
  },
  {
    href: "/studio",
    title: "Kendin Tasarla",
    tagline: "Online stüdyoda yazını gir, tasarımını gerçek zamanlı gör.",
    icon: "PenTool",
    color: "#FF00C8",
  },
];

function ServiceCard({ service, index }: { service: OtherService; index: number }) {
  const Icon = service.icon ? getServiceIcon(service.icon) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative flex h-full flex-col rounded-[28px] p-[1px] overflow-hidden cursor-none"
      >
        {/* Gradient border ring — fades in on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(140deg, ${service.color}90 0%, ${service.color}20 35%, transparent 70%)`,
          }}
        />

        {/* Card body */}
        <div className="relative flex h-full min-h-[248px] flex-col justify-between overflow-hidden rounded-[27px] border border-white/8 bg-[#0D0D0D] p-7 transition-colors duration-500 group-hover:border-transparent">
          {/* Ambient hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse 90% 60% at 15% 0%, ${service.color}20 0%, transparent 65%)`,
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
          />

          {/* Giant watermark icon */}
          <div
            className="pointer-events-none absolute -right-4 -bottom-6 opacity-[0.05] transition-all duration-700 group-hover:opacity-[0.09] group-hover:-rotate-6"
            aria-hidden="true"
          >
            {Icon ? (
              <Icon size={128} strokeWidth={1} style={{ color: service.color }} />
            ) : (
              <span style={{ fontSize: 112 }}>{service.emoji}</span>
            )}
          </div>

          {/* Index badge */}
          <span className="absolute top-6 right-7 text-[11px] font-black tracking-widest text-white/10 transition-colors duration-500 group-hover:text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon */}
          <div
            className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
            style={{
              background: `${service.color}14`,
              boxShadow: `0 0 0px ${service.color}00`,
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              style={{ boxShadow: `0 0 28px ${service.color}35` }}
            />
            {Icon ? (
              <Icon size={22} style={{ color: service.color }} className="relative" />
            ) : (
              <span className="relative">{service.emoji}</span>
            )}
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="mb-2 text-lg font-black tracking-[-0.3px] text-white">
              {service.title}
            </h3>
            <p className="mb-6 text-xs leading-relaxed text-white/40">{service.tagline}</p>

            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold"
              style={{ color: service.color }}
            >
              Keşfet
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span
                className="ml-0 h-px w-0 transition-all duration-300 group-hover:ml-0.5 group-hover:w-3"
                style={{ background: service.color }}
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function OtherServices() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-[0.12] blur-[100px]"
          style={{ background: "#FF00C8" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-[0.10] blur-[100px]"
          style={{ background: "#00E5FF" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[4px] text-[#00E5FF]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#00E5FF", boxShadow: "0 0 8px #00E5FF" }}
            />
            Diğer Hizmetlerimiz
          </span>
          <h2
            className="mx-auto max-w-2xl text-[clamp(28px,4vw,48px)] font-black leading-tight tracking-[-1.5px]"
            style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neon&apos;un Ötesinde de Yanınızdayız
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/40">
            Tabeladan baskıya, açık hava reklamından kişiye özel tasarıma kadar markanızın
            ihtiyaç duyduğu her şey tek çatı altında.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER_SERVICES.map((service, i) => (
            <ServiceCard key={service.href} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

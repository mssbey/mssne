"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { getServiceIcon } from "@/components/services/icon-map";

interface OtherService {
  href: string;
  title: string;
  tagline: string;
  icon?: LucideIcon;
  emoji?: string;
  color: string;
  image: string;
}

const OTHER_SERVICES: OtherService[] = [
  {
    href: "/hizmetler",
    title: "Tabela Sistemleri",
    tagline: "Kutu harf, ışıklı tabela, kompozit, totem ve cephe giydirme.",
    icon: getServiceIcon("CaseSensitive"),
    color: "#D9668A",
    image: "/home/services/signage.webp",
  },
  {
    href: "/urunler",
    title: "Neon Tabela",
    tagline: "Kişiye özel LED neon tasarımları, online stüdyoda hazırla.",
    icon: getServiceIcon("Sparkles"),
    color: "#5FAE7F",
    image: "/home/services/neon.webp",
  },
  {
    href: "/baski-matbaa",
    title: "Baskı ve Matbaa",
    tagline: "Kartvizit, broşür ve magnet baskı hizmeti.",
    icon: getServiceIcon("CreditCard"),
    color: "#F2B84B",
    image: "/home/services/print.webp",
  },
  {
    href: "/acik-hava",
    title: "Açık Hava Reklamları",
    tagline: "Billboard, vinil germe ve araç giydirme çözümleri.",
    icon: getServiceIcon("Image"),
    color: "#FF8F66",
    image: "/home/services/outdoor.webp",
  },
  {
    href: "/davetiyeler",
    title: "Davetiye",
    tagline: "Düğün, nişan ve özel günler için davetiye koleksiyonu.",
    emoji: "💌",
    color: "#5FAE7F",
    image: "/home/services/invitations.webp",
  },
  {
    href: "/promosyon",
    title: "Promosyon Ürünleri",
    tagline: "Termos, kupa, defter ve daha fazlası — logonuzla markanızı taşıyın.",
    icon: getServiceIcon("Gift"),
    color: "#D9668A",
    image: "/home/services/promotional.webp",
  },
];

function ServiceCard({ service, index }: { service: OtherService; index: number }) {
  const Icon = service.icon;

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
        <div className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[27px] border border-white/10 bg-[#0B0B0E] p-7 transition-colors duration-500 group-hover:border-transparent">
          {/* Service photo background */}
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080B]/95 via-[#08080B]/75 to-[#08080B]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080B]/95 via-[#08080B]/30 to-transparent" />

          {/* Ambient hover glow */}
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-45 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse 90% 60% at 12% 0%, ${service.color}55 0%, transparent 65%)`,
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
          />

          {/* Giant watermark icon */}
          <div
            className="pointer-events-none absolute -right-4 -bottom-6 opacity-[0.08] transition-all duration-700 group-hover:opacity-[0.14] group-hover:-rotate-6"
            aria-hidden="true"
          >
            {Icon ? (
              <Icon size={128} strokeWidth={1} style={{ color: service.color }} />
            ) : (
              <span style={{ fontSize: 112 }}>{service.emoji}</span>
            )}
          </div>

          {/* Index badge */}
          <span className="absolute top-6 right-7 z-10 text-[11px] font-black tracking-widest text-white/35 transition-colors duration-500 group-hover:text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon */}
          <div
            className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
            style={{
              background: `${service.color}24`,
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
            <p className="mb-6 max-w-[19rem] text-xs leading-relaxed text-white/65">{service.tagline}</p>

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
          style={{ background: "#D9668A" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-[0.10] blur-[100px]"
          style={{ background: "#F2B84B" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
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
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[4px] text-[#F2B84B]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#F2B84B", boxShadow: "0 0 8px #F2B84B" }}
            />
            Diğer Hizmetlerimiz
          </span>
          <h2
            className="mx-auto max-w-2xl text-[clamp(28px,4vw,48px)] font-black leading-tight tracking-[-1.5px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neon&apos;un Ötesinde de Yanınızdayız
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-black/40">
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

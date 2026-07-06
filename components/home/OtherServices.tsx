"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getServiceIcon } from "@/components/services/icon-map";

const OTHER_SERVICES = [
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
    tagline: "Kartvizit, broşür, magnet ve davetiye baskı hizmeti.",
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
    href: "/studio",
    title: "Kendin Tasarla",
    tagline: "Online stüdyoda yazını gir, tasarımını gerçek zamanlı gör.",
    icon: "PenTool",
    color: "#FF00C8",
  },
];

export function OtherServices() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#00E5FF] mb-4 block">
            Diğer Hizmetlerimiz
          </span>
          <h2
            className="text-[clamp(28px,4vw,48px)] font-black tracking-[-1.5px] leading-tight max-w-2xl mx-auto"
            style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neon'un Ötesinde de Yanınızdayız
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
            Tabeladan baskıya, açık hava reklamından kişiye özel tasarıma kadar markanızın
            ihtiyaç duyduğu her şey tek çatı altında.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OTHER_SERVICES.map((service, i) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col justify-between h-full p-7 rounded-3xl border border-white/8 bg-[#0D0D0D] hover:border-white/20 transition-all overflow-hidden min-h-[220px] cursor-none"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${service.color}18 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ background: `${service.color}14` }}
                  >
                    <Icon size={20} style={{ color: service.color }} />
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-black text-white mb-2 tracking-[-0.3px]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-5">{service.tagline}</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-transform group-hover:translate-x-1"
                      style={{ color: service.color }}
                    >
                      Keşfet <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

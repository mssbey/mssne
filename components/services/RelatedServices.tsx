"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

export function RelatedServices({ services }: { services: ServiceData[] }) {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-[4px] mb-4 block text-white/40">
            Diğer Hizmetlerimiz
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-white">
            Tabela ve Cephe Çözümlerimizin Tamamını Keşfedin
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.heroIcon);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group flex flex-col justify-between h-full p-6 rounded-2xl border border-white/8 bg-[#0D0D0D] hover:border-white/20 transition-all cursor-none"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${service.color}14` }}
                  >
                    <Icon size={18} style={{ color: service.color }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{service.shortTitle}</h4>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{service.tagline}</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-transform group-hover:translate-x-1"
                      style={{ color: service.color }}
                    >
                      İncele <ArrowRight size={12} />
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

"use client";

import { motion } from "framer-motion";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

export function UseCasesSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Kullanım Alanları
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-black">
            Her Sektöre Uygun {service.shortTitle} Çözümleri
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {service.useCases.map((item, i) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-black/8 bg-[#FFFFFF] hover:border-black/15 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: `${service.color}14` }}
                >
                  <Icon size={18} style={{ color: service.color }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-black mb-1">{item.label}</p>
                  <p className="text-[10.5px] text-black/35 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

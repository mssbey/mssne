"use client";

import { motion } from "framer-motion";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

export function MaterialsSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Kullanılan Malzemeler
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-black">
            Üretimde Tercih Ettiğimiz Kaliteli Malzemeler
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.materials.map((item, i) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-black/8 bg-[#FFFFFF] hover:border-black/15 transition-all"
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${service.color}14` }}
                >
                  <Icon size={18} style={{ color: service.color }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black mb-1.5">{item.name}</h4>
                  <p className="text-xs text-black/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

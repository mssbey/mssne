"use client";

import { motion } from "framer-motion";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

export function WhyUsSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 px-6 bg-[#F3EDEA]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Neden Bizi Tercih Etmelisiniz
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-black">
            {service.shortTitle} Projelerinde Fark Yaratan Detaylar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.whyUs.map((item, i) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-2xl border border-black/8 bg-[#FFFFFF] hover:border-black/15 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${service.color}14` }}
                >
                  <Icon size={20} style={{ color: service.color }} />
                </div>
                <h4 className="text-sm font-bold text-black mb-2">{item.title}</h4>
                <p className="text-xs text-black/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

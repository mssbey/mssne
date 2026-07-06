"use client";

import { motion } from "framer-motion";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

export function AdvantagesSection({ service }: { service: ServiceData }) {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${service.color}0d 0%, transparent 60%), #080808`,
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Avantajlar
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-white">
            {service.shortTitle} ile Neler Kazanırsınız
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.advantages.map((item, i) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D]/80 backdrop-blur-sm hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} style={{ color: service.color }} />
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

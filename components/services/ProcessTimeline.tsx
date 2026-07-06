"use client";

import { motion } from "framer-motion";
import { getServiceIcon } from "./icon-map";
import type { ServiceData } from "@/lib/services";

export function ProcessTimeline({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 px-6 bg-[#F3EDEA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Üretim Süreci
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-black">
            Keşiften Teslime 6 Adımlık Yol Haritası
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-9 left-0 right-0 h-px bg-black/8" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-9 left-0 right-0 h-px origin-left"
            style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
          />
          <div className="grid grid-cols-6 gap-4">
            {service.process.map((step, i) => {
              const Icon = getServiceIcon(step.icon);
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className="relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5 border"
                    style={{ background: "#FFFFFF", borderColor: `${service.color}40` }}
                  >
                    <Icon size={24} style={{ color: service.color }} />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[3px] mb-2"
                    style={{ color: service.color }}
                  >
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-black mb-2">{step.title}</h4>
                  <p className="text-[11.5px] text-black/40 leading-relaxed px-1">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute top-2 bottom-2 left-[15px] w-px bg-black/8" />
          <div className="space-y-8">
            {service.process.map((step, i) => {
              const Icon = getServiceIcon(step.icon);
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <div
                    className="absolute -left-8 top-0 w-8 h-8 rounded-full flex items-center justify-center border"
                    style={{ background: "#FFFFFF", borderColor: `${service.color}40` }}
                  >
                    <Icon size={14} style={{ color: service.color }} />
                  </div>
                  <div className="pl-2">
                    <span className="text-[11px] font-bold tracking-[3px]" style={{ color: service.color }}>
                      {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-black mt-1 mb-1.5">{step.title}</h4>
                    <p className="text-xs text-black/40 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

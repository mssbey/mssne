"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { ServiceData } from "@/lib/services";

export function FaqSection({ service }: { service: ServiceData }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Sık Sorulan Sorular
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-white">
            {service.shortTitle} Hakkında Merak Edilenler
          </h2>
        </div>

        <div className="space-y-3">
          {service.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.04 }}
                className="rounded-2xl border border-white/8 bg-[#0D0D0D] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-none"
                >
                  <span className="text-sm font-semibold text-white">{item.q}</span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform"
                    style={{
                      background: `${service.color}14`,
                      color: service.color,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus size={14} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-white/45 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

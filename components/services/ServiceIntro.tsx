"use client";

import { motion } from "framer-motion";
import type { ServiceData } from "@/lib/services";

export function ServiceIntro({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
          style={{ color: service.color }}
        >
          {service.intro.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight mb-10"
          style={{
            background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {service.intro.heading}
        </motion.h2>

        <div className="space-y-5">
          {service.intro.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="text-black/50 text-[15px] leading-[1.85]"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

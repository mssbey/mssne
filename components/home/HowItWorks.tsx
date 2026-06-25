"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#00E5FF] mb-4 block">
            Süreç
          </span>
          <h2
            className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nasıl Çalışır?
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="relative w-24 h-24 rounded-full border flex items-center justify-center mb-8 text-3xl"
                  style={{
                    borderColor: `${step.color}40`,
                    background: `${step.color}10`,
                    boxShadow: `0 0 40px ${step.color}20`,
                  }}
                >
                  {step.icon}
                  <span
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center"
                    style={{ background: step.color, color: "#000" }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

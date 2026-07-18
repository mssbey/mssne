"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#D9668A] opacity-[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#5FAE7F] opacity-[0.07] blur-[110px]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#F2B84B] mb-4 block">
            Süreç
          </span>
          <h2
            className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px]"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nasıl Çalışır?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center rounded-3xl border border-black/8 bg-white/80 backdrop-blur-sm px-8 py-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >
              <div
                className="relative w-24 h-24 rounded-full border flex items-center justify-center mb-8 text-3xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderColor: `${step.color}40`,
                  background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                  boxShadow: `0 10px 30px ${step.color}25`,
                }}
              >
                {step.icon}
                <span
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center shadow-md"
                  style={{ background: step.color, color: "#000" }}
                >
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
              <p className="text-sm text-black/45 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

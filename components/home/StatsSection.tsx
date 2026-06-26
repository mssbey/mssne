"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({
  target,
  decimal = false,
  suffix = "",
}: {
  target: number;
  decimal?: boolean;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setVal(target * ease);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  const display = decimal
    ? val.toFixed(1)
    : Math.round(val).toLocaleString("tr-TR");

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const ICONS = ["📦", "🏢", "⭐", "🚀"];

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(155,92,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[5px] text-white/25 mb-12"
        >
          Rakamlarla Ikarus
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/[0.06]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center justify-center gap-3 px-8 py-10 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-colors duration-300"
            >
              {/* Hover accent line */}
              <div
                className="absolute top-0 inset-x-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}80, transparent)`,
                }}
              />

              {/* Icon badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-1"
                style={{ background: `${stat.color}14`, border: `1px solid ${stat.color}20` }}
              >
                {ICONS[i]}
              </div>

              {/* Number */}
              <div
                className="text-[clamp(28px,3.5vw,44px)] font-black tracking-tight leading-none"
                style={{
                  background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}aa 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter
                  target={stat.value}
                  decimal={stat.decimal}
                  suffix={stat.suffix}
                />
              </div>

              {/* Label */}
              <div className="text-[11px] font-semibold uppercase tracking-[2px] text-white/35 text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

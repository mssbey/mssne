"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="py-28 px-6 bg-[#F3EDEA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#FF8F66] mb-4 block">
              Neden Ikarus?
            </span>
            <h2
              className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px] leading-tight mb-6"
              style={{
                background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Premium Kalite,
              <br />
              Uygun Fiyat
            </h2>
            <p className="text-black/45 text-base leading-relaxed mb-10 max-w-md">
              10.000+ üretim deneyimiyle tabeladan baskıya, açık hava reklamından neona
              kadar Türkiye&apos;nin en güvenilir reklam üreticisi olarak 81 ile hizmet veriyoruz.
            </p>

            <a
              href={`https://wa.me/905001234567?text=${encodeURIComponent("Merhaba! Fiyat teklifi almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-black transition-all hover:scale-105 cursor-none"
              style={{ background: "#FF8F66", boxShadow: "0 0 30px rgba(255,143,102,0.4)" }}
            >
              💬 WhatsApp&apos;tan Fiyat Al
            </a>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-2xl border border-black/8 bg-[#FFFFFF] hover:border-black/15 transition-all"
              >
                <div
                  className="text-2xl mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}12` }}
                >
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-black mb-2">{item.title}</h4>
                <p className="text-xs text-black/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

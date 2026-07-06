"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhatsAppCTA() {
  const waLink = `https://wa.me/905001234567?text=${encodeURIComponent("Merhaba! Neon tabela için fiyat almak istiyorum.")}`;

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(95,174,127,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/10 bg-gradient-to-br from-[#FFFFFF] to-[#F3EDEA] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Corner glows */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: "rgba(217,102,138,0.06)", filter: "blur(60px)" }} />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: "rgba(95,174,127,0.06)", filter: "blur(60px)" }} />

          <span className="text-xs font-bold uppercase tracking-[4px] text-[#5FAE7F] mb-6 block">
            Hemen Başlayın
          </span>
          <h2
            className="text-[clamp(32px,5vw,60px)] font-black tracking-[-2px] leading-tight mb-6"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, rgba(0,0,0,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hayalinizdeki Neon
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #D9668A, #5FAE7F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Şimdi Hazır Olsun
            </span>
          </h2>
          <p className="text-black/45 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Uzman ekibimiz 7/24 WhatsApp&apos;ta. Tasarımınızı gönderin, ücretsiz önizleme ve fiyat teklifi alın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black transition-all hover:scale-105 cursor-none"
              style={{ background: "#25D366", boxShadow: "0 0 40px rgba(37,211,102,0.35)" }}
            >
              <span className="text-xl">💬</span>
              WhatsApp ile Sipariş Ver
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/studio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black border border-black/15 bg-black/5 hover:bg-black/10 transition-all cursor-none"
            >
              ✦ Önce Tasarla
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

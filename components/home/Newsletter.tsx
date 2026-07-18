"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#080910] px-6 py-32">
      <Image
        src="/home/newsletter-background.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,6,12,0.12)_45%,rgba(5,6,12,0.55)_100%)]" />
      <Image
        src="/logo.png"
        alt=""
        width={900}
        height={306}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(760px,78vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.055]"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-4 block">
            Bülten
          </span>
          <h2
            className="text-[clamp(32px,4vw,52px)] font-black tracking-[-2px] mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.72) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Haberdar Olun
          </h2>
          <p className="text-white/60 text-base mb-10">
            Yeni ürünler, kampanyalar ve özel tekliflerden ilk siz haberdar olun.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-[#D9668A]/35 bg-[#D9668A]/10 px-8 py-6 backdrop-blur-md"
            >
              <p className="text-[#D9668A] font-semibold">✓ Harika! Bültene kaydoldunuz.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="flex-1 rounded-full border border-white/15 bg-white/95 px-5 py-3.5 text-sm text-black shadow-[0_12px_45px_rgba(0,0,0,0.2)] outline-none transition-colors placeholder:text-black/30 focus:border-[#D9668A]/70 cursor-auto"
              />
              <button
                type="submit"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-black cursor-none transition-all hover:scale-105"
                style={{ background: "#D9668A", boxShadow: "0 0 24px rgba(217,102,138,0.4)" }}
              >
                Abone Ol
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/30">
            Spam göndermeyiz. İstediğiniz zaman çıkabilirsiniz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

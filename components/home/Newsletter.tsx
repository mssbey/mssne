"use client";

import { useState } from "react";
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
    <section className="py-28 px-6 bg-[#F3EDEA]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-4 block">
            Bülten
          </span>
          <h2
            className="text-[clamp(28px,4vw,48px)] font-black tracking-[-2px] mb-4"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Haberdar Olun
          </h2>
          <p className="text-black/40 text-base mb-10">
            Yeni ürünler, kampanyalar ve özel tekliflerden ilk siz haberdar olun.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-8 rounded-2xl border border-[#D9668A]/30 bg-[#D9668A]/5"
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
                className="flex-1 px-5 py-3.5 rounded-full bg-[#FFFFFF] border border-black/10 text-black placeholder:text-black/25 text-sm outline-none focus:border-[#D9668A]/50 transition-colors cursor-auto"
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

          <p className="text-xs text-black/20 mt-4">
            Spam göndermeyiz. İstediğiniz zaman çıkabilirsiniz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

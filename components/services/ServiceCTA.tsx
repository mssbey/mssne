"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import type { ServiceData } from "@/lib/services";

export function ServiceCTA({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-black/10 overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center"
          style={{
            background: `radial-gradient(ellipse 70% 100% at 50% 0%, ${service.color}22 0%, transparent 60%), #FFFFFF`,
          }}
        >
          <h2 className="text-[clamp(28px,4.5vw,48px)] font-black tracking-[-1.5px] leading-tight text-black mb-4">
            {service.cta.heading}
          </h2>
          <p className="text-black/50 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            {service.cta.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={`https://wa.me/905468156089?text=${encodeURIComponent(service.cta.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-black transition-all hover:scale-105 cursor-none"
              style={{ background: service.color, boxShadow: `0 0 40px ${service.color}66` }}
            >
              <MessageCircle size={18} />
              WhatsApp&apos;tan Yaz
            </a>
            <a
              href="tel:+905468156089"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-black border border-black/15 bg-black/5 backdrop-blur-sm hover:bg-black/10 hover:border-black/25 transition-all cursor-none"
            >
              <Phone size={16} />
              Hemen Teklif Al
            </a>
            <a
              href="mailto:ikarusreklam@outlook.com?subject=Ücretsiz Keşif Talebi"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-black border border-black/15 bg-black/5 backdrop-blur-sm hover:bg-black/10 hover:border-black/25 transition-all cursor-none"
            >
              <Mail size={16} />
              Ücretsiz Keşif Talep Et
            </a>
          </div>

          <p className="text-xs text-black/30 tracking-wide">
            0546 815 6089 &nbsp;·&nbsp; ikarusreklam@outlook.com &nbsp;·&nbsp; 81 il, 7/24 destek
          </p>
        </motion.div>
      </div>
    </section>
  );
}

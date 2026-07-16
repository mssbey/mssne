"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, Ruler, Type, Lightbulb } from "lucide-react";
import type { ServiceData } from "@/lib/services";

const EASE = [0.22, 1, 0.36, 1] as const;

type LightingId = "isiksiz" | "onden" | "arkadan";

interface LightingOption {
  id: LightingId;
  badge: string;
  title: string;
  desc: string;
}

const LIGHTING_OPTIONS: LightingOption[] = [
  {
    id: "isiksiz",
    badge: "Işıksız",
    title: "Krom Harf Işıksız",
    desc: "Gündüz kullanımına uygun, paslanmaz krom yüzeyli klasik kutu harf.",
  },
  {
    id: "onden",
    badge: "Işıklı",
    title: "Önden Aydınlatmalı (Fileli)",
    desc: "Işık harfin ön yüzeyinden yayılır; gece maksimum görünürlük sağlar.",
  },
  {
    id: "arkadan",
    badge: "Işıklı",
    title: "Arkadan Aydınlatmalı (Endirek)",
    desc: "Işık cepheye yansıyarak harfin çevresinde şık bir hale oluşturur.",
  },
];

const HEIGHT_OPTIONS = ["20 cm", "30 cm", "40 cm", "50 cm", "60 cm", "80 cm", "100 cm", "120 cm", "150 cm", "Emin değilim"];

/** Letter styling per lighting type, rendered on a dark facade panel. */
function letterStyle(id: LightingId): CSSProperties {
  switch (id) {
    case "isiksiz":
      return {
        background: "linear-gradient(180deg, #fdfdfd 0%, #b9bec4 32%, #6d747c 48%, #e6e9ec 56%, #8b929a 78%, #4d535a 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter: "drop-shadow(4px 6px 6px rgba(0,0,0,0.55))",
      };
    case "onden":
      return {
        color: "#ffffff",
        textShadow:
          "0 0 14px rgba(255,255,255,0.95), 0 0 36px rgba(255,244,214,0.75), 0 0 80px rgba(255,238,190,0.45), 4px 6px 8px rgba(0,0,0,0.5)",
      };
    case "arkadan":
      return {
        background: "linear-gradient(180deg, #7c828a 0%, #3c4147 55%, #23262b 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter:
          "drop-shadow(0 0 18px rgba(255,246,220,0.95)) drop-shadow(0 0 46px rgba(255,240,200,0.6)) drop-shadow(0 0 90px rgba(255,236,190,0.35))",
      };
  }
}

/** Dark facade backdrop the letters sit on. */
const FACADE_BG: CSSProperties = {
  background:
    "radial-gradient(ellipse 90% 70% at 50% 42%, #35383e 0%, #232529 58%, #17181b 100%)",
};

export function KutuHarfDesigner({ service }: { service: ServiceData }) {
  const [lighting, setLighting] = useState<LightingId>("onden");
  const [text, setText] = useState("");
  const [height, setHeight] = useState("");

  const selected = LIGHTING_OPTIONS.find((o) => o.id === lighting)!;
  const previewText = (text.trim() || "TABELA").toLocaleUpperCase("tr-TR");

  const whatsappMessage = [
    "Merhaba! Sitenizdeki kutu harf tasarım aracını kullandım, teklif almak istiyorum.",
    `• Aydınlatma: ${selected.badge} — ${selected.title}`,
    `• Tabela yazısı: ${previewText}`,
    `• Harf yüksekliği: ${height || "Belirtilmedi"}`,
  ].join("\n");

  return (
    <section id="tasarim" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Tasarım Aracı
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-black">
            Tabelanızı Şimdi Tasarlayın
          </h2>
          <p className="text-black/50 text-base mt-4 leading-relaxed">
            İki adımda tabelanızın ön izlemesini oluşturun; seçimleriniz hazır bir teklif
            mesajına dönüşsün.
          </p>
        </div>

        {/* ── Step 1: Lighting type ─────────────────────────── */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-black"
            style={{ background: service.color }}
          >
            1
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-black tracking-[-0.5px]">
            Tabelanız ışıklı mı, ışıksız mı olsun?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {LIGHTING_OPTIONS.map((opt, i) => {
            const active = lighting === opt.id;
            return (
              <motion.button
                key={opt.id}
                type="button"
                onClick={() => setLighting(opt.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: EASE }}
                aria-pressed={active}
                className="group relative text-left rounded-3xl overflow-hidden border-2 transition-all cursor-none bg-white"
                style={{
                  borderColor: active ? service.color : "rgba(0,0,0,0.08)",
                  boxShadow: active ? `0 12px 40px ${service.color}33` : "none",
                }}
              >
                {/* Selected check */}
                <AnimatePresence>
                  {active && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full flex items-center justify-center text-black"
                      style={{ background: service.color }}
                    >
                      <Check size={15} strokeWidth={3} />
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Letter preview */}
                <div
                  className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={FACADE_BG}
                >
                  {opt.id === "arkadan" && (
                    <span
                      aria-hidden
                      className="absolute w-40 h-40 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,244,214,0.5) 0%, rgba(255,244,214,0.12) 45%, transparent 70%)",
                      }}
                    />
                  )}
                  <span
                    aria-hidden
                    className="relative text-[104px] font-black leading-none select-none"
                    style={letterStyle(opt.id)}
                  >
                    K
                  </span>
                </div>

                {/* Labels */}
                <div className="p-5">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[2px] mb-2"
                    style={{ color: service.color }}
                  >
                    <Lightbulb size={12} />
                    {opt.badge}
                  </span>
                  <p className="font-bold text-black text-[15px] leading-snug mb-1.5">{opt.title}</p>
                  <p className="text-black/45 text-[13px] leading-relaxed">{opt.desc}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ── Step 2: Text + height + live preview ──────────── */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-black"
            style={{ background: service.color }}
          >
            2
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-black tracking-[-0.5px]">
            Tabela metnini yazın, yüksekliği seçin
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: EASE }}
          className="grid grid-cols-1 lg:grid-cols-[380px_1fr] rounded-3xl border border-black/10 overflow-hidden bg-white"
        >
          {/* Form */}
          <div className="p-8 sm:p-10 flex flex-col gap-7 border-b lg:border-b-0 lg:border-r border-black/8">
            <div>
              <label
                htmlFor="tabela-yazisi"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-black/60 mb-3"
              >
                <Type size={13} style={{ color: service.color }} />
                Tabela Yazısı
              </label>
              <input
                id="tabela-yazisi"
                type="text"
                value={text}
                maxLength={24}
                onChange={(e) => setText(e.target.value)}
                placeholder="TABELA"
                className="w-full px-5 py-4 rounded-2xl border border-black/12 bg-[#FBF8F6] text-black font-bold tracking-wide placeholder:text-black/25 focus:outline-none focus:ring-2 transition-shadow cursor-none"
                style={{ "--tw-ring-color": service.color } as CSSProperties}
              />
            </div>

            <div>
              <label
                htmlFor="tabela-yuksekligi"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-black/60 mb-3"
              >
                <Ruler size={13} style={{ color: service.color }} />
                Harf Yüksekliği
              </label>
              <select
                id="tabela-yuksekligi"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-black/12 bg-[#FBF8F6] text-black font-semibold focus:outline-none focus:ring-2 transition-shadow cursor-none appearance-none"
                style={{ "--tw-ring-color": service.color } as CSSProperties}
              >
                <option value="">Seçiniz…</option>
                {HEIGHT_OPTIONS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-auto pt-2">
              <a
                href={`https://wa.me/905468156089?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full text-base font-bold text-black transition-all hover:scale-[1.03] cursor-none"
                style={{ background: service.color, boxShadow: `0 0 40px ${service.color}55` }}
              >
                <MessageCircle size={18} />
                Bu Tasarımla Teklif Al
              </a>
              <p className="text-[11px] text-black/35 text-center mt-3 leading-relaxed">
                Seçimleriniz hazır bir WhatsApp mesajına dönüştürülür — ölçü ve fiyat için
                ekibimiz aynı gün dönüş yapar.
              </p>
            </div>
          </div>

          {/* Live preview */}
          <div className="relative flex flex-col justify-center items-center min-h-[320px] lg:min-h-[420px] p-8 overflow-hidden" style={FACADE_BG}>
            <span className="absolute top-5 left-6 text-[10px] font-bold uppercase tracking-[3px] text-white/30">
              Canlı Ön İzleme
            </span>
            <span className="absolute top-5 right-6 text-[10px] font-semibold tracking-[1px] text-white/40 border border-white/15 rounded-full px-3 py-1">
              {selected.title}
              {height ? ` · ${height}` : ""}
            </span>

            {lighting === "arkadan" && (
              <span
                aria-hidden
                className="absolute w-[70%] h-40 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(255,244,214,0.4) 0%, rgba(255,244,214,0.1) 45%, transparent 70%)",
                }}
              />
            )}

            <AnimatePresence mode="wait">
              <motion.span
                key={`${lighting}-${previewText}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="relative font-black leading-none text-center select-none break-words max-w-full px-4"
                style={{
                  ...letterStyle(lighting),
                  fontSize: `clamp(28px, ${Math.max(3, 14 - previewText.length * 0.55)}vw, 96px)`,
                  letterSpacing: "0.02em",
                }}
              >
                {previewText}
              </motion.span>
            </AnimatePresence>

            {/* Ground reflection hint */}
            <span
              aria-hidden
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

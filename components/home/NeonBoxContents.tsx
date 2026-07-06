"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Phase = "idle" | "plugging" | "cable" | "flicker" | "on";

function OutletIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="36" height="36" rx="6" />
      <rect x="15" y="13" width="5" height="10" rx="2" />
      <rect x="28" y="13" width="5" height="10" rx="2" />
      <circle cx="24" cy="33" r="3" />
    </svg>
  );
}

function AdapterIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="28" height="18" rx="4" />
      <line x1="17" y1="28" x2="17" y2="37" />
      <line x1="31" y1="28" x2="31" y2="37" />
      <rect x="13" y="35" width="22" height="4" rx="2" />
    </svg>
  );
}

function CableLineIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 24 C14 8, 34 40, 42 24" />
      <circle cx="6" cy="24" r="3" fill="currentColor" />
      <circle cx="42" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

function ScrewsIcon({ size = 28 }: { size?: number }) {
  const positions: [number, number][] = [[13, 13], [35, 13], [13, 35], [35, 35]];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {positions.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="5" />
          <line x1={x - 3.5} y1={y} x2={x + 3.5} y2={y} />
          <line x1={x} y1={y - 3.5} x2={x} y2={y + 3.5} />
        </g>
      ))}
    </svg>
  );
}

function TapeIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 6L24 16" strokeDasharray="2 3" />
    </svg>
  );
}

function RemoteIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="15" y="4" width="18" height="40" rx="5" />
      <circle cx="24" cy="16" r="4" />
      <circle cx="18" cy="28" r="2" />
      <circle cx="30" cy="28" r="2" />
      <circle cx="18" cy="37" r="2" />
      <circle cx="30" cy="37" r="2" />
    </svg>
  );
}

const BOX_ITEMS: {
  label: string;
  Icon: ({ size }: { size?: number }) => React.JSX.Element;
  color: string;
  optional: boolean;
}[] = [
  { label: "Güç Çıkışı", Icon: OutletIcon, color: "#D9668A", optional: false },
  { label: "Adaptör", Icon: AdapterIcon, color: "#5FAE7F", optional: false },
  { label: "Güç Kablosu", Icon: CableLineIcon, color: "#F2B84B", optional: false },
  { label: "Vidalar", Icon: ScrewsIcon, color: "#FF8F66", optional: false },
  { label: "Bant", Icon: TapeIcon, color: "#D9668A", optional: true },
  { label: "Kumanda", Icon: RemoteIcon, color: "#5FAE7F", optional: true },
];

function GeometricBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <polygon points="60,55 125,55 92,115" stroke="#D9668A" strokeWidth="1.5" opacity="0.22" />
        <polygon points="1290,100 1380,100 1335,175" fill="#F2B84B" opacity="0.06" />
        <polygon points="215,750 275,750 245,810" stroke="#5FAE7F" strokeWidth="1.5" opacity="0.18" />
        <circle cx="75" cy="370" r="52" stroke="#D9668A" strokeWidth="1.5" opacity="0.13" />
        <circle cx="1410" cy="470" r="72" stroke="#F2B84B" strokeWidth="1.5" opacity="0.13" />
        <circle cx="670" cy="840" r="36" fill="#5FAE7F" opacity="0.045" />
        <circle cx="340" cy="125" r="22" fill="#FF8F66" opacity="0.06" />
        <circle cx="1090" cy="195" r="17" fill="#D9668A" opacity="0.07" />
        <rect x="1175" y="675" width="46" height="46" rx="4" stroke="#FF8F66" strokeWidth="1.5" opacity="0.18" transform="rotate(25 1198 698)" />
        <rect x="38" y="575" width="30" height="30" rx="3" stroke="#5FAE7F" strokeWidth="1.5" opacity="0.18" transform="rotate(-18 53 590)" />
        <rect x="695" y="36" width="24" height="24" rx="2" stroke="#F2B84B" strokeWidth="1.5" opacity="0.18" transform="rotate(12 707 48)" />
        <circle cx="155" cy="215" r="4" fill="#D9668A" opacity="0.28" />
        <circle cx="445" cy="798" r="4" fill="#F2B84B" opacity="0.28" />
        <circle cx="945" cy="115" r="4" fill="#5FAE7F" opacity="0.28" />
        <circle cx="1245" cy="695" r="4" fill="#FF8F66" opacity="0.28" />
        <circle cx="815" cy="858" r="3" fill="#D9668A" opacity="0.22" />
        <polyline points="0,878 45,848 90,878 135,848 180,878 225,848 270,878 315,848 360,878" stroke="#D9668A" strokeWidth="1.5" opacity="0.1" />
        <polyline points="1075,25 1118,58 1162,25 1206,58 1250,25 1294,58 1338,25 1382,58 1440,25" stroke="#F2B84B" strokeWidth="1.5" opacity="0.1" />
        {Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => (
            <circle key={`dot-${row}-${col}`} cx={1075 + col * 28} cy={575 + row * 28} r="2.5" fill="#5FAE7F" opacity="0.09" />
          ))
        )}
      </svg>
    </div>
  );
}

export function NeonBoxContents() {
  const [phase, setPhase] = useState<Phase>("idle");

  const isPlugged = phase !== "idle";
  const isCable = phase === "cable" || phase === "flicker" || phase === "on";
  const isFlicker = phase === "flicker";
  const isOn = phase === "on";

  function handlePlug() {
    if (phase !== "idle") return;
    setPhase("plugging");
    setTimeout(() => setPhase("cable"), 650);
    setTimeout(() => setPhase("flicker"), 1850);
    setTimeout(() => setPhase("on"), 3350);
  }

  function handleReset() {
    setPhase("idle");
  }

  const blueGlow = isOn
    ? "drop-shadow(0 0 6px #F2B84B) drop-shadow(0 0 16px rgba(242,184,75,0.65)) drop-shadow(0 0 32px rgba(242,184,75,0.35))"
    : "none";
  const pinkGlow = isOn
    ? "drop-shadow(0 0 6px #D9668A) drop-shadow(0 0 16px rgba(217,102,138,0.65)) drop-shadow(0 0 32px rgba(217,102,138,0.35))"
    : "none";

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#F5F5FA" }}>
      <GeometricBg />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[5px] text-gray-400 mb-3">KUTU İÇERİĞİ</p>
          <h2
            className="text-[clamp(28px,4vw,48px)] font-black tracking-tight mb-4"
            style={{
              background: "linear-gradient(90deg, #D9668A 0%, #5FAE7F 50%, #F2B84B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neon Tabela Kutu İçeriği
          </h2>
          <p className="text-gray-500 text-base max-w-sm mx-auto leading-relaxed">
            Ikarus Neon kutusundan çıkan tüm parçaları keşfet.
            <br />
            Fişi tak, tabelanı yak.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Left: display + cable + button */}
          <div className="lg:col-span-3 flex flex-col items-center gap-3">

            {/* Dark display panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(160deg, #0A0A10 0%, #101018 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "44px 24px 36px",
                boxShadow: isOn
                  ? "0 0 80px rgba(242,184,75,0.12), 0 0 140px rgba(217,102,138,0.07), 0 24px 64px rgba(0,0,0,0.2)"
                  : "0 24px 64px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.8s ease",
              }}
            >
              {/* Corner status dots */}
              {(
                [
                  ["top-3 left-3", "#D9668A"],
                  ["top-3 right-3", "#F2B84B"],
                  ["bottom-3 left-3", "#5FAE7F"],
                  ["bottom-3 right-3", "#FF8F66"],
                ] as [string, string][]
              ).map(([pos, color]) => (
                <div
                  key={pos}
                  className={`absolute ${pos} w-1.5 h-1.5 rounded-full`}
                  style={{
                    background: isOn ? color : "#252525",
                    boxShadow: isOn ? `0 0 8px ${color}` : "none",
                    transition: "background 0.6s, box-shadow 0.6s",
                  }}
                />
              ))}

              {/* Ambient glow overlay */}
              <div
                className="absolute inset-0 rounded-[20px] pointer-events-none"
                style={{
                  background: isOn
                    ? "radial-gradient(ellipse at 50% 40%, rgba(242,184,75,0.05) 0%, rgba(217,102,138,0.04) 55%, transparent 75%)"
                    : "none",
                  transition: "background 0.8s ease",
                }}
              />

              {/* Neon text */}
              <motion.div
                animate={
                  isFlicker
                    ? { opacity: [0.08, 1, 0.04, 0.88, 0.12, 0.96, 0.25, 1, 0.15, 1] }
                    : { opacity: 1 }
                }
                transition={{ duration: 1.5, ease: "linear" }}
              >
                {/* IKARUS */}
                <div style={{ filter: blueGlow, transition: "filter 0.6s" }}>
                  <svg viewBox="0 0 520 108" className="w-full">
                    <text
                      x="260"
                      y="82"
                      textAnchor="middle"
                      fontFamily="'Arial Black', Arial, sans-serif"
                      fontWeight="900"
                      fontSize="88"
                      letterSpacing="6"
                      fill={isOn ? "rgba(242,184,75,0.09)" : "none"}
                      stroke={isOn ? "#F2B84B" : "#282828"}
                      strokeWidth={isOn ? "2.5" : "1.5"}
                      style={{ transition: "stroke 0.6s ease, fill 0.6s ease" }}
                    >
                      IKARUS
                    </text>
                  </svg>
                </div>

                {/* NEON */}
                <div style={{ filter: pinkGlow, marginTop: "-12px", transition: "filter 0.6s" }}>
                  <svg viewBox="0 0 340 96" className="w-52 mx-auto">
                    <text
                      x="170"
                      y="76"
                      textAnchor="middle"
                      fontFamily="'Arial Black', Arial, sans-serif"
                      fontWeight="900"
                      fontSize="84"
                      letterSpacing="8"
                      fill={isOn ? "rgba(217,102,138,0.09)" : "none"}
                      stroke={isOn ? "#D9668A" : "#282828"}
                      strokeWidth={isOn ? "2.5" : "1.5"}
                      style={{ transition: "stroke 0.6s ease, fill 0.6s ease" }}
                    >
                      NEON
                    </text>
                  </svg>
                </div>
              </motion.div>

              {/* Breathing glow (only when on) */}
              {isOn && (
                <motion.div
                  className="absolute -inset-4 rounded-[26px] -z-10 pointer-events-none"
                  animate={{ opacity: [0.35, 0.75, 0.35] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(242,184,75,0.1) 0%, rgba(217,102,138,0.07) 45%, transparent 72%)",
                  }}
                />
              )}
            </motion.div>

            {/* Cable + Plug + Socket SVG */}
            <svg viewBox="0 0 280 180" className="w-64 h-40">
              <defs>
                <linearGradient id="cable-elec-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F2B84B" />
                  <stop offset="55%" stopColor="#5FAE7F" />
                  <stop offset="100%" stopColor="#D9668A" />
                </linearGradient>
              </defs>

              {/* Static cable */}
              <path
                d="M 140 28 C 140 72, 88 88, 88 124 C 88 150, 108 162, 140 162"
                fill="none"
                stroke="#1e1e1e"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Electric overlay */}
              {isCable && (
                <motion.path
                  d="M 140 28 C 140 72, 88 88, 88 124 C 88 150, 108 162, 140 162"
                  fill="none"
                  stroke="url(#cable-elec-grad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.0, ease: [0.35, 0, 0.25, 1] }}
                />
              )}

              {/* Socket */}
              <g>
                <rect
                  x="112" y="10" width="56" height="30" rx="7"
                  fill="#181818"
                  stroke={isPlugged ? "#F2B84B" : "#333"}
                  strokeWidth="1.5"
                  style={{ transition: "stroke 0.3s" }}
                />
                <rect x="121" y="16" width="10" height="16" rx="3" fill="#252525" stroke="#3a3a3a" strokeWidth="1" />
                <rect x="149" y="16" width="10" height="16" rx="3" fill="#252525" stroke="#3a3a3a" strokeWidth="1" />
                {isPlugged && (
                  <motion.rect
                    x="103" y="1" width="74" height="48" rx="10"
                    fill="none"
                    stroke="#F2B84B"
                    strokeWidth="1.5"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    style={{ transformOrigin: "140px 25px" }}
                    transition={{ duration: 0.55 }}
                  />
                )}
              </g>

              {/* Plug (springs up when plugged) */}
              <motion.g
                animate={isPlugged ? { y: -126 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.08 }}
              >
                <rect
                  x="113" y="158" width="54" height="26" rx="6"
                  fill="#121212"
                  stroke={isPlugged ? "#F2B84B" : "#333"}
                  strokeWidth="1.5"
                  style={{ transition: "stroke 0.3s" }}
                />
                <rect x="123" y="142" width="9" height="20" rx="3" fill="#252525" stroke="#3a3a3a" strokeWidth="1" />
                <rect x="148" y="142" width="9" height="20" rx="3" fill="#252525" stroke="#3a3a3a" strokeWidth="1" />
              </motion.g>
            </svg>

            {/* Buttons */}
            <div className="h-12 flex items-center justify-center">
              {phase === "idle" && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handlePlug}
                  className="px-8 py-3 rounded-full font-bold text-sm text-white hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #5FAE7F 0%, #D9668A 100%)",
                    boxShadow: "0 6px 28px rgba(95,174,127,0.4)",
                    transition: "transform 0.15s",
                  }}
                >
                  🔌 Fişi Tak
                </motion.button>
              )}
              {phase === "on" && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full font-bold text-sm border-2 hover:bg-gray-100 cursor-pointer"
                  style={{ borderColor: "#d8d8d8", color: "#666", transition: "background 0.2s" }}
                >
                  ↩ Tekrar Dene
                </motion.button>
              )}
            </div>
          </div>

          {/* Right: Box contents */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400 mb-5">Kutuda Ne Var?</p>
            <div className="grid grid-cols-2 gap-3">
              {BOX_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative p-4 rounded-xl border"
                  style={{
                    background: "white",
                    borderColor: isOn ? `${item.color}28` : "rgba(0,0,0,0.07)",
                    boxShadow: isOn ? `0 4px 20px ${item.color}15` : "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "border-color 0.6s, box-shadow 0.6s",
                  }}
                >
                  {item.optional && (
                    <span
                      className="absolute top-1.5 right-1.5 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      Opsiyonel
                    </span>
                  )}
                  <div style={{ color: isOn ? item.color : "#c0c0c0", transition: "color 0.6s" }}>
                    <item.Icon size={28} />
                  </div>
                  <p className="text-[12px] font-semibold mt-3 text-gray-700">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

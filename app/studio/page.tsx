"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageCircle, RefreshCw, ImagePlus, Download, X } from "lucide-react";

const FONTS = [
  { name: "Pacifico", label: "Pacifico", style: "Eğlenceli" },
  { name: "Satisfy", label: "Satisfy", style: "Zarif" },
  { name: "Lobster", label: "Lobster", style: "Retro" },
  { name: "Oswald", label: "Oswald", style: "Modern" },
  { name: "Montserrat", label: "Montserrat", style: "Minimal" },
  { name: "Dancing Script", label: "Dancing", style: "Kursif" },
];

const COLORS = [
  { hex: "#FF00C8", name: "Neon Pembe" },
  { hex: "#00E5FF", name: "Neon Mavi" },
  { hex: "#9B5CFF", name: "Mor" },
  { hex: "#FF7A00", name: "Turuncu" },
  { hex: "#FFFFFF", name: "Beyaz" },
  { hex: "#39FF14", name: "Neon Yeşil" },
  { hex: "#FFD700", name: "Altın" },
  { hex: "#FF3131", name: "Kırmızı" },
];

const SIZES = ["XS — 30cm", "S — 50cm", "M — 70cm", "L — 100cm", "XL — 150cm"];
const ENVS = ["Karanlık", "Gece", "Kapalı Mekan", "Aydınlık"];

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function StudioPage() {
  const [text, setText] = useState("Ikarus Neon");
  const [font, setFont] = useState(FONTS[0].name);
  const [color, setColor] = useState(COLORS[0].hex);
  const [size, setSize] = useState(SIZES[2]);
  const [env, setEnv] = useState(ENVS[0]);
  const [flicker, setFlicker] = useState(false);

  // Yeni özellikler
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [textPos, setTextPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOrigin, setDragOrigin] = useState({ mx: 0, my: 0, tx: 0, ty: 0 });
  const [isDownloading, setIsDownloading] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Arka plan görsel yükleme
  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBgImage(url);
    e.target.value = "";
  };

  // Yazı sürükleme — mousedown sadece text üzerinde
  const handleTextMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDragOrigin({ mx: e.clientX, my: e.clientY, tx: textPos.x, ty: textPos.y });
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setTextPos({
        x: dragOrigin.tx + (e.clientX - dragOrigin.mx),
        y: dragOrigin.ty + (e.clientY - dragOrigin.my),
      });
    };
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, dragOrigin]);

  // Canvas'a çizerek PNG oluştur
  const buildCanvas = useCallback((): Promise<HTMLCanvasElement> => {
    return new Promise((resolve, reject) => {
      const el = previewRef.current;
      if (!el) return reject("no preview");

      const W = el.offsetWidth;
      const H = el.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      const canvas = document.createElement("canvas");
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext("2d")!;
      ctx.scale(dpr, dpr);

      const drawText = () => {
        const tx = W / 2 + textPos.x;
        const ty = H / 2 + textPos.y;
        const fontSize = Math.min(64, Math.max(28, W * 0.05));
        const fontStr = `bold ${fontSize}px '${font}', cursive`;

        document.fonts.load(fontStr).then(() => {
          ctx.font = fontStr;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Neon glow katmanları
          [80, 40, 20, 8].forEach((blur) => {
            ctx.save();
            ctx.shadowColor = color;
            ctx.shadowBlur = blur;
            ctx.fillStyle = color;
            ctx.fillText(text || "Neonunuz", tx, ty, W - 64);
            ctx.restore();
          });

          resolve(canvas);
        });
      };

      if (bgImage) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, W, H);
          // Env overlay
          applyEnvOverlay(ctx, W, H);
          drawText();
        };
        img.onerror = reject;
        img.src = bgImage;
      } else {
        // Koyu arka plan
        ctx.fillStyle = "#090909";
        ctx.fillRect(0, 0, W, H);
        const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.5);
        grad.addColorStop(0, hexToRgba(color, 0.08));
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        applyEnvOverlay(ctx, W, H);
        drawText();
      }
    });
  }, [text, font, color, env, bgImage, textPos]);

  const applyEnvOverlay = (ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const overlayColor =
      env === "Aydınlık" ? "rgba(255,255,255,0.12)"
      : env === "Gece" ? "rgba(0,0,30,0.3)"
      : null;
    if (overlayColor) {
      ctx.fillStyle = overlayColor;
      ctx.fillRect(0, 0, W, H);
    }
  };

  // PNG indir
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const canvas = await buildCanvas();
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.download = "ikarus-neon-tasarim.png";
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } finally {
      setIsDownloading(false);
    }
  };

  // WhatsApp sipariş: önce görsel indir, sonra WA aç
  const handleWaOrder = async () => {
    // Tasarımı indir
    await handleDownload();

    // WA mesajı
    const msg =
      `Merhaba! Neon Stüdyo üzerinden tasarım oluşturdum:\n\n` +
      `✍️ Yazı: "${text}"\n` +
      `🔤 Font: ${font}\n` +
      `🎨 Renk: ${color}\n` +
      `📐 Boyut: ${size}\n` +
      `🌙 Ortam: ${env}\n\n` +
      `Tasarım görselini de sohbete ekleyeceğim. Fiyat bilgisi almak istiyorum.`;

    setTimeout(() => {
      window.open(
        `https://wa.me/905001234567?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    }, 400);
  };

  const envOverlayStyle =
    env === "Aydınlık" ? "rgba(255,255,255,0.12)"
    : env === "Gece" ? "rgba(0,0,30,0.3)"
    : "transparent";

  const bgStyle: React.CSSProperties = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${hexToRgba(color, 0.08)} 0%, transparent 70%), #090909` };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Satisfy&family=Lobster&family=Oswald:wght@700&family=Montserrat:wght@900&family=Dancing+Script:wght@700&display=swap');`}</style>

      {/* Gizli dosya input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleBgUpload}
      />

      <div className="min-h-screen pt-24 pb-16 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#9B5CFF] mb-3 block">
              İnteraktif Tasarım
            </span>
            <h1
              className="text-[clamp(32px,5vw,60px)] font-black tracking-[-2px]"
              style={{
                background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Neon Stüdyo
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            {/* Önizleme */}
            <div className="sticky top-28">
              <div
                ref={previewRef}
                className="relative rounded-3xl border border-white/10 overflow-hidden min-h-[380px]"
                style={{ ...bgStyle, cursor: isDragging ? "grabbing" : "default" }}
              >
                {/* Ortam overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: envOverlayStyle }} />

                {/* Sürüklenebilir neon yazı */}
                <p
                  onMouseDown={handleTextMouseDown}
                  className="absolute z-10 text-[clamp(28px,5vw,64px)] font-black text-center px-8 select-none whitespace-pre-wrap break-all"
                  style={{
                    fontFamily: `'${font}', cursive`,
                    color: color,
                    textShadow: `0 0 20px ${color}, 0 0 40px ${color}80, 0 0 80px ${color}30`,
                    animation: flicker ? "flicker 3s ease-in-out infinite" : "neon-pulse 2s ease-in-out infinite",
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${textPos.x}px), calc(-50% + ${textPos.y}px))`,
                    cursor: isDragging ? "grabbing" : "grab",
                  }}
                >
                  {text || "Neonunuz"}
                </p>

                {/* ENV etiketi */}
                <span className="absolute top-4 right-4 z-20 text-xs text-white/30 px-3 py-1 rounded-full border border-white/8 pointer-events-none">
                  {env}
                </span>

                {/* Arka plan görseli kaldır */}
                {bgImage && (
                  <button
                    onClick={() => setBgImage(null)}
                    className="absolute top-4 left-4 z-20 w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-none"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* Eylem butonları */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-sm text-white/50 hover:text-white hover:border-white/20 transition-all cursor-none"
                >
                  <ImagePlus size={14} />
                  Arka Plan Ekle
                </button>
                <button
                  onClick={() => { setFlicker(!flicker); }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-sm text-white/50 hover:text-white hover:border-white/20 transition-all cursor-none"
                >
                  <RefreshCw size={14} />
                  {flicker ? "Yanıp Sönmeyi Durdur" : "Yanıp Sönme Efekti"}
                </button>
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-sm text-white/50 hover:text-white hover:border-white/20 transition-all cursor-none disabled:opacity-40"
                >
                  <Download size={14} />
                  {isDownloading ? "İndiriliyor…" : "PNG İndir"}
                </button>
              </div>

              <p className="text-xs text-white/20 text-center mt-2">
                ✦ Yazıyı fare ile sürükleyerek konumlandırabilirsiniz
              </p>
            </div>

            {/* Kontroller */}
            <div className="space-y-6">
              {/* Yazı */}
              <div className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D]">
                <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3 block">
                  Yazınız
                </label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={30}
                  placeholder="Neon yazınızı girin..."
                  className="w-full bg-transparent text-white text-lg font-semibold outline-none placeholder:text-white/20 border-b border-white/10 pb-2 focus:border-[#FF00C8]/50 transition-colors cursor-auto"
                />
                <p className="text-xs text-white/20 mt-2 text-right">{text.length}/30</p>
              </div>

              {/* Font */}
              <div className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D]">
                <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4 block">
                  Font Seçimi
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FONTS.map((f) => (
                    <button
                      key={f.name}
                      onClick={() => setFont(f.name)}
                      className="flex flex-col items-start px-4 py-3 rounded-xl border transition-all cursor-none text-left"
                      style={{
                        borderColor: font === f.name ? "#9B5CFF" : "rgba(255,255,255,0.08)",
                        background: font === f.name ? "rgba(155,92,255,0.08)" : "transparent",
                      }}
                    >
                      <span className="text-base font-bold text-white mb-0.5" style={{ fontFamily: `'${f.name}', cursive` }}>
                        {f.label}
                      </span>
                      <span className="text-[10px] text-white/30">{f.style}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Renk */}
              <div className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D]">
                <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4 block">
                  Renk
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {COLORS.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setColor(c.hex)}
                      title={c.name}
                      className="flex flex-col items-center gap-2 group cursor-none"
                    >
                      <span
                        className="w-10 h-10 rounded-full transition-all group-hover:scale-110"
                        style={{
                          background: c.hex,
                          boxShadow: color === c.hex ? `0 0 16px ${c.hex}, 0 0 32px ${c.hex}60` : `0 0 8px ${c.hex}40`,
                          outline: color === c.hex ? `2px solid ${c.hex}` : "none",
                          outlineOffset: "3px",
                        }}
                      />
                      <span className="text-[10px] text-white/30">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Boyut */}
              <div className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D]">
                <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3 block">
                  Boyut
                </label>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className="px-4 py-2 rounded-lg text-sm border transition-all cursor-none"
                      style={{
                        borderColor: size === s ? "#FF00C8" : "rgba(255,255,255,0.08)",
                        background: size === s ? "rgba(255,0,200,0.08)" : "transparent",
                        color: size === s ? "#FF00C8" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ortam */}
              <div className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D]">
                <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3 block">
                  Ortam Önizleme
                </label>
                <div className="flex flex-wrap gap-2">
                  {ENVS.map((e) => (
                    <button
                      key={e}
                      onClick={() => setEnv(e)}
                      className="px-4 py-2 rounded-lg text-sm border transition-all cursor-none"
                      style={{
                        borderColor: env === e ? "#00E5FF" : "rgba(255,255,255,0.08)",
                        background: env === e ? "rgba(0,229,255,0.08)" : "transparent",
                        color: env === e ? "#00E5FF" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp Sipariş */}
              <button
                onClick={handleWaOrder}
                disabled={isDownloading}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-[1.02] cursor-none disabled:opacity-60"
                style={{ background: "#25D366", boxShadow: "0 0 32px rgba(37,211,102,0.35)" }}
              >
                <MessageCircle size={20} />
                WhatsApp ile Sipariş Ver
              </button>

              <p className="text-xs text-white/25 text-center">
                Ücretsiz tasarım danışmanlığı · 7/24 destek · 2 yıl garanti
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

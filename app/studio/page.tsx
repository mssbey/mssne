"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageCircle, RefreshCw, ImagePlus, Download, X } from "lucide-react";
import { STUDIO_FONTS, getStudioFont } from "./fonts";
import { CONTACT } from "@/lib/data";

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

// Boyut seçimi önizlemedeki yazıyı da ölçekler
const SIZES = [
  { label: "XS", cm: "30cm", factor: 0.55 },
  { label: "S", cm: "50cm", factor: 0.75 },
  { label: "M", cm: "70cm", factor: 1 },
  { label: "L", cm: "100cm", factor: 1.25 },
  { label: "XL", cm: "150cm", factor: 1.5 },
];

const ENVS = ["Karanlık", "Gece", "Kapalı Mekan", "Aydınlık"];

// Hazır arka planlar (public/neon içinden)
const PRESET_BGS = [
  { key: "studio", label: "Stüdyo", src: null as string | null },
  { key: "brick", label: "Tuğla Duvar", src: "/neon/bg-dark-1.jpg" },
  { key: "beton", label: "Beton Duvar", src: "/neon/bg-dark-2.jpg" },
];

// Hazır neon tasarımları — tıklayınca uygulanır
const TEMPLATES = [
  { label: "Daima Aşk", text: "Daima Aşk", font: "greatvibes", color: "#FF00C8" },
  { label: "Hoşgeldiniz", text: "Hoşgeldiniz", font: "dancing", color: "#FFD700" },
  { label: "Coffee Time", text: "Coffee Time", font: "pacifico", color: "#FF7A00" },
  { label: "OPEN", text: "OPEN", font: "bebas", color: "#39FF14" },
  { label: "Dream Big", text: "Dream Big", font: "monoton", color: "#00E5FF" },
  { label: "Good Vibes", text: "Good Vibes", font: "caveat", color: "#9B5CFF" },
  { label: "Happy Birthday", text: "Happy Birthday", font: "lobster", color: "#FF00C8" },
  { label: "No Pain No Gain", text: "NO PAIN NO GAIN", font: "oswald", color: "#FF3131" },
];

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function StudioPage() {
  const [text, setText] = useState("Ikarus Neon");
  const [fontKey, setFontKey] = useState(STUDIO_FONTS[0].key);
  const [color, setColor] = useState(COLORS[0].hex);
  const [size, setSize] = useState(SIZES[2]);
  const [env, setEnv] = useState(ENVS[0]);
  const [flicker, setFlicker] = useState(false);

  const [bgImage, setBgImage] = useState<string | null>(null);
  const [textPos, setTextPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOrigin, setDragOrigin] = useState({ mx: 0, my: 0, tx: 0, ty: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [previewW, setPreviewW] = useState(800);

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const font = getStudioFont(fontKey);

  // Önizleme genişliğini izle — yazı her zaman konteynere göre ölçeklenir,
  // böylece arka plan görseli eklenince taşma/küçülmeme sorunu yaşanmaz.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setPreviewW(entries[0]?.contentRect.width ?? 800);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Yazı boyutu: seçilen boyutla ölçeklenir ama asla konteynerden taşmaz
  const fontSize = useMemo(() => {
    const len = Math.max(3, (text || "Neonunuz").length);
    const fit = (previewW * 0.86) / (len * 0.58); // sığdırma üst sınırı
    const scaled = previewW * 0.105 * size.factor;
    return Math.max(16, Math.min(scaled, fit));
  }, [text, previewW, size]);

  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBgImage(url);
    e.target.value = "";
  };

  const applyTemplate = (t: (typeof TEMPLATES)[number]) => {
    setText(t.text);
    setFontKey(t.font);
    setColor(t.color);
    setTextPos({ x: 0, y: 0 });
  };

  // Yazı sürükleme
  const handleTextMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDragOrigin({ mx: e.clientX, my: e.clientY, tx: textPos.x, ty: textPos.y });
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => {
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

  // Önizlemenin birebir aynısını canvas'a çizer (PNG indirme için)
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
        const fontStr = `bold ${Math.round(fontSize)}px ${font.family}`;

        document.fonts.load(fontStr).then(() => {
          ctx.font = fontStr;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          [80, 40, 20, 8].forEach((blur) => {
            ctx.save();
            ctx.shadowColor = color;
            ctx.shadowBlur = blur;
            ctx.fillStyle = color;
            ctx.fillText(text || "Neonunuz", tx, ty, W - 48);
            ctx.restore();
          });

          resolve(canvas);
        });
      };

      if (bgImage) {
        const img = new Image();
        img.onload = () => {
          // object-fit: cover davranışı
          const scale = Math.max(W / img.width, H / img.height);
          const dw = img.width * scale;
          const dh = img.height * scale;
          ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
          applyEnvOverlay(ctx, W, H);
          drawText();
        };
        img.onerror = reject;
        img.src = bgImage;
      } else {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, font, color, env, bgImage, textPos, fontSize]);

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

  const handleWaOrder = async () => {
    await handleDownload();

    const msg =
      `Merhaba! Neon Stüdyo üzerinden tasarım oluşturdum:\n\n` +
      `✍️ Yazı: "${text}"\n` +
      `🔤 Font: ${font.label}\n` +
      `🎨 Renk: ${color}\n` +
      `📐 Boyut: ${size.label} — ${size.cm}\n` +
      `🌙 Ortam: ${env}\n\n` +
      `Tasarım görselini de sohbete ekleyeceğim. Fiyat teklifi almak istiyorum.`;

    setTimeout(() => {
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
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
      {/* Gizli dosya input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleBgUpload}
      />

      <div className="min-h-screen pt-24 pb-16 px-6 bg-[#FBF8F6]">
        <div className="max-w-7xl mx-auto">
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#9B5CFF] mb-3 block">
              Kişiye Özel Tasarım
            </span>
            <h1
              className="text-[clamp(32px,5vw,60px)] font-black tracking-[-2px]"
              style={{
                background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
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
            <div className="lg:sticky lg:top-28">
              <div
                ref={previewRef}
                className="relative rounded-3xl border border-black/10 overflow-hidden min-h-[380px]"
                style={{ ...bgStyle, cursor: isDragging ? "grabbing" : "default" }}
              >
                {/* Ortam overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: envOverlayStyle }} />

                {/* Sürüklenebilir neon yazı */}
                <p
                  onMouseDown={handleTextMouseDown}
                  className="absolute z-10 font-bold text-center px-6 select-none whitespace-nowrap"
                  style={{
                    fontFamily: font.family,
                    fontSize: `${fontSize}px`,
                    color: color,
                    textShadow: `0 0 6px ${color}, 0 0 20px ${color}, 0 0 42px ${color}80, 0 0 80px ${color}30`,
                    animation: flicker ? "flicker 3s ease-in-out infinite" : "none",
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${textPos.x}px), calc(-50% + ${textPos.y}px))`,
                    cursor: isDragging ? "grabbing" : "grab",
                    willChange: isDragging ? "transform" : "auto",
                  }}
                >
                  {text || "Neonunuz"}
                </p>

                {/* ENV etiketi */}
                <span className="absolute top-4 right-4 z-20 text-xs text-white/30 px-3 py-1 rounded-full border border-white/8 pointer-events-none">
                  {env} · {size.label} ({size.cm})
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

              {/* Hazır arka planlar */}
              <div className="flex gap-2 mt-4">
                {PRESET_BGS.map((bg) => (
                  <button
                    key={bg.key}
                    onClick={() => setBgImage(bg.src)}
                    className="flex-1 h-14 rounded-xl border overflow-hidden text-xs font-semibold transition-all cursor-none"
                    style={{
                      borderColor: bgImage === bg.src ? "#9B5CFF" : "rgba(0,0,0,0.1)",
                      backgroundImage: bg.src ? `url(${bg.src})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      background: bg.src ? undefined : "#090909",
                      color: "rgba(255,255,255,0.85)",
                      textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                    }}
                  >
                    {bg.label}
                  </button>
                ))}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 h-14 rounded-xl border border-dashed border-black/20 flex items-center justify-center gap-1.5 text-xs text-black/45 hover:text-black hover:border-black/40 transition-all cursor-none"
                >
                  <ImagePlus size={13} /> Görsel Yükle
                </button>
              </div>

              {/* Eylem butonları */}
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFlicker(!flicker)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-black/10 text-sm text-black/50 hover:text-black hover:border-black/20 transition-all cursor-none"
                >
                  <RefreshCw size={14} />
                  {flicker ? "Yanıp Sönmeyi Durdur" : "Yanıp Sönme Efekti"}
                </button>
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-black/10 text-sm text-black/50 hover:text-black hover:border-black/20 transition-all cursor-none disabled:opacity-40"
                >
                  <Download size={14} />
                  {isDownloading ? "İndiriliyor…" : "PNG İndir"}
                </button>
              </div>

              <p className="text-xs text-black/20 text-center mt-2">
                ✦ Yazıyı fare ile sürükleyerek konumlandırabilirsiniz
              </p>

              {/* Hazır tasarımlar */}
              <div className="mt-6 p-5 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <label className="text-xs font-bold uppercase tracking-wider text-black/30 mb-4 block">
                  Hazır Neon Tasarımları
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TEMPLATES.map((t) => {
                    const tf = getStudioFont(t.font);
                    return (
                      <button
                        key={t.label}
                        onClick={() => applyTemplate(t)}
                        className="h-16 rounded-xl bg-[#0b0b0b] border border-black/10 hover:border-[#9B5CFF]/60 flex items-center justify-center px-2 transition-all cursor-none overflow-hidden"
                        title={t.label}
                      >
                        <span
                          className="text-sm whitespace-nowrap"
                          style={{
                            fontFamily: tf.family,
                            color: t.color,
                            textShadow: `0 0 5px ${t.color}, 0 0 14px ${t.color}80`,
                          }}
                        >
                          {t.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Kontroller */}
            <div className="space-y-6">
              {/* Yazı */}
              <div className="p-6 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <label className="text-xs font-bold uppercase tracking-wider text-black/30 mb-3 block">
                  Yazınız
                </label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={30}
                  placeholder="Neon yazınızı girin..."
                  className="w-full bg-transparent text-black text-lg font-semibold outline-none placeholder:text-black/20 border-b border-black/10 pb-2 focus:border-[#FF00C8]/50 transition-colors cursor-auto"
                />
                <p className="text-xs text-black/20 mt-2 text-right">{text.length}/30</p>
              </div>

              {/* Font */}
              <div className="p-6 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <label className="text-xs font-bold uppercase tracking-wider text-black/30 mb-4 block">
                  Font Seçimi — {STUDIO_FONTS.length} font
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[320px] overflow-y-auto pr-1">
                  {STUDIO_FONTS.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => setFontKey(f.key)}
                      className="flex flex-col items-start px-4 py-3 rounded-xl border transition-all cursor-none text-left"
                      style={{
                        borderColor: fontKey === f.key ? "#9B5CFF" : "rgba(0,0,0,0.08)",
                        background: fontKey === f.key ? "rgba(155,92,255,0.08)" : "transparent",
                      }}
                    >
                      <span className="text-base text-black mb-0.5" style={{ fontFamily: f.family }}>
                        {f.label}
                      </span>
                      <span className="text-[10px] text-black/30">{f.style}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Renk */}
              <div className="p-6 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <label className="text-xs font-bold uppercase tracking-wider text-black/30 mb-4 block">
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
                      <span className="text-[10px] text-black/30">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Boyut */}
              <div className="p-6 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <label className="text-xs font-bold uppercase tracking-wider text-black/30 mb-3 block">
                  Boyut — önizlemeye anında yansır
                </label>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setSize(s)}
                      className="px-4 py-2 rounded-lg text-sm border transition-all cursor-none"
                      style={{
                        borderColor: size.label === s.label ? "#FF00C8" : "rgba(0,0,0,0.08)",
                        background: size.label === s.label ? "rgba(255,0,200,0.08)" : "transparent",
                        color: size.label === s.label ? "#FF00C8" : "rgba(0,0,0,0.5)",
                      }}
                    >
                      {s.label} — {s.cm}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ortam */}
              <div className="p-6 rounded-2xl border border-black/8 bg-[#FFFFFF]">
                <label className="text-xs font-bold uppercase tracking-wider text-black/30 mb-3 block">
                  Ortam Önizleme
                </label>
                <div className="flex flex-wrap gap-2">
                  {ENVS.map((e) => (
                    <button
                      key={e}
                      onClick={() => setEnv(e)}
                      className="px-4 py-2 rounded-lg text-sm border transition-all cursor-none"
                      style={{
                        borderColor: env === e ? "#00E5FF" : "rgba(0,0,0,0.08)",
                        background: env === e ? "rgba(0,229,255,0.08)" : "transparent",
                        color: env === e ? "#00E5FF" : "rgba(0,0,0,0.5)",
                      }}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp Teklif */}
              <button
                onClick={handleWaOrder}
                disabled={isDownloading}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-black text-base transition-all hover:scale-[1.02] cursor-none disabled:opacity-60"
                style={{ background: "#25D366", boxShadow: "0 0 32px rgba(37,211,102,0.35)" }}
              >
                <MessageCircle size={20} />
                WhatsApp ile Teklif Al
              </button>

              <p className="text-xs text-black/25 text-center">
                Ücretsiz tasarım danışmanlığı · 7/24 destek · 2 yıl garanti
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

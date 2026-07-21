"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, ArrowRight, CornerDownLeft,
  Signpost, Lightbulb, CreditCard, Image as ImageIcon, Gift, Sparkles, Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { ACIK_HAVA } from "@/lib/acik-hava";
import { BASKI_MATBAA } from "@/lib/baski-matbaa";
import { PRODUCTS } from "@/lib/products";
import { PROMO_CATEGORIES } from "@/lib/promosyon";
import { cn } from "@/lib/utils";

interface SearchEntry {
  label: string;
  sub: string;
  href: string;
  group: string;
  color: string;
  emoji?: string;
  keywords: string;
}

const GROUP_ICONS: Record<string, LucideIcon> = {
  Tabela: Signpost,
  "Neon Ürünler": Lightbulb,
  "Baskı ve Matbaa": CreditCard,
  "Açık Hava": ImageIcon,
  Promosyon: Gift,
  Davetiye: Mail,
  "Özel Tasarım": Sparkles,
};

// Türkçe karakterleri sadeleştir: "düğün" ↔ "dugun" her iki yazımla da eşleşsin
function foldTr(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const s of SERVICES) {
    entries.push({
      label: s.title,
      sub: s.tagline,
      href: `/${s.basePath ?? "hizmetler"}/${s.slug}`,
      group: "Tabela",
      color: s.color,
      keywords: `${s.title} ${s.shortTitle} ${s.navLabel} ${s.tagline} ${s.category}`,
    });
  }

  for (const s of BASKI_MATBAA) {
    entries.push({
      label: s.title,
      sub: s.tagline,
      href: `/${s.basePath ?? "hizmetler"}/${s.slug}`,
      group: "Baskı ve Matbaa",
      color: s.color,
      keywords: `${s.title} ${s.shortTitle} ${s.navLabel} ${s.tagline} ${s.category} matbaa baskı`,
    });
  }

  for (const s of ACIK_HAVA) {
    entries.push({
      label: s.title,
      sub: s.tagline,
      href: `/${s.basePath ?? "hizmetler"}/${s.slug}`,
      group: "Açık Hava",
      color: s.color,
      keywords: `${s.title} ${s.shortTitle} ${s.navLabel} ${s.tagline} ${s.category} açık hava reklam`,
    });
  }

  entries.push({
    label: "Davetiye Modelleri",
    sub: "Düğün, nişan ve özel gün davetiyeleri",
    href: "/davetiyeler",
    group: "Davetiye",
    color: "#D9668A",
    keywords: "davetiye düğün nişan kına söz özel gün davet",
  });

  entries.push({
    label: "Kişiye Özel Neon Tasarla",
    sub: "Kendi yazını ve rengini seç, neonunu tasarla",
    href: "/studio",
    group: "Özel Tasarım",
    color: "#FF6EC7",
    keywords: "neon tasarla kişiye özel tasarım stüdyo studio yazı isim",
  });

  for (const p of PRODUCTS) {
    entries.push({
      label: p.name,
      sub: p.category,
      href: `/urunler/${p.slug}`,
      group: "Neon Ürünler",
      color: p.glowColor,
      emoji: p.emoji,
      keywords: `${p.name} ${p.category} ${p.tags.join(" ")} neon tabela`,
    });
  }

  for (const cat of PROMO_CATEGORIES) {
    entries.push({
      label: cat.title,
      sub: cat.desc,
      href: `/promosyon/${cat.slug}`,
      group: "Promosyon",
      color: cat.color,
      keywords: `${cat.title} ${cat.desc} promosyon hediyelik kurumsal`,
    });
    for (const p of cat.products) {
      entries.push({
        label: p.name,
        sub: cat.title,
        href: `/promosyon/${cat.slug}`,
        group: "Promosyon",
        color: cat.color,
        keywords: `${p.name} ${p.description} ${cat.title} promosyon`,
      });
    }
  }

  return entries;
}

const QUICK_LINKS = [
  { label: "Kartvizit", href: "/baski-matbaa/kartvizit" },
  { label: "Magnet", href: "/baski-matbaa/magnet" },
  { label: "Neon Tabela", href: "/urunler" },
  { label: "Kutu Harf", href: "/hizmetler/kutu-harf" },
  { label: "Araç Giydirme", href: "/acik-hava/arac-giydirme" },
  { label: "Davetiye", href: "/davetiyeler" },
];

const MAX_RESULTS = 12;

export function SearchButton({
  dark,
  mobile,
  hotkey,
}: {
  dark: boolean;
  mobile?: boolean;
  /** Ctrl/Cmd+K kısayolunu yalnızca tek örnek dinlemeli — Header'da iki kez monte ediliyor */
  hotkey?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = foldTr(query.trim());
    if (q.length < 2) return [];
    const words = q.split(/\s+/);
    const scored = index
      .map((e) => {
        const hay = foldTr(e.keywords);
        const label = foldTr(e.label);
        if (!words.every((w) => hay.includes(w))) return null;
        let score = 0;
        if (label.startsWith(q)) score += 3;
        else if (label.includes(q)) score += 2;
        return { e, score };
      })
      .filter((x): x is { e: SearchEntry; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RESULTS)
      .map((x) => x.e);
    return scored;
  }, [query, index]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchEntry[]>();
    for (const r of results) {
      const list = map.get(r.group) ?? [];
      list.push(r);
      map.set(r.group, list);
    }
    return [...map.entries()];
  }, [results]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const go = useCallback(
    (href: string) => {
      close();
      router.push(href);
    },
    [close, router]
  );

  // Ctrl/Cmd+K ile aç, Esc ile kapat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (hotkey && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, hotkey]);

  // Açıkken arkaplan kaydırmayı kilitle, inputa odaklan
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => {
        document.body.style.overflow = "";
        clearTimeout(t);
      };
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Sitede ara"
        className={cn(
          mobile
            ? cn("p-2 cursor-auto", dark ? "text-white/70" : "text-black/60")
            : cn(
                "relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-none",
                dark
                  ? "text-white/55 hover:text-white hover:bg-white/10"
                  : "text-black/50 hover:text-black hover:bg-black/5"
              )
        )}
      >
        <Search size={mobile ? 18 : 15} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/55 backdrop-blur-md flex items-start justify-center px-4 pt-[12vh]"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.96, y: -12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, y: -8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-3xl border border-black/8 bg-[#FFFFFF]/97 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Arama girişi */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5">
                <Search size={18} className="text-[#FF6EC7] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.keyCode === 13) && results.length > 0) {
                      e.preventDefault();
                      go(results[0].href);
                    }
                  }}
                  placeholder="Ürün veya hizmet ara… (kartvizit, neon, magnet)"
                  className="flex-1 bg-transparent text-[15px] text-black placeholder:text-black/30 outline-none"
                />
                <kbd className="hidden sm:block text-[10px] font-semibold text-black/30 border border-black/10 rounded-md px-1.5 py-0.5">
                  ESC
                </kbd>
                <button
                  onClick={close}
                  aria-label="Aramayı kapat"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-black/40 hover:text-black hover:bg-black/5 transition-colors cursor-none"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Sonuçlar */}
              <div className="max-h-[52vh] overflow-y-auto overscroll-contain">
                {query.trim().length < 2 ? (
                  <div className="px-5 py-6">
                    <p className="text-[11px] font-bold uppercase tracking-[3px] text-black/30 mb-3">
                      Popüler Aramalar
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_LINKS.map((q) => (
                        <button
                          key={q.label}
                          onClick={() => go(q.href)}
                          className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-black/60 border border-black/10 hover:border-[#FF6EC7]/60 hover:text-black hover:bg-[#FF6EC7]/5 transition-all cursor-none"
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-5 py-10 text-center">
                    <p className="text-sm font-semibold text-black/60 mb-1">
                      “{query}” için sonuç bulunamadı
                    </p>
                    <p className="text-xs text-black/35">
                      Farklı bir kelimeyle deneyin — ör. kartvizit, magnet, neon, ajanda
                    </p>
                  </div>
                ) : (
                  <div className="py-2">
                    {grouped.map(([group, items]) => {
                      const GIcon = GROUP_ICONS[group] ?? Search;
                      return (
                        <div key={group}>
                          <p className="px-5 pt-3 pb-1 text-[10px] font-bold uppercase tracking-[3px] text-black/30">
                            {group}
                          </p>
                          {items.map((r) => (
                            <button
                              key={r.href + r.label}
                              onClick={() => go(r.href)}
                              className="group/item w-full flex items-center gap-3 px-5 py-2.5 text-left hover:bg-black/[0.03] transition-colors cursor-none"
                            >
                              <span
                                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm"
                                style={{ background: `${r.color}18`, color: r.color }}
                              >
                                {r.emoji ?? <GIcon size={15} />}
                              </span>
                              <span className="flex-1 min-w-0">
                                <span className="block text-sm font-semibold text-black truncate">
                                  {r.label}
                                </span>
                                <span className="block text-xs text-black/35 truncate">{r.sub}</span>
                              </span>
                              <ArrowRight
                                size={14}
                                className="shrink-0 text-black/20 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                              />
                            </button>
                          ))}
                        </div>
                      );
                    })}
                    <p className="flex items-center gap-1.5 px-5 py-3 text-[11px] text-black/30 border-t border-black/5 mt-2">
                      <CornerDownLeft size={11} /> Enter ile ilk sonuca git
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

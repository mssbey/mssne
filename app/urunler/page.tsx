"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES_LIST } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

const SORT_OPTIONS = [
  { value: "default", label: "Önerilen" },
  { value: "price-asc", label: "Fiyat: Artan" },
  { value: "price-desc", label: "Fiyat: Azalan" },
  { value: "rating", label: "En Yüksek Puan" },
  { value: "new", label: "Yeni Gelenler" },
];

export default function UrunlerPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [sort, setSort] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }

    if (activeCategory !== "tumu") {
      list = list.filter((p) => p.categorySlug === activeCategory);
    }

    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "new": list = list.filter((p) => p.isNew).concat(list.filter((p) => !p.isNew)); break;
    }

    return list;
  }, [search, activeCategory, sort]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#9B5CFF] mb-3 block">
            Katalog
          </span>
          <h1
            className="text-[clamp(28px,4vw,48px)] font-black tracking-[-2px] mb-2"
            style={{
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tüm Ürünler
          </h1>
          <p className="text-white/40 text-sm">{filtered.length} ürün listeleniyor</p>
        </motion.div>

        {/* Search + Sort bar */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ürün ara..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/8 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#9B5CFF]/50 transition-colors cursor-auto"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white cursor-none">
                <X size={14} />
              </button>
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/8 text-white/70 text-sm outline-none cursor-auto appearance-none"
          >
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap mb-8 overflow-x-auto pb-1">
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-all cursor-none shrink-0"
              style={{
                borderColor: activeCategory === cat.slug ? "#9B5CFF" : "rgba(255,255,255,0.08)",
                background: activeCategory === cat.slug ? "rgba(155,92,255,0.1)" : "transparent",
                color: activeCategory === cat.slug ? "#9B5CFF" : "rgba(255,255,255,0.45)",
              }}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <span className="text-5xl mb-4 block">🔍</span>
              <p className="text-white/40">Aramanızla eşleşen ürün bulunamadı.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("tumu"); }}
                className="mt-4 px-5 py-2.5 rounded-full text-sm border border-white/10 text-white/50 hover:text-white cursor-none"
              >
                Filtreleri Temizle
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

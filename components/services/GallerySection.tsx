"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceImage } from "./ServiceImage";
import type { ServiceData } from "@/lib/services";

export function GallerySection({
  service,
  heading,
}: {
  service: ServiceData;
  heading?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + service.gallery.length) % service.gallery.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % service.gallery.length));

  const active = activeIndex !== null ? service.gallery[activeIndex] : null;

  return (
    <section id="galeri" className="py-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span
            className="text-xs font-bold uppercase tracking-[4px] mb-4 block"
            style={{ color: service.color }}
          >
            Galeri
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-tight text-black">
            {heading ?? `Tamamlanan ${service.shortTitle} Projelerimizden`}
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 [column-fill:_balance]">
          {service.gallery.map((item, i) => (
            <motion.button
              key={item.label + i}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="group relative w-full mb-4 rounded-2xl overflow-hidden border border-black/8 hover:border-black/20 transition-all block cursor-none text-left"
              style={{ breakInside: "avoid", aspectRatio: i % 5 === 0 ? "3/4" : "4/5" }}
            >
              <ServiceImage
                src={`/${service.basePath ?? "hizmetler"}/${service.slug}/gallery-${i + 1}.jpg`}
                alt={item.alt}
                label={item.alt}
                icon={item.icon}
                color={service.color}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.productCode && (
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm">
                  Ürün Kodu: {item.productCode}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn size={14} />
                  <span className="text-xs font-semibold">{item.label}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-6 cursor-none"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-black/10 text-white hover:bg-black/20 transition-colors cursor-none"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 w-11 h-11 rounded-full flex items-center justify-center bg-black/10 text-white hover:bg-black/20 transition-colors cursor-none"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 w-11 h-11 rounded-full flex items-center justify-center bg-black/10 text-white hover:bg-black/20 transition-colors cursor-none"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden border border-black/10"
            >
              <ServiceImage
                src={`/${service.basePath ?? "hizmetler"}/${service.slug}/gallery-${(activeIndex ?? 0) + 1}.jpg`}
                alt={active.alt}
                label={active.alt}
                icon={active.icon}
                color={service.color}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-semibold">{active.label}</p>
                {active.productCode && (
                  <p className="mt-1 text-xs font-medium tracking-wide text-white/70">
                    Ürün Kodu: {active.productCode}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

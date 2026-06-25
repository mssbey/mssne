"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowRight, Clock } from "lucide-react";

export function BlogSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[4px] text-[#00E5FF] mb-4 block">
              Blog
            </span>
            <h2
              className="text-[clamp(32px,4.5vw,52px)] font-black tracking-[-2px]"
              style={{
                background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Son Makaleler
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-white/40 hover:text-white transition-colors cursor-none"
          >
            Tümünü Gör →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/8 bg-[#0D0D0D] overflow-hidden hover:border-white/15 transition-all cursor-none hover:-translate-y-1 duration-300"
            >
              {/* Color strip */}
              <div
                className="h-1"
                style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }}
              />

              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-white/30 mb-5">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#FF00C8] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{post.excerpt}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium"
                  style={{ color: post.color }}
                >
                  Devamını Oku <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

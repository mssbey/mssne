import { notFound } from "next/navigation";
import { Star, Package, Shield, Truck } from "lucide-react";
import { getProductBySlug, getRelatedProducts, PRODUCTS } from "@/lib/products";
import { ProductActions } from "@/components/product/ProductActions";
import { ProductCard } from "@/components/ui/ProductCard";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

interface Props { params: Promise<{ slug: string }> }

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/30 mb-10">
          <a href="/" className="hover:text-white transition-colors cursor-none">Ana Sayfa</a>
          <span>/</span>
          <a href="/urunler" className="hover:text-white transition-colors cursor-none">Ürünler</a>
          <span>/</span>
          <span className="text-white/60">{product.name}</span>
        </nav>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left — visual */}
          <div className="space-y-4">
            {/* Main preview */}
            <div
              className="relative rounded-3xl border border-white/8 overflow-hidden flex items-center justify-center"
              style={{
                minHeight: "420px",
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${product.glowColor}18 0%, transparent 70%), #090909`,
              }}
            >
              {product.badge && (
                <span
                  className="absolute top-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: `${product.glowColor}20`,
                    color: product.glowColor,
                    border: `1px solid ${product.glowColor}40`,
                  }}
                >
                  {product.badge}
                </span>
              )}
              <span
                className="text-[100px] select-none"
                style={{
                  filter: `drop-shadow(0 0 40px ${product.glowColor}) drop-shadow(0 0 80px ${product.glowColor}50)`,
                  animation: "neon-pulse 2s ease-in-out infinite",
                }}
              >
                {product.emoji}
              </span>
            </div>

            {/* Color swatches preview */}
            <div className="grid grid-cols-4 gap-2">
              {product.colors.map((c) => (
                <div
                  key={c.hex}
                  className="rounded-xl border border-white/8 flex items-center justify-center py-4 text-3xl"
                  style={{
                    background: `radial-gradient(circle, ${c.hex}20 0%, transparent 70%)`,
                  }}
                >
                  <span style={{ filter: `drop-shadow(0 0 12px ${c.hex})` }}>
                    {product.emoji}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — info + actions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[4px] mb-2" style={{ color: product.glowColor }}>
              {product.category}
            </p>
            <h1 className="text-[clamp(24px,3.5vw,40px)] font-black text-white tracking-[-1px] mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? product.glowColor : "none"}
                    stroke={i < Math.floor(product.rating) ? product.glowColor : "rgba(255,255,255,0.2)"}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{product.rating}</span>
              <span className="text-sm text-white/30">({product.reviewCount} yorum)</span>
            </div>

            <p className="text-white/55 text-base leading-relaxed mb-6">{product.longDescription}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.features.map((f) => (
                <span
                  key={f}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/8 text-white/50"
                >
                  ✓ {f}
                </span>
              ))}
            </div>

            {/* Product actions (client) */}
            <ProductActions product={product} />
          </div>
        </div>

        {/* Details tabs */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {[
            { icon: Package, title: "Malzeme", value: product.material },
            { icon: Shield, title: "Garanti", value: product.warranty },
            { icon: Truck, title: "Teslimat", value: product.deliveryDays },
          ].map(({ icon: Icon, title, value }) => (
            <div key={title} className="p-6 rounded-2xl border border-white/8 bg-[#0D0D0D] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-white/40" />
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">{title}</p>
                <p className="text-sm font-medium text-white/80">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-black text-white tracking-[-1px] mb-8">Benzer Ürünler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

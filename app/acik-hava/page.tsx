import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ACIK_HAVA } from "@/lib/acik-hava";
import { getServiceIcon } from "@/components/services/icon-map";

export const metadata: Metadata = {
  title: "Açık Hava Reklamları | Ikarus Reklam",
  description:
    "Billboard, vinil germe ve araç giydirme hizmetlerimizi keşfedin. Yüksek trafikli lokasyonlarda ve hareket halinde markanızı görünür kılan açık hava reklam çözümleri.",
  alternates: { canonical: "https://www.ikarusreklam.com/acik-hava" },
};

export default function AcikHavaIndexPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-black/30 mb-8">
          <Link href="/" className="hover:text-black transition-colors cursor-none">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-black/60">Açık Hava Reklamları</span>
        </nav>

        <span className="text-xs font-bold uppercase tracking-[4px] mb-4 block text-[#D9668A]">
          Açık Hava Reklamları
        </span>
        <h1 className="text-[clamp(36px,6vw,64px)] font-black tracking-[-2px] leading-[1.02] text-black mb-6 max-w-3xl">
          Şehirde ve Yolda Görünürlük Sağlayan Reklam Çözümleri
        </h1>
        <p className="text-black/50 text-base max-w-2xl leading-relaxed mb-16">
          Baskıdan montaja kadar tüm süreci kendi ekibimizle yürütüyoruz. İhtiyacınıza uygun
          hizmeti seçin, projenizi birlikte hayata geçirelim.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACIK_HAVA.map((service) => {
            const Icon = getServiceIcon(service.heroIcon);
            return (
              <Link
                key={service.slug}
                href={`/acik-hava/${service.slug}`}
                className="group relative flex flex-col justify-between p-8 rounded-3xl border border-black/8 bg-[#FFFFFF] hover:border-black/20 transition-all overflow-hidden min-h-[280px] cursor-none"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${service.color}18 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                  style={{ background: `${service.color}14` }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>
                <div className="relative">
                  <h2 className="text-xl font-black text-black mb-2 tracking-[-0.5px]">
                    {service.shortTitle}
                  </h2>
                  <p className="text-sm text-black/40 leading-relaxed mb-6">{service.tagline}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-transform group-hover:translate-x-1"
                    style={{ color: service.color }}
                  >
                    Detayları Gör <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

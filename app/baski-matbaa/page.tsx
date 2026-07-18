import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BASKI_MATBAA } from "@/lib/baski-matbaa";
import { getServiceIcon } from "@/components/services/icon-map";

export const metadata: Metadata = {
  title: "Baskı ve Matbaa Hizmetleri | Ikarus Reklam",
  description:
    "Kartvizit, broşür, magnet ve davetiye baskı hizmetlerimizi keşfedin. Kurumsal kimliğinize uygun kaliteli baskı ve tasarım çözümleri.",
  alternates: { canonical: "https://www.ikarusreklam.com/baski-matbaa" },
};

const PRINT_IMAGES: Record<string, string> = {
  kartvizit: "/baski-matbaa/kartvizit/hero.jpg",
  brosur: "/home/services/print.webp",
  magnet: "/baski-matbaa/magnet/hero.jpg",
};

export default function BaskiMatbaaIndexPage() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-black/30 mb-8">
          <Link href="/" className="hover:text-black transition-colors cursor-none">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-black/60">Baskı ve Matbaa</span>
        </nav>

        <span className="text-xs font-bold uppercase tracking-[4px] mb-4 block text-[#D9668A]">
          Baskı ve Matbaa
        </span>
        <h1 className="text-[clamp(36px,6vw,64px)] font-black tracking-[-2px] leading-[1.02] text-black mb-6 max-w-3xl">
          Kurumsal Baskı ve Tanıtım Materyalleri
        </h1>
        <p className="text-black/50 text-base max-w-2xl leading-relaxed mb-16">
          Tasarımdan baskıya, kesimden teslimata kadar tüm süreci kendi matbaamızda yürütüyoruz.
          İhtiyacınıza uygun hizmeti seçin, projenizi birlikte hayata geçirelim.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BASKI_MATBAA.map((service) => {
            const Icon = getServiceIcon(service.heroIcon);
            return (
              <Link
                key={service.slug}
                href={`/baski-matbaa/${service.slug}`}
                className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0E] p-8 shadow-[0_20px_60px_rgba(17,12,15,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_28px_80px_rgba(17,12,15,0.18)] cursor-none"
              >
                <Image
                  src={PRINT_IMAGES[service.slug] ?? "/home/services/print.webp"}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090C]/95 via-[#09090C]/55 to-[#09090C]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090C]/65 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-45"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 10% 0%, ${service.color}66 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: `${service.color}28`, boxShadow: `0 12px 35px ${service.color}22` }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>
                <div className="relative z-10">
                  <h2 className="mb-2 text-xl font-black tracking-[-0.5px] text-white">
                    {service.shortTitle}
                  </h2>
                  <p className="mb-6 max-w-[18rem] text-sm leading-relaxed text-white/65">{service.tagline}</p>
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

          <Link
            href="/davetiyeler"
            className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0E] p-8 shadow-[0_20px_60px_rgba(17,12,15,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_28px_80px_rgba(17,12,15,0.18)] cursor-none"
          >
            <Image
              src="/home/services/invitations.webp"
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090C]/95 via-[#09090C]/55 to-[#09090C]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090C]/65 via-transparent to-transparent" />
            <div
              className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-45"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 10% 0%, #D9668A66 0%, transparent 70%)",
              }}
            />
            <div
              className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 text-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
              style={{ background: "#D9668A28", boxShadow: "0 12px 35px #D9668A22" }}
            >
              💌
            </div>
            <div className="relative z-10">
              <h2 className="mb-2 text-xl font-black tracking-[-0.5px] text-white">Davetiye</h2>
              <p className="mb-6 max-w-[18rem] text-sm leading-relaxed text-white/65">
                Düğün, nişan ve özel günleriniz için davetiye koleksiyonu.
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-transform group-hover:translate-x-1"
                style={{ color: "#D9668A" }}
              >
                Detayları Gör <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

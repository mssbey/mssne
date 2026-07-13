import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim — Ikarus Reklam",
  description:
    "Ikarus Reklam iletişim bilgileri: telefon, e-posta, adres ve çalışma saatleri. WhatsApp'tan 7/24 ulaşın.",
};

const CARDS = [
  {
    icon: Phone,
    title: "Telefon",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    color: "#D9668A",
    note: "Mesai saatleri içinde arayabilirsiniz",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "#5FAE7F",
    note: "24 saat içinde dönüş yapıyoruz",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: CONTACT.address,
    href: undefined as string | undefined,
    color: "#F2B84B",
    note: "Atölyemize bekleriz",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: CONTACT.workingHours,
    href: undefined as string | undefined,
    color: "#FF8F66",
    note: "Pazar günleri kapalıyız",
  },
];

export default function IletisimPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-3 block">
            Bize Ulaşın
          </span>
          <h1
            className="text-[clamp(32px,5vw,56px)] font-black tracking-[-2px] mb-4"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, rgba(0,0,0,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            İletişim
          </h1>
          <p className="text-black/45 text-base max-w-md mx-auto">
            Tabela, neon, baskı veya promosyon — aklınızdaki projeyi anlatın,
            aynı gün içinde size dönelim.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {CARDS.map(({ icon: Icon, title, value, href, color, note }) => {
            const inner = (
              <>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/30 mb-1">{title}</p>
                <p className="text-base font-bold text-black leading-snug mb-1">{value}</p>
                <p className="text-xs text-black/35">{note}</p>
              </>
            );
            const cls =
              "block p-7 rounded-3xl border border-black/8 bg-white hover:border-black/20 hover:-translate-y-0.5 transition-all cursor-none";
            return href ? (
              <a key={title} href={href} className={cls}>{inner}</a>
            ) : (
              <div key={title} className={cls}>{inner}</div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="rounded-3xl border border-black/8 bg-white p-10 text-center">
          <h2 className="text-2xl font-black text-black tracking-[-1px] mb-3">
            En hızlı yanıt WhatsApp&apos;ta
          </h2>
          <p className="text-black/45 text-sm max-w-md mx-auto mb-6">
            Projenizin fotoğrafını veya ölçülerini gönderin, dakikalar içinde
            fiyat teklifi ve üretim süresi bilgisi verelim.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
              "Merhaba! Bir proje hakkında bilgi almak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black text-sm transition-all hover:scale-105 cursor-none"
            style={{ background: "#25D366", boxShadow: "0 0 28px rgba(37,211,102,0.35)" }}
          >
            <MessageCircle size={18} /> WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>
    </div>
  );
}

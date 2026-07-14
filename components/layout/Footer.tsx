import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/data";

const SOCIAL = [
  {
    label: "Instagram",
    href: "#",
    color: "#D9668A",
    svg: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    color: "#FF8F66",
    svg: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    color: "#F2B84B",
    svg: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    color: "#5FAE7F",
    svg: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = {
  Ürünler: [
    { label: "Kişiye Özel Tasarım", href: "/studio" },
    { label: "Neon Tabelalar", href: "/urunler" },
    { label: "Promosyon Ürünleri", href: "/promosyon" },
    { label: "Tabela Sistemleri", href: "/hizmetler" },
    { label: "Baskı ve Matbaa", href: "/baski-matbaa" },
  ],
  Kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "İade Şartları", href: "/iade" },
    { label: "Mesafeli Satış Sözleşmesi", href: "/sozlesme" },
  ],
  Hesap: [
    { label: "Üye Girişi", href: "/giris" },
    { label: "Yeni Üyelik", href: "/kayit" },
    { label: "Sipariş Geçmişi", href: "/siparislerim" },
    { label: "Alışveriş Listem", href: "/listelerim" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Link href="/" className="inline-block cursor-none">
              <Image
                src="/logo.png"
                alt="İkarus Reklam"
                width={176}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <p className="text-black/40 text-sm leading-relaxed mb-6 max-w-xs">
            Türkiye&apos;nin en premium kişiye özel neon tabela stüdyosu.
            Markanız için sınırsız ışık, sonsuz tasarım.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors cursor-none"
            >
              <Phone size={14} className="text-[#D9668A]" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.phone2Href}
              className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors cursor-none"
            >
              <Phone size={14} className="text-[#D9668A]" />
              {CONTACT.phone2}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors cursor-none"
            >
              <Mail size={14} className="text-[#D9668A]" />
              {CONTACT.email}
            </a>
            <span className="flex items-start gap-2 text-sm text-black/40 max-w-xs">
              <MapPin size={14} className="text-[#D9668A] mt-0.5 shrink-0" />
              {CONTACT.address}
            </span>
            <span className="flex items-center gap-2 text-sm text-black/40">
              <Clock size={14} className="text-[#D9668A]" />
              {CONTACT.workingHours}
            </span>
          </div>

          <div className="flex gap-3">
            {SOCIAL.map(({ label, href, color, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-black/8 flex items-center justify-center hover:border-black/20 transition-all cursor-none hover:scale-110"
                style={{ color }}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/30 mb-4">
              {title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/45 hover:text-black transition-colors cursor-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-black/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/25">© 2026 Ikarus Reklam. Tüm hakları saklıdır.</p>
          <a
            href={`https://wa.me/905468156089?text=${encodeURIComponent("Merhaba, neon tabela hakkında bilgi almak istiyorum.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 transition-all cursor-none"
          >
            <span className="text-sm">💬</span> WhatsApp&apos;tan Ulaş
          </a>
        </div>
      </div>
    </footer>
  );
}

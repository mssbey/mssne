import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { PublicSettings } from "@/lib/cms/settings";
import { phoneHref } from "@/lib/cms/settings";

type FooterLink = { label: string; href: string };

export function Footer({ settings, links }: { settings: PublicSettings; links: FooterLink[] }) {
  const { brand, contact, social, theme } = settings;
  const instagramHref = social.instagram || "https://www.instagram.com/ikarusreklam/";
  const legalLinks = [
    { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    { label: "İade Şartları", href: "/iade-sartlari" },
    { label: "Mesafeli Satış Sözleşmesi", href: "/satis-sozlesmesi" },
  ].map((legal) => ({ ...legal, label: links.find((link) => link.href === legal.href)?.label || legal.label }));
  return (
    <footer className="border-t border-black/5" style={{ background: theme.footer }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.45fr_.8fr_.8fr_.85fr] gap-12">
        <div>
          <Link href="/" className="inline-block mb-6"><Image src={brand.logo} alt={brand.siteName} width={176} height={60} className="h-14 w-auto" /></Link>
          <p className="text-black/45 text-sm leading-relaxed mb-6 max-w-sm">{brand.footerDescription}</p>
          <div className="flex flex-col gap-3">
            <a href={phoneHref(contact.phone)} className="footer-contact"><Phone size={14} />{contact.phone}</a>
            {contact.phone2 && <a href={phoneHref(contact.phone2)} className="footer-contact"><Phone size={14} />{contact.phone2}</a>}
            <a href={`mailto:${contact.email}`} className="footer-contact"><Mail size={14} />{contact.email}</a>
            <span className="footer-contact"><MapPin size={14} />{contact.address}</span>
            <span className="footer-contact"><Clock size={14} />{contact.workingHours}</span>
          </div>
        </div>
        <div><h4 className="footer-title">Hızlı bağlantılar</h4><ul className="footer-links">{links.filter((link) => !legalLinks.some((legal) => legal.href === link.href || legal.label === link.label)).map((link) => <li key={`${link.label}-${link.href}`}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>
        <div><h4 className="footer-title">Yasal</h4><ul className="footer-links">{legalLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>
        <div><h4 className="footer-title">Sosyal medya</h4><a className="footer-instagram" href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="İkarus Reklam Instagram hesabı"><span><svg width="17" height="17" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></span><strong>@ikarusreklam</strong></a></div>
      </div>
      <div className="border-t border-black/5 py-6"><div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"><p className="text-xs text-black/30">{brand.copyright}</p><a href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Merhaba, bilgi almak istiyorum.")}`} target="_blank" rel="noreferrer" className="footer-whatsapp">💬 WhatsApp&apos;tan Ulaş</a></div></div>
    </footer>
  );
}

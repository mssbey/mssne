import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { getPublicSettings, phoneHref } from "@/lib/cms/settings";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ManagedPageContent } from "@/components/cms/ManagedPageContent";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPublicSettings();
  return getManagedPageMetadata("iletisim", {
    title: `İletişim — ${settings.brand.siteName}`,
    description: `${settings.brand.siteName} telefon, e-posta, adres ve çalışma saatleri.`,
  });
}

export default async function IletisimPage() {
  const [settings, page] = await Promise.all([
    getPublicSettings(),
    getManagedPage("iletisim"),
  ]);
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();
  const { contact } = settings;
  const cards = [
    { icon: Phone, title: "Telefon", value: [contact.phone, contact.phone2].filter(Boolean).join(" · "), href: phoneHref(contact.phone), color: "#D9668A", note: "Mesai saatleri içinde arayabilirsiniz" },
    { icon: Mail, title: "E-posta", value: contact.email, href: `mailto:${contact.email}`, color: "#5FAE7F", note: "24 saat içinde dönüş yapıyoruz" },
    { icon: MapPin, title: "Adres", value: contact.address, href: undefined, color: "#F2B84B", note: "Atölyemize bekleriz" },
    { icon: Clock, title: "Çalışma Saatleri", value: contact.workingHours, href: undefined, color: "#FF8F66", note: "Güncel çalışma saatleri" },
  ];
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[4px] text-[#D9668A] mb-3 block">Bize Ulaşın</span>
          <h1 className="text-[clamp(32px,5vw,56px)] font-black tracking-[-2px] mb-4">{page?.name || "İletişim"}</h1>
          <p className="text-black/45 text-base max-w-md mx-auto">{page?.excerpt || "Tabela, neon, baskı veya promosyon — aklınızdaki projeyi anlatın, aynı gün içinde size dönelim."}</p>
        </div>
        {page?.coverImage && <div className="managed-page-cover"><Image src={page.coverImage} alt="İletişim" fill sizes="(max-width: 900px) 100vw, 1150px" priority /></div>}
        <ManagedPageContent content={page?.content} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map(({ icon: Icon, title, value, href, color, note }) => {
            const inner = <><div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${color}15` }}><Icon size={20} style={{ color }} /></div><p className="text-xs font-bold uppercase tracking-wider text-black/30 mb-1">{title}</p><p className="text-base font-bold text-black leading-snug mb-1">{value}</p><p className="text-xs text-black/35">{note}</p></>;
            const className = "block p-7 rounded-3xl border border-black/8 bg-white hover:border-black/20 hover:-translate-y-0.5 transition-all";
            return href ? <a key={title} href={href} className={className}>{inner}</a> : <div key={title} className={className}>{inner}</div>;
          })}
        </div>
        <div className="contact-layout">
          <section className="contact-form-card"><span className="contact-kicker">Projenizi anlatın</span><h2>Size özel teklif hazırlayalım.</h2><p>Formu doldurun; ekibimiz ihtiyacınızı inceleyip en uygun çözümle size ulaşsın.</p><ContactForm /></section>
          <aside className="contact-whatsapp-card"><MessageCircle size={28} /><span>Hızlı iletişim</span><h2>WhatsApp’tan yazın</h2><p>Fotoğraf ve ölçülerinizi gönderin, üretim süresi ve fiyat bilgisi alın.</p><a href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Merhaba! Bir proje hakkında bilgi almak istiyorum.")}`} target="_blank" rel="noopener noreferrer">WhatsApp&apos;tan Yaz</a></aside>
        </div>
      </div>
    </div>
  );
}

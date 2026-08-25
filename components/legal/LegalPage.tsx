import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Mail, ShieldCheck } from "lucide-react";
import { ManagedPageContent } from "@/components/cms/ManagedPageContent";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
  notice?: ReactNode;
  coverImage?: string | null;
  additionalContent?: string | null;
};

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="legal-list">{children}</ul>;
}

export function LegalListItem({ children }: { children: ReactNode }) {
  return <li><Check size={15} aria-hidden="true" /><span>{children}</span></li>;
}

export function LegalPage({ eyebrow, title, description, updatedAt, sections, notice, coverImage, additionalContent }: LegalPageProps) {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero-mark" aria-hidden="true"><ShieldCheck size={23} /></div>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="legal-meta"><span>İkarus Reklam</span><i aria-hidden="true" /><span>Son güncelleme: {updatedAt}</span></div>
      </header>
      {coverImage && <div className="legal-cover"><Image src={coverImage} alt={title} fill sizes="(max-width: 900px) 100vw, 1160px" priority /></div>}

      <div className="legal-layout">
        <aside className="legal-toc" aria-label="Sayfa içeriği">
          <span>Bu sayfada</span>
          <nav>{sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><small>{String(index + 1).padStart(2, "0")}</small>{section.title}</a>)}</nav>
          <Link href="/iletisim">Yardıma mı ihtiyacınız var?<ArrowUpRight size={14} /></Link>
        </aside>

        <div className="legal-content">
          {notice && <div className="legal-notice"><ShieldCheck size={20} aria-hidden="true" /><div>{notice}</div></div>}
          {sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <div className="legal-section-number">{String(index + 1).padStart(2, "0")}</div>
              <div><h2>{section.title}</h2>{section.content}</div>
            </section>
          ))}
          <ManagedPageContent content={additionalContent} />
          <div className="legal-contact-card">
            <div><span>Bir sorunuz mu var?</span><h2>Size yardımcı olalım.</h2><p>Politikalarımız veya sipariş süreciniz hakkında ekibimize ulaşabilirsiniz.</p></div>
            <a href="mailto:info@ikarusreklam.com"><Mail size={16} />info@ikarusreklam.com</a>
          </div>
        </div>
      </div>
    </article>
  );
}

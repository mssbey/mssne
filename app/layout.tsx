import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SiteContactProvider } from "@/components/layout/SiteContactProvider";
import { getPublicSettings } from "@/lib/cms/settings";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPublicSettings();
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.ikarusreklam.com"),
    title: String(settings.seo.title),
    description: String(settings.seo.description),
    keywords: String(settings.seo.keywords),
    generator: "mssbey",
    robots: String(settings.seo.robots || "index,follow"),
    openGraph: {
      title: String(settings.seo.title),
      description: String(settings.seo.description),
      images: [String(settings.seo.ogImage || settings.brand.logo)],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: String(settings.seo.title),
      description: String(settings.seo.description),
      images: [String(settings.seo.ogImage || settings.brand.logo)],
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = await getPublicSettings();
  const [headerMenu, footerMenu, managedMenuPages] = await Promise.all([
    db.menuItem.findMany({ where: { menu: { location: "HEADER" }, active: true, parentId: null }, orderBy: { sortOrder: "asc" } }).catch(() => []),
    db.menuItem.findMany({ where: { menu: { location: "FOOTER" }, active: true, parentId: null }, orderBy: { sortOrder: "asc" } }).catch(() => []),
    db.page.findMany({ where: { deletedAt: null, status: "PUBLISHED", OR: [{ showInMenu: true }, { showInFooter: true }] }, orderBy: { sortOrder: "asc" } }).catch(() => []),
  ]);
  const mergeLinks = (base: Array<{ label: string; href: string }>, extra: Array<{ label: string; href: string }>) =>
    Array.from(new Map([...base, ...extra].map((item) => [item.href, item])).values());
  const headerLinks = mergeLinks(
    headerMenu.map((item) => ({ label: item.label, href: item.url })),
    managedMenuPages.filter((item) => item.showInMenu).map((item) => ({ label: item.name, href: item.slug === "ana-sayfa" ? "/" : `/${item.slug}` })),
  );
  const footerLinks = mergeLinks(
    footerMenu.map((item) => ({ label: item.label, href: item.url })),
    managedMenuPages.filter((item) => item.showInFooter).map((item) => ({ label: item.name, href: item.slug === "ana-sayfa" ? "/" : `/${item.slug}` })),
  );
  const styles = {
    "--site-primary": settings.theme.primary,
    "--site-secondary": settings.theme.secondary,
    "--site-accent": settings.theme.accent,
    "--site-bg": settings.theme.background,
    "--site-text": settings.theme.text,
    "--site-button": settings.theme.button,
    "--site-radius": settings.theme.radius,
  } as CSSProperties;
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased" style={styles}>
        {/* Developed with care by mssbey */}
        <SiteContactProvider value={settings.contact}>
          <CustomCursor />
          <Header menuItems={headerLinks} logo={settings.brand.logo} />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer settings={settings} links={footerLinks} />
        </SiteContactProvider>
        <a href={`https://wa.me/${settings.contact.whatsapp}?text=${encodeURIComponent("Merhaba! Bilgi almak istiyorum.")}`} target="_blank" rel="noopener noreferrer" className="site-whatsapp" title="WhatsApp ile ulaşın">💬</a>
      </body>
    </html>
  );
}

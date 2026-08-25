export type BrandSettings = {
  siteName: string;
  shortName: string;
  logo: string;
  mobileLogo: string;
  whiteLogo: string;
  favicon: string;
  footerDescription: string;
  copyright: string;
};

export type ContactSettings = {
  phone: string;
  phone2: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: string;
  mapEmbed: string;
};

export type ThemeSettings = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  header: string;
  footer: string;
  button: string;
  radius: string;
  font: string;
};

export const defaultSettings = {
  brand: {
    siteName: "İkarus Reklam",
    shortName: "İkarus",
    logo: "/logo.png",
    mobileLogo: "/logo.png",
    whiteLogo: "/logo.png",
    favicon: "/favicon.ico",
    footerDescription:
      "Markanız için tabela, baskı, açık hava ve kişiye özel neon çözümleri.",
    copyright: `© ${new Date().getFullYear()} İkarus Reklam. Tüm hakları saklıdır.`,
  } satisfies BrandSettings,
  contact: {
    phone: "0546 815 60 89",
    phone2: "0352 320 20 26",
    whatsapp: "905468156089",
    email: "info@ikarusreklam.com",
    address: "Kayseri, Türkiye",
    workingHours: "Pzt–Cmt 09:00–18:00",
    mapEmbed: "",
  } satisfies ContactSettings,
  social: {
    instagram: "https://www.instagram.com/ikarusreklam/",
    facebook: "",
    linkedin: "",
    youtube: "",
    twitter: "",
    tiktok: "",
    behance: "",
    pinterest: "",
  },
  seo: {
    title: "İkarus Reklam — Tabela, Baskı, Açık Hava ve Neon",
    description:
      "Markanız için profesyonel tabela, baskı, açık hava reklamcılığı ve kişiye özel neon çözümleri.",
    keywords: "tabela, reklam, baskı, neon, açık hava",
    ogImage: "/logo.png",
    robots: "index,follow",
    twitterCard: "summary_large_image",
    sitemapEnabled: true,
  },
  theme: {
    primary: "#D9668A",
    secondary: "#5FAE7F",
    accent: "#F2B84B",
    background: "#FBF8F6",
    text: "#111111",
    header: "#FBF8F6",
    footer: "#FFFFFF",
    button: "#FF6EC7",
    radius: "24px",
    font: "Inter",
  } satisfies ThemeSettings,
  scripts: {
    googleAnalyticsId: "",
    googleTagManagerId: "",
    searchConsoleCode: "",
    yandexCode: "",
  },
};

export const defaultHero = {
  eyebrow: "Tabela · Baskı · Açık Hava · Neon — Tek Adres",
  title: "Tasarla.\nÜretelim.",
  highlightedTitle: "Parlatalım.",
  description:
    "Tabela sistemlerinden baskı ve matbaaya, açık hava reklamlarından kişiye özel neon tasarıma kadar markanızın ihtiyaç duyduğu her şeyi tek çatı altında üretiyoruz.",
  primaryButtonText: "✦ Hizmetlerimizi Keşfet",
  primaryButtonUrl: "/hizmetler",
  secondaryButtonText: "Kendi Neonunu Tasarla",
  secondaryButtonUrl: "/studio",
  backgroundImage: "",
  mobileImage: "",
  backgroundVideo: "",
  overlay: 45,
  alignment: "center",
  animation: true,
};

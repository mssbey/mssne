import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CartDrawer } from "@/components/cart/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ikarusreklam.com"),
  title: "Ikarus Reklam — Türkiye'nin 1 Numaralı Neon Stüdyosu",
  description:
    "Kişiye özel LED neon tabelalar. Online tasarla, WhatsApp ile sipariş ver. 81 ile hızlı kargo. 10.000+ üretim tamamlandı.",
  keywords: "neon tabela, led neon, neon ışık, kişiye özel tabela, neon sign, ikarus reklam",
  openGraph: {
    title: "Ikarus Reklam — Premium Neon Tabelalar",
    description: "Türkiye'nin en premium kişiye özel neon tasarım stüdyosu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FBF8F6] text-black antialiased">
        <CustomCursor />
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* WhatsApp floating button */}
        <a
          href={`https://wa.me/905468156089?text=${encodeURIComponent("Merhaba! Neon tabela hakkında bilgi almak istiyorum.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform cursor-none"
          style={{ background: "#25D366", boxShadow: "0 0 24px rgba(37,211,102,0.45)" }}
          title="WhatsApp ile ulaşın"
        >
          💬
        </a>
      </body>
    </html>
  );
}

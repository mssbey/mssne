"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, ShoppingBag, Heart, User, LogOut,
  Type, Lightbulb, Layers, Landmark, Building2, CreditCard, FileText,
  Magnet, Mail, Image as ImageIcon, Scan, Car, CupSoda, Notebook, Pen,
  KeyRound, Shirt, Sparkles, PenTool, Trophy, Watch, Cpu, Leaf, LayoutGrid, Gift,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

const NAV_ICONS: Record<string, LucideIcon> = {
  Type, Lightbulb, Layers, Landmark, Building2, CreditCard, FileText,
  Magnet, Mail, Image: ImageIcon, Scan, Car, CupSoda, Notebook, Pen,
  KeyRound, Shirt, Sparkles, PenTool, Trophy, Watch, Cpu, Leaf, LayoutGrid, Gift,
};

function NavIcon({ name, size = 15 }: { name: string; size?: number }) {
  const Icon = NAV_ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} className="shrink-0 text-[#D9668A]/70" />;
}
import { useCart } from "@/lib/store/useCart";
import { useFavorites } from "@/lib/store/useFavorites";
import { useAuth } from "@/lib/store/useAuth";
import { cn } from "@/lib/utils";
import { SearchButton } from "./SearchButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const { openCart, itemCount } = useCart();
  const { ids } = useFavorites();
  const { user, logout } = useAuth();

  // Ana sayfa hero'su koyu — header orada dark cam, diğer sayfalarda açık tema
  const dark = usePathname() === "/";

  useEffect(() => {
    setHydrated(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = hydrated ? itemCount() : 0;
  const favCount = hydrated ? ids.length : 0;

  const navText = dark
    ? "text-white/65 hover:text-white hover:bg-white/10"
    : "text-black/65 hover:text-black hover:bg-black/5";
  const iconBtn = dark
    ? "text-white/55 hover:text-white hover:bg-white/10"
    : "text-black/50 hover:text-black hover:bg-black/5";
  const panel = dark
    ? "border-white/10 bg-[#12121A]/97"
    : "border-black/8 bg-[#FFFFFF]/97";
  const panelLink = dark
    ? "text-white/55 hover:text-white hover:bg-white/5"
    : "text-black/55 hover:text-black hover:bg-black/5";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? dark
            ? "bg-[#0B0B12]/85 backdrop-blur-xl border-b border-white/10 py-2"
            : "bg-[#FBF8F6]/92 backdrop-blur-xl border-b border-black/5 py-2"
          : dark
            ? "bg-gradient-to-b from-black/50 to-transparent py-3.5"
            : "bg-gradient-to-b from-[#FBF8F6]/80 via-[#FBF8F6]/40 to-transparent py-3.5"
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 cursor-none lg:ml-24">
          <Image
            src="/logo.png"
            alt="İkarus Reklam"
            width={200}
            height={68}
            priority
            className={cn(
              "w-auto transition-all duration-500",
              scrolled ? "h-12 -my-1" : "h-[68px] -my-3"
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors cursor-none rounded-full",
                  navText
                )}
              >
                {item.label}
                {item.children && <ChevronDown size={12} className="opacity-50" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <div
                  className={cn(
                    "absolute top-full pt-2",
                    item.wide ? "left-1/2 -translate-x-1/2 w-[440px]" : "left-0 w-56"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-xl border backdrop-blur-xl py-2 shadow-2xl",
                      panel,
                      item.wide && "grid grid-cols-2 px-2"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors cursor-none rounded-lg",
                          panelLink
                        )}
                      >
                        <NavIcon name={child.icon} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-0.5">
          {/* Search */}
          <SearchButton dark={dark} hotkey />

          {/* Favorites */}
          <Link
            href="/favoriler"
            className={cn(
              "relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-none",
              iconBtn
            )}
          >
            <Heart size={15} />
            {favCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-[#FF6EC7] text-black">
                {favCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            className={cn(
              "relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-none",
              iconBtn
            )}
          >
            <ShoppingBag size={15} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-[#FF6EC7] text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* User */}
          <div className="relative">
            {user ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={cn(
                  "flex items-center gap-2 px-2.5 py-1 rounded-full border transition-all cursor-none",
                  dark ? "border-white/15 hover:border-white/30" : "border-black/10 hover:border-black/20"
                )}
                onBlur={() => setTimeout(() => setUserMenuOpen(false), 150)}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
                  style={{ background: "#FF6EC7" }}
                >
                  {user.name[0].toUpperCase()}
                </div>
                <span className={cn("text-[13px] max-w-[80px] truncate", dark ? "text-white/70" : "text-black/70")}>
                  {user.name}
                </span>
              </button>
            ) : (
              <Link
                href="/giris"
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-all cursor-none",
                  dark
                    ? "text-white/65 hover:text-white border-white/15 hover:border-white/30"
                    : "text-black/60 hover:text-black border-black/10 hover:border-black/20"
                )}
              >
                <User size={13} /> Giriş
              </Link>
            )}

            {userMenuOpen && user && (
              <div className={cn("absolute right-0 top-full mt-2 w-44 rounded-xl border backdrop-blur-xl py-2 shadow-2xl", panel)}>
                <Link href="/profil" className={cn("flex items-center gap-2 px-4 py-2.5 text-sm cursor-none", panelLink)}>
                  <User size={13} /> Profilim
                </Link>
                <Link href="/favoriler" className={cn("flex items-center gap-2 px-4 py-2.5 text-sm cursor-none", panelLink)}>
                  <Heart size={13} /> Favorilerim
                </Link>
                <div className={cn("my-1 border-t", dark ? "border-white/5" : "border-black/5")} />
                <button
                  onClick={() => { logout(); setUserMenuOpen(false); }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 text-sm text-red-400/70 hover:text-red-400 w-full cursor-none",
                    dark ? "hover:bg-white/5" : "hover:bg-black/5"
                  )}
                >
                  <LogOut size={13} /> Çıkış Yap
                </button>
              </div>
            )}
          </div>

          <Link
            href="/studio"
            className="ml-1.5 px-4 py-1.5 rounded-full text-[13px] font-semibold text-black whitespace-nowrap cursor-none transition-all hover:scale-105"
            style={{ background: "#FF6EC7", boxShadow: "0 0 20px rgba(255,110,199,0.4)" }}
          >
            ✦ Tasarla
          </Link>
        </div>

        {/* Mobile right */}
        <div className="flex lg:hidden items-center gap-2">
          <SearchButton dark={dark} mobile />
          <button onClick={openCart} className={cn("relative p-2 cursor-auto", dark ? "text-white/70" : "text-black/60")}>
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-[#FF6EC7] text-black">
                {cartCount}
              </span>
            )}
          </button>
          <button className={cn("p-2 cursor-auto", dark ? "text-white" : "text-black")} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b py-5 px-6",
            dark ? "bg-[#0B0B12]/97 border-white/10" : "bg-[#FFFFFF]/97 border-black/5"
          )}
        >
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-3 text-sm font-medium cursor-auto border-b",
                    dark
                      ? "text-white/75 hover:text-white border-white/5"
                      : "text-black/75 hover:text-black border-black/5"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={cn(
                          "flex items-center gap-2 py-1.5 text-sm cursor-auto",
                          dark ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        <NavIcon name={child.icon} size={13} /> {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 mt-4">
              <Link
                href="/favoriler"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex-1 py-3 rounded-full text-center text-sm border cursor-auto",
                  dark ? "border-white/15 text-white/60" : "border-black/10 text-black/60"
                )}
              >
                ♡ Favoriler {favCount > 0 && `(${favCount})`}
              </Link>
              <Link
                href="/giris"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex-1 py-3 rounded-full text-center text-sm border cursor-auto",
                  dark ? "border-white/15 text-white/60" : "border-black/10 text-black/60"
                )}
              >
                Giriş Yap
              </Link>
            </div>
            <Link
              href="/studio"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-3 rounded-full text-center font-semibold text-sm text-black cursor-auto"
              style={{ background: "#FF6EC7" }}
            >
              ✦ Kişiye Özel Tasarım
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, ShoppingBag, Heart, User, LogOut } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { useCart } from "@/lib/store/useCart";
import { useFavorites } from "@/lib/store/useFavorites";
import { useAuth } from "@/lib/store/useAuth";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const { openCart, itemCount } = useCart();
  const { ids } = useFavorites();
  const { user, logout } = useAuth();

  useEffect(() => {
    setHydrated(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = hydrated ? itemCount() : 0;
  const favCount = hydrated ? ids.length : 0;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050505]/92 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-10 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 cursor-none">
          <span
            className="text-2xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #FF00C8, #9B5CFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 10px rgba(255,0,200,0.4))",
            }}
          >
            IKARUS
          </span>
          <span className="text-2xl font-black tracking-tight text-white ml-1">REKLAM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-white/65 hover:text-white transition-colors cursor-none rounded-lg hover:bg-white/5"
              >
                {item.label}
                {item.children && <ChevronDown size={12} className="opacity-50" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 w-52">
                  <div className="rounded-xl border border-white/8 bg-[#0D0D0D]/97 backdrop-blur-xl py-2 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/55 hover:text-white hover:bg-white/5 transition-colors cursor-none"
                      >
                        <span className="text-sm">{child.icon}</span>
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
        <div className="hidden lg:flex items-center gap-1">
          {/* Favorites */}
          <Link
            href="/favoriler"
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all cursor-none"
          >
            <Heart size={16} />
            {favCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-[#FF00C8] text-black">
                {favCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all cursor-none"
          >
            <ShoppingBag size={16} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-[#FF00C8] text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* User */}
          <div className="relative">
            {user ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-none"
                onBlur={() => setTimeout(() => setUserMenuOpen(false), 150)}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black"
                  style={{ background: "#FF00C8" }}
                >
                  {user.name[0].toUpperCase()}
                </div>
                <span className="text-sm text-white/70 max-w-[80px] truncate">{user.name}</span>
              </button>
            ) : (
              <Link
                href="/giris"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-none"
              >
                <User size={14} /> Giriş
              </Link>
            )}

            {userMenuOpen && user && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-white/8 bg-[#0D0D0D]/97 backdrop-blur-xl py-2 shadow-2xl">
                <Link href="/profil" className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 cursor-none">
                  <User size={13} /> Profilim
                </Link>
                <Link href="/favoriler" className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 cursor-none">
                  <Heart size={13} /> Favorilerim
                </Link>
                <div className="my-1 border-t border-white/5" />
                <button
                  onClick={() => { logout(); setUserMenuOpen(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-400/70 hover:text-red-400 hover:bg-white/5 w-full cursor-none"
                >
                  <LogOut size={13} /> Çıkış Yap
                </button>
              </div>
            )}
          </div>

          <Link
            href="/studio"
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black cursor-none transition-all hover:scale-105"
            style={{ background: "#FF00C8", boxShadow: "0 0 20px rgba(255,0,200,0.4)" }}
          >
            ✦ Tasarla
          </Link>
        </div>

        {/* Mobile right */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={openCart} className="relative p-2 text-white/60 cursor-auto">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-[#FF00C8] text-black">
                {cartCount}
              </span>
            )}
          </button>
          <button className="p-2 text-white cursor-auto" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/97 backdrop-blur-xl border-b border-white/5 py-5 px-6">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-white/75 hover:text-white text-sm font-medium cursor-auto border-b border-white/5"
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
                        className="flex items-center gap-2 py-1.5 text-sm text-white/40 hover:text-white cursor-auto"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{child.icon}</span> {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 mt-4">
              <Link href="/favoriler" onClick={() => setMobileOpen(false)} className="flex-1 py-3 rounded-full text-center text-sm border border-white/10 text-white/60 cursor-auto">
                ♡ Favoriler {favCount > 0 && `(${favCount})`}
              </Link>
              <Link href="/giris" onClick={() => setMobileOpen(false)} className="flex-1 py-3 rounded-full text-center text-sm border border-white/10 text-white/60 cursor-auto">
                Giriş Yap
              </Link>
            </div>
            <Link
              href="/studio"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-3 rounded-full text-center font-semibold text-sm text-black cursor-auto"
              style={{ background: "#FF00C8" }}
            >
              ✦ Kendin Tasarla
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

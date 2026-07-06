"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Settings, LogOut, Package, ChevronRight } from "lucide-react";
import { useAuth } from "@/lib/store/useAuth";
import { useFavorites } from "@/lib/store/useFavorites";
import { useCart } from "@/lib/store/useCart";

const MENU_ITEMS = [
  { icon: Package, label: "Siparişlerim", href: "#", badge: null, desc: "WhatsApp üzerinden verilen siparişler" },
  { icon: Heart, label: "Favorilerim", href: "/favoriler", badge: null, desc: "Beğendiğiniz ürünler" },
  { icon: ShoppingBag, label: "Sepetim", href: "/sepet", badge: null, desc: "Sepetinizdeki ürünler" },
  { icon: Settings, label: "Hesap Ayarları", href: "#", badge: null, desc: "Profil ve bildirim ayarları" },
];

export default function ProfilPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { ids } = useFavorites();
  const { itemCount } = useCart();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (!user) router.push("/giris");
  }, [user, router]);

  if (!hydrated || !user) return null;

  const cartCount = itemCount();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#FBF8F6]">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Profile card */}
          <div
            className="relative p-8 rounded-3xl border border-black/8 bg-[#FFFFFF] mb-6 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: "rgba(217,102,138,0.05)", filter: "blur(60px)" }} />
            <div className="flex items-center gap-5">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-black shrink-0"
                style={{ background: "linear-gradient(135deg, #D9668A, #5FAE7F)" }}
              >
                {user.name[0].toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-black text-black">{user.name}</h1>
                <p className="text-black/40 text-sm mt-0.5">{user.email}</p>
                {user.phone && <p className="text-black/30 text-xs mt-0.5">{user.phone}</p>}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { label: "Favoriler", value: ids.length, color: "#D9668A" },
                { label: "Sepet", value: cartCount, color: "#5FAE7F" },
                { label: "Sipariş", value: 0, color: "#F2B84B" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl border border-black/5 bg-black/2">
                  <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-black/30 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-2 mb-6">
            {MENU_ITEMS.map(({ icon: Icon, label, href, desc }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 bg-[#FFFFFF] hover:border-black/15 transition-all cursor-none group"
              >
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black/8 transition-colors">
                  <Icon size={17} className="text-black/40 group-hover:text-black/70 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-black">{label}</p>
                  <p className="text-xs text-black/30">{desc}</p>
                </div>
                <ChevronRight size={14} className="text-black/20 group-hover:text-black/50 transition-colors" />
              </Link>
            ))}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-5 rounded-2xl border border-red-500/10 bg-red-500/5 hover:border-red-500/20 hover:bg-red-500/8 transition-all cursor-none text-red-400/70 hover:text-red-400"
          >
            <LogOut size={17} />
            <span className="text-sm font-semibold">Çıkış Yap</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

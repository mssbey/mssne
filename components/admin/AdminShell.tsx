"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Activity, BriefcaseBusiness, ChevronLeft, DatabaseBackup, FileText, FolderOpen, Gift,
  Gauge, ImageIcon, LayoutList, Menu, MessageSquareText, PanelLeftClose,
  PanelLeftOpen, Quote, Settings, ShieldCheck, Users, X,
} from "lucide-react";
import { logoutAction } from "@/app/admin/login/actions";

const links = [
  { href: "/admin", label: "Dashboard", icon: Gauge },
  { href: "/admin/homepage", label: "Ana Sayfa", icon: LayoutList },
  { href: "/admin/services", label: "Hizmetler", icon: BriefcaseBusiness },
  { href: "/admin/projects", label: "Projeler", icon: FolderOpen },
  { href: "/admin/promotions", label: "Promosyon Ürünleri", icon: Gift },
  { href: "/admin/pages", label: "Sayfalar", icon: FileText },
  { href: "/admin/references", label: "Referanslar", icon: ShieldCheck },
  { href: "/admin/testimonials", label: "Yorumlar", icon: Quote },
  { href: "/admin/media", label: "Medya", icon: ImageIcon },
  { href: "/admin/contacts", label: "Talepler", icon: MessageSquareText },
  { href: "/admin/menus", label: "Menüler", icon: Menu },
  { href: "/admin/settings", label: "Ayarlar", icon: Settings },
  { href: "/admin/tools", label: "Sistem araçları", icon: DatabaseBackup, superOnly: true },
  { href: "/admin/users", label: "Yöneticiler", icon: Users, superOnly: true },
  { href: "/admin/audit", label: "Audit log", icon: Activity, superOnly: true },
];

export function AdminShell({
  children,
  user,
}: {
  children: React.ReactNode;
  user: { name: string; email: string; role: string };
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const visibleLinks = links.filter((link) => !link.superOnly || user.role === "SUPER_ADMIN");
  return (
    <div className={`admin-shell ${collapsed ? "is-collapsed" : ""}`}>
      {mobileOpen && <button className="admin-overlay" onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat" />}
      <aside className={`admin-sidebar ${mobileOpen ? "is-open" : ""}`}>
        <div className="admin-sidebar-head">
          <Link href="/admin" className="admin-logo">
            <Image src="/logo.png" alt="İkarus Reklam" width={160} height={54} priority />
          </Link>
          <button className="admin-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat"><X size={19} /></button>
        </div>
        <nav className="admin-nav">
          {visibleLinks.map(({ href, label, icon: Icon }) => {
            const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={active ? "active" : ""} title={collapsed ? label : undefined} onClick={() => setMobileOpen(false)}>
                <Icon size={18} /><span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="admin-sidebar-foot">
          <a href="/" target="_blank" rel="noreferrer"><ChevronLeft size={15} /><span>Siteyi görüntüle</span></a>
          <small>Powered by <strong>mssbey</strong></small>
        </div>
      </aside>
      <section className="admin-stage">
        <header className="admin-topbar">
          <div>
            <button className="admin-mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Menüyü aç"><Menu size={20} /></button>
            <button className="admin-collapse" onClick={() => setCollapsed((value) => !value)} aria-label="Sidebar'ı daralt">
              {collapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
            </button>
          </div>
          <div className="admin-user">
            <div className="admin-avatar">{user.name.slice(0, 1).toUpperCase()}</div>
            <div><strong>{user.name}</strong><span>{user.role.replace("_", " ")}</span></div>
            <form action={logoutAction}><button>Çıkış</button></form>
          </div>
        </header>
        <main className="admin-main">{children}</main>
        <footer className="admin-footer">İkarus Yönetim Merkezi <span>·</span> mssbey</footer>
      </section>
    </div>
  );
}

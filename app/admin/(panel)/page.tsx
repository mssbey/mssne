import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, FileText, FolderOpen, MessageSquareText, Plus, ShieldCheck } from "lucide-react";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  const [services, projects, pages, references, messages, unread, published, drafts, recentContacts, recentAudit] = await Promise.all([
    db.service.count({ where: { deletedAt: null } }),
    db.project.count({ where: { deletedAt: null } }),
    db.page.count({ where: { deletedAt: null } }),
    db.reference.count({ where: { deletedAt: null } }),
    db.contactSubmission.count({ where: { deletedAt: null } }),
    db.contactSubmission.count({ where: { deletedAt: null, status: "NEW" } }),
    Promise.all([db.service.count({ where: { deletedAt: null, status: "PUBLISHED" } }), db.project.count({ where: { deletedAt: null, status: "PUBLISHED" } }), db.page.count({ where: { deletedAt: null, status: "PUBLISHED" } })]).then((values) => values.reduce((a, b) => a + b, 0)),
    Promise.all([db.service.count({ where: { deletedAt: null, status: "DRAFT" } }), db.project.count({ where: { deletedAt: null, status: "DRAFT" } }), db.page.count({ where: { deletedAt: null, status: "DRAFT" } })]).then((values) => values.reduce((a, b) => a + b, 0)),
    db.contactSubmission.findMany({ where: { deletedAt: null }, orderBy: { createdAt: "desc" }, take: 5 }),
    db.auditLog.findMany({ include: { user: true }, orderBy: { createdAt: "desc" }, take: 5 }),
  ]);
  const cards = [
    ["Hizmet", services, BriefcaseBusiness, "#EC4899"],
    ["Proje", projects, FolderOpen, "#8B5CF6"],
    ["Sayfa", pages, FileText, "#F59E0B"],
    ["Referans", references, ShieldCheck, "#16A34A"],
    ["Toplam talep", messages, MessageSquareText, "#0EA5E9"],
    ["Okunmamış", unread, MessageSquareText, "#DC2626"],
    ["Yayında", published, FileText, "#16A34A"],
    ["Taslak", drafts, FileText, "#71636C"],
  ] as const;
  const quick = [
    ["Yeni hizmet", "/admin/services", BriefcaseBusiness],
    ["Yeni proje", "/admin/projects", FolderOpen],
    ["Yeni sayfa", "/admin/pages", FileText],
    ["Ana sayfayı düzenle", "/admin/homepage", FileText],
  ] as const;
  return (
    <>
      <div className="admin-page-heading"><div><p>Genel görünüm</p><h1>İyi çalışmalar 👋</h1><span>İkarus Reklam’ın güncel içerik ve talep özeti.</span></div><a href="/" target="_blank" rel="noreferrer" className="admin-secondary-button">Siteyi görüntüle <ArrowUpRight size={16} /></a></div>
      <div className="admin-stat-grid">{cards.map(([label, value, Icon, color]) => <article className="admin-stat-card" key={label}><div style={{ background: `${color}15`, color }}><Icon size={20} /></div><span>{label}</span><strong>{value}</strong><small>Gerçek zamanlı</small></article>)}</div>
      <section className="admin-dashboard-grid">
        <article className="admin-card">
          <header><div><p>Hızlı işlemler</p><h2>Yeni bir şey oluşturun</h2></div></header>
          <div className="admin-quick-grid">{quick.map(([label, href, Icon]) => <Link href={href} key={href}><span><Icon size={18} /></span>{label}<Plus size={15} /></Link>)}</div>
        </article>
        <article className="admin-card">
          <header><div><p>Son talepler</p><h2>Müşteri mesajları</h2></div><Link href="/admin/contacts">Tümü</Link></header>
          <div className="admin-feed">{recentContacts.map((item) => <Link href="/admin/contacts" key={item.id}><span className="admin-feed-dot" /><div><strong>{item.name}</strong><p>{item.message}</p></div><small>{item.createdAt.toLocaleDateString("tr-TR")}</small></Link>)}{!recentContacts.length && <p className="admin-muted">Henüz iletişim talebi yok.</p>}</div>
        </article>
        <article className="admin-card admin-wide">
          <header><div><p>Sistem hareketleri</p><h2>Son değişiklikler</h2></div><Link href="/admin/audit">Audit log</Link></header>
          <div className="admin-feed">{recentAudit.map((item) => <div className="admin-feed-static" key={item.id}><span className="admin-feed-dot" /><div><strong>{item.action} · {item.module}</strong><p>{item.user?.name || "Sistem"}</p></div><small>{item.createdAt.toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" })}</small></div>)}{!recentAudit.length && <p className="admin-muted">Henüz sistem hareketi yok.</p>}</div>
        </article>
      </section>
    </>
  );
}

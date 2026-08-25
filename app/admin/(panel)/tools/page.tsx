import { DatabaseBackup, Download, RefreshCw, ShieldCheck } from "lucide-react";
import { requireRole } from "@/lib/auth/session";
import { refreshSite } from "./actions";

export default async function ToolsPage() {
  await requireRole(["SUPER_ADMIN"]);
  return (
    <>
      <div className="admin-page-heading"><div><p>Bakım ve aktarım</p><h1>Sistem araçları</h1><span>İçerikleri dışa aktarın, talepleri indirin ve site önbelleğini yenileyin.</span></div></div>
      <div className="admin-tools-grid">
        <article className="admin-card"><DatabaseBackup size={24} /><h2>Tam içerik yedeği</h2><p>Ayarlar, sayfalar, hizmetler, projeler, referanslar ve menüler JSON olarak dışa aktarılır.</p><a className="admin-primary-button" href="/api/admin/export"><Download size={16} /> JSON yedeğini indir</a></article>
        <article className="admin-card"><Download size={24} /><h2>İletişim talepleri</h2><p>Aktif müşteri taleplerini Excel uyumlu UTF-8 CSV dosyası olarak indirin.</p><a className="admin-secondary-button" href="/api/admin/export?format=contacts-csv"><Download size={16} /> CSV olarak indir</a></article>
        <article className="admin-card"><RefreshCw size={24} /><h2>Cache ve sitemap</h2><p>Vitrin önbelleğini temizleyip dinamik sitemap verisini güncel içeriklerle yeniden oluşturun.</p><form action={refreshSite}><button className="admin-secondary-button"><RefreshCw size={16} /> Şimdi yenile</button></form></article>
        <article className="admin-card"><ShieldCheck size={24} /><h2>Sistem bilgisi</h2><p>Next.js 16 · Prisma ORM 7 · SQLite taşınabilir geliştirme veritabanı · Rol tabanlı oturum güvenliği.</p><small>Developed by mssbey</small></article>
      </div>
    </>
  );
}

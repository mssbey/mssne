import { Save } from "lucide-react";
import { ImagePicker } from "@/components/admin/ImagePicker";
import { requireRole } from "@/lib/auth/session";
import { getPublicSettings } from "@/lib/cms/settings";
import { db } from "@/lib/db";
import { saveSettings } from "./actions";

export default async function SettingsPage() {
  await requireRole(["SUPER_ADMIN"]);
  const [settings, media] = await Promise.all([
    getPublicSettings(),
    db.media.findMany({ where: { deletedAt: null, mimeType: { startsWith: "image/" } }, orderBy: { createdAt: "desc" } }),
  ]);
  const social = settings.social;
  return (
    <>
      <div className="admin-page-heading"><div><p>Sistem yapılandırması</p><h1>Site ayarları</h1><span>Marka, iletişim, SEO ve vitrin temasını tek yerden yönetin.</span></div></div>
      <form action={saveSettings} className="admin-settings-form">
        <section className="admin-card"><header><div><p>Kimlik</p><h2>Marka ayarları</h2></div></header><div className="admin-form-grid">
          <label><span>Site adı</span><input name="siteName" defaultValue={settings.brand.siteName} required /></label>
          <label><span>Kısa ad</span><input name="shortName" defaultValue={settings.brand.shortName} required /></label>
          <ImagePicker name="logo" label="Site logosu" media={media.map((item) => ({ url: item.url, title: item.title || item.originalName }))} defaultValue={settings.brand.logo} />
          <label className="wide"><span>Footer açıklaması</span><textarea name="footerDescription" defaultValue={settings.brand.footerDescription} rows={3} /></label>
          <label className="wide"><span>Telif metni</span><input name="copyright" defaultValue={settings.brand.copyright} /></label>
        </div></section>
        <section className="admin-card"><header><div><p>İletişim</p><h2>Firma bilgileri</h2></div></header><div className="admin-form-grid">
          <label><span>Telefon</span><input name="phone" defaultValue={settings.contact.phone} /></label>
          <label><span>İkinci telefon</span><input name="phone2" defaultValue={settings.contact.phone2} /></label>
          <label><span>WhatsApp</span><input name="whatsapp" defaultValue={settings.contact.whatsapp} /></label>
          <label><span>E-posta</span><input type="email" name="email" defaultValue={settings.contact.email} /></label>
          <label className="wide"><span>Adres</span><input name="address" defaultValue={settings.contact.address} /></label>
          <label className="wide"><span>Çalışma saatleri</span><input name="workingHours" defaultValue={settings.contact.workingHours} /></label>
        </div></section>
        <section className="admin-card"><header><div><p>Bağlantılar</p><h2>Sosyal medya</h2></div></header><div className="admin-form-grid">
          {(["instagram", "facebook", "linkedin", "youtube"] as const).map((key) => <label key={key}><span>{key[0].toUpperCase() + key.slice(1)}</span><input type="url" name={key} defaultValue={String(social[key] || "")} placeholder="https://" /></label>)}
        </div></section>
        <section className="admin-card"><header><div><p>Arama görünürlüğü</p><h2>Varsayılan SEO</h2></div></header><div className="admin-form-grid">
          <label className="wide"><span>SEO başlığı</span><input name="seoTitle" defaultValue={String(settings.seo.title)} /></label>
          <label className="wide"><span>Meta açıklaması</span><textarea name="seoDescription" defaultValue={String(settings.seo.description)} rows={3} /></label>
          <label className="wide"><span>Anahtar kelimeler</span><input name="seoKeywords" defaultValue={String(settings.seo.keywords)} /></label>
        </div></section>
        <section className="admin-card"><header><div><p>Vitrin</p><h2>Renk ve tema</h2></div></header><div className="admin-color-grid">
          {(["primary", "secondary", "accent", "background", "text", "footer", "button"] as const).map((key) => <label key={key}><span>{key}</span><div><input type="color" name={key} defaultValue={settings.theme[key]} /><code>{settings.theme[key]}</code></div></label>)}
          <label><span>Köşe yuvarlaklığı</span><input name="radius" defaultValue={settings.theme.radius} /></label>
        </div></section>
        <div className="admin-sticky-save"><span>Değişiklikler yayınlandığında vitrinde hemen görünür.</span><button className="admin-primary-button"><Save size={17} /> Ayarları kaydet</button></div>
      </form>
    </>
  );
}

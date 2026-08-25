import { Eye, Save } from "lucide-react";
import { ImagePicker } from "@/components/admin/ImagePicker";
import { defaultHero } from "@/lib/cms/defaults";
import { db } from "@/lib/db";
import { saveHero } from "./actions";

export default async function HomepageAdminPage() {
  const [section, media] = await Promise.all([
    db.pageSection.findUnique({ where: { id: "home-hero" } }),
    db.media.findMany({ where: { deletedAt: null, mimeType: { startsWith: "image/" } }, orderBy: { createdAt: "desc" } }),
  ]);
  const hero = { ...defaultHero, ...((section?.content as Partial<typeof defaultHero>) || {}) };
  return (
    <>
      <div className="admin-page-heading"><div><p>Vitrin düzenleyici</p><h1>Ana sayfa</h1><span>Hero içeriğini, butonları ve görünürlüğü yönetin.</span></div><a href="/" target="_blank" rel="noreferrer" className="admin-secondary-button"><Eye size={16} /> Önizle</a></div>
      <form action={saveHero} className="admin-settings-form">
        <section className="admin-card">
          <header><div><p>İlk ekran</p><h2>Hero alanı</h2></div><label className="admin-switch"><input name="enabled" type="checkbox" defaultChecked={section?.enabled ?? true} /><span /> Bölüm aktif</label></header>
          <div className="admin-form-grid">
            <label className="wide"><span>Üst başlık</span><input name="eyebrow" defaultValue={hero.eyebrow} /></label>
            <label><span>Ana başlık</span><textarea name="title" rows={3} defaultValue={hero.title} /></label>
            <label><span>Vurgulu başlık</span><input name="highlightedTitle" defaultValue={hero.highlightedTitle} /></label>
            <label className="wide"><span>Açıklama</span><textarea name="description" rows={4} defaultValue={hero.description} /></label>
            <label><span>Birinci buton</span><input name="primaryButtonText" defaultValue={hero.primaryButtonText} /></label>
            <label><span>Birinci buton URL</span><input name="primaryButtonUrl" defaultValue={hero.primaryButtonUrl} /></label>
            <label><span>İkinci buton</span><input name="secondaryButtonText" defaultValue={hero.secondaryButtonText} /></label>
            <label><span>İkinci buton URL</span><input name="secondaryButtonUrl" defaultValue={hero.secondaryButtonUrl} /></label>
            <ImagePicker name="backgroundImage" label="Arka plan görseli" media={media.map((item) => ({ url: item.url, title: item.title || item.originalName }))} defaultValue={hero.backgroundImage} />
            <label className="admin-check"><input name="animation" type="checkbox" defaultChecked={hero.animation} /> Animasyonlar açık</label>
          </div>
        </section>
        <div className="admin-sticky-save"><span>Yayınlamadan önce sağ üstteki önizleme bağlantısını kullanabilirsiniz.</span><button className="admin-primary-button"><Save size={17} /> Değişiklikleri yayınla</button></div>
      </form>
    </>
  );
}

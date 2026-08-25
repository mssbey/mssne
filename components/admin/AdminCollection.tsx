"use client";

import Image from "next/image";
import { useActionState, useEffect, useMemo, useState, useTransition } from "react";
import { CalendarClock, LoaderCircle, MoreHorizontal, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { deleteItem, saveItem, type SaveState } from "@/app/admin/actions";
import type { AdminModule, AdminRow } from "@/lib/cms/admin-modules";
import { ImagePicker, type PickerMedia } from "./ImagePicker";

const locked = new Set<AdminModule>(["audit", "media"]);

export function AdminCollection({
  module,
  rows,
  canEdit,
  singular,
  media,
}: {
  module: AdminModule;
  rows: AdminRow[];
  canEdit: boolean;
  singular: string;
  media: PickerMedia[];
}) {
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<AdminRow | null | undefined>(undefined);
  const [pendingDelete, startDelete] = useTransition();
  const boundSave = saveItem.bind(null, module);
  const [state, action, pending] = useActionState<SaveState, FormData>(boundSave, {});
  useEffect(() => { if (state.ok) setEditing(undefined); }, [state.ok]);
  const filtered = useMemo(() => rows.filter((row) => `${row.title} ${row.subtitle} ${row.status}`.toLowerCase().includes(query.toLowerCase())), [query, rows]);
  const editable = canEdit && !locked.has(module);
  return (
    <>
      <div className="admin-toolbar">
        <label className="admin-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`${singular} ara...`} /></label>
        {editable && module !== "contacts" && <button className="admin-primary-button compact" onClick={() => setEditing(null)}><Plus size={17} /> Yeni {singular.toLocaleLowerCase("tr-TR")}</button>}
      </div>
      <div className="admin-table-card">
        <div className="admin-table">
          <div className="admin-table-row admin-table-head">
            <span>İçerik</span><span>Durum</span><span>Güncelleme</span><span />
          </div>
          {filtered.map((row) => (
            <div className="admin-table-row" key={row.id}>
              <div className={`admin-row-main ${row.image ? "has-image" : ""}`}>
                {row.image && <span className="admin-row-image"><Image src={row.image} alt="" fill sizes="52px" /></span>}
                <strong>{row.title}</strong><span>{row.subtitle}</span>{row.extra && <small>{row.extra}</small>}
              </div>
              <div><span className={`admin-status status-${row.status.toLowerCase()}`}>{row.status}</span></div>
              <div className="admin-date"><CalendarClock size={14} />{new Date(row.updatedAt).toLocaleDateString("tr-TR")}</div>
              <div className="admin-actions">
                {editable && <button onClick={() => setEditing(row)} title="Düzenle"><Pencil size={16} /></button>}
                {editable && module !== "contacts" && !row.protected && (
                  <button
                    className="danger"
                    disabled={pendingDelete}
                    onClick={() => {
                      if (!confirm(`“${row.title}” kaydını silmek istediğinize emin misiniz?`)) return;
                      startDelete(async () => { await deleteItem(module, row.id); });
                    }}
                    title="Sil"
                  ><Trash2 size={16} /></button>
                )}
                {!editable && <button title="Detay"><MoreHorizontal size={17} /></button>}
              </div>
            </div>
          ))}
          {!filtered.length && <div className="admin-empty"><Search size={24} /><strong>Kayıt bulunamadı</strong><span>Aramanızı değiştirin veya yeni bir içerik ekleyin.</span><small>mssbey</small></div>}
        </div>
      </div>
      {editing !== undefined && (
        <div className="admin-modal-layer" role="dialog" aria-modal="true">
          <button className="admin-modal-backdrop" onClick={() => setEditing(undefined)} aria-label="Pencereyi kapat" />
          <section className="admin-modal">
            <header><div><span>{editing ? "İçeriği düzenle" : "Yeni içerik"}</span><h2>{editing?.title || singular}</h2></div><button onClick={() => setEditing(undefined)}><X size={20} /></button></header>
            <form action={action} className="admin-form">
              {editing && <input type="hidden" name="id" value={editing.id} />}
              <label><span>Başlık / Ad</span><input name="title" defaultValue={editing?.title} placeholder={`${singular} adı`} required /></label>
              {!["references", "testimonials", "contacts", "users", "menus"].includes(module) && (
                <label><span>Slug</span><input name="slug" defaultValue={editing?.slug} placeholder="otomatik-olusturulur" readOnly={module === "pages" && Boolean(editing && editing.template !== "DEFAULT")} /></label>
              )}
              {!["contacts", "users", "menus"].includes(module) && (
                <ImagePicker name="imageUrl" label={module === "references" ? "Firma logosu" : module === "testimonials" ? "Profil görseli" : "Kapak görseli"} media={media} defaultValue={editing?.image || ""} />
              )}
              {module !== "contacts" && (
                <label><span>{module === "users" && !editing ? "İlk şifre" : module === "references" ? "Logo URL" : module === "pages" ? "Kısa açıklama" : "Açıklama / İçerik özeti"}</span><textarea name="summary" defaultValue={module === "users" && editing ? "" : editing?.subtitle === "Kısa açıklama yok" ? "" : editing?.subtitle} rows={module === "pages" ? 3 : 5} placeholder={module === "pages" ? "Sayfa başlığının altında gösterilecek kısa açıklama..." : "İçerik detayını girin..."} /></label>
              )}
              {module === "pages" && (
                <>
                  <label className="wide"><span>Sayfa içeriği</span><textarea name="content" defaultValue={editing?.content} rows={12} placeholder="Sayfanın ana içeriğini yazın. Paragrafları boş satırla ayırabilirsiniz..." /></label>
                  <label><span>SEO başlığı</span><input name="seoTitle" defaultValue={editing?.seoTitle} placeholder="Boş bırakılırsa sayfa başlığı kullanılır" /></label>
                  <label><span>SEO açıklaması</span><textarea name="seoDescription" defaultValue={editing?.seoDescription} rows={3} placeholder="Arama sonuçlarında gösterilecek açıklama..." /></label>
                </>
              )}
              <label>
                <span>{module === "menus" ? "Konum" : "Durum"}</span>
                <select name="status" defaultValue={(module === "menus" ? editing?.extra : editing?.status) || (module === "menus" ? "HEADER" : module === "users" ? "VIEWER" : "DRAFT")}>
                  {module === "menus" ? <><option>HEADER</option><option>FOOTER</option></> : module === "users" ? <><option>VIEWER</option><option>EDITOR</option><option>SUPER_ADMIN</option></> : module === "contacts" ? <><option>NEW</option><option>READ</option><option>CONTACTED</option><option>OFFER_SENT</option><option>COMPLETED</option><option>SPAM</option></> : <><option value="DRAFT">Taslak</option><option value="PUBLISHED">Yayında</option><option value="PASSIVE">Pasif</option><option value="ARCHIVED">Arşiv</option></>}
                </select>
              </label>
              {module !== "pages" && <label><span>{module === "users" ? "E-posta" : module === "menus" ? "URL" : module === "projects" ? "Müşteri" : module === "references" ? "Web sitesi" : module === "testimonials" ? "Firma" : "Ek bilgi"}</span><input name="extra" defaultValue={["users", "menus", "references"].includes(module) ? editing?.subtitle : editing?.extra} placeholder={module === "menus" ? "/sayfa" : "İsteğe bağlı"} /></label>}
              {["services", "projects"].includes(module) && <div className="admin-check-row"><label><input type="checkbox" name="featured" defaultChecked={editing?.extra?.includes("Öne")} /> Öne çıkar</label><label><input type="checkbox" name="showOnHome" defaultChecked={editing?.extra?.includes("Ana")} /> Ana sayfada göster</label></div>}
              {module === "pages" && <div className="admin-check-row"><label><input type="checkbox" name="showInMenu" defaultChecked={editing?.showInMenu} /> Üst menüde göster</label><label><input type="checkbox" name="showInFooter" defaultChecked={editing?.showInFooter} /> Alt menüde göster</label></div>}
              {state.error && <p className="admin-form-error">{state.error}</p>}
              <footer><button type="button" className="admin-secondary-button" onClick={() => setEditing(undefined)}>İptal</button><button className="admin-primary-button" disabled={pending}>{pending ? <><LoaderCircle className="spin" size={17} /> Kaydediliyor</> : "Kaydet"}</button></footer>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

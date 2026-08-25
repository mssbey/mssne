"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Check, ImageIcon, Plus, Search, Trash2, X } from "lucide-react";

export type PickerMedia = { url: string; title: string };

export function ImagePicker({
  name,
  label,
  media,
  defaultValue = "",
  multiple = false,
}: {
  name: string;
  label: string;
  media: PickerMedia[];
  defaultValue?: string;
  multiple?: boolean;
}) {
  const initial = defaultValue.split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
  const [selected, setSelected] = useState<string[]>(initial);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const value = query.toLocaleLowerCase("tr-TR");
    return media.filter((item) => `${item.title} ${item.url}`.toLocaleLowerCase("tr-TR").includes(value)).slice(0, 120);
  }, [media, query]);

  function choose(url: string) {
    if (!multiple) {
      setSelected([url]);
      setOpen(false);
      return;
    }
    setSelected((current) => current.includes(url) ? current.filter((item) => item !== url) : [...current, url]);
  }

  return (
    <div className="admin-image-field">
      <span>{label}</span>
      <input type="hidden" name={name} value={selected.join("\n")} />
      {selected.length ? (
        <div className={`admin-selected-images ${multiple ? "is-multiple" : ""}`}>
          {selected.map((url) => (
            <div key={url}>
              <Image src={url} alt="" fill sizes="160px" />
              <button type="button" onClick={() => setSelected((current) => current.filter((item) => item !== url))} aria-label="Görseli kaldır"><Trash2 size={13} /></button>
            </div>
          ))}
          {multiple && <button type="button" className="admin-add-image" onClick={() => setOpen(true)}><Plus size={18} /><span>Ekle</span></button>}
        </div>
      ) : (
        <button type="button" className="admin-image-placeholder" onClick={() => setOpen(true)}>
          <ImageIcon size={22} /><strong>Görsel seçin</strong><small>Mevcut {media.length} görselden seçebilir veya Medya bölümünden yenisini yükleyebilirsiniz.</small>
        </button>
      )}
      {selected.length > 0 && !multiple && <button type="button" className="admin-change-image" onClick={() => setOpen(true)}><ImageIcon size={14} /> Görseli değiştir</button>}
      {open && (
        <div className="admin-image-picker-layer">
          <button type="button" className="admin-modal-backdrop" onClick={() => setOpen(false)} aria-label="Görsel seçiciyi kapat" />
          <section className="admin-image-picker">
            <header>
              <div><span>Medya kütüphanesi</span><h3>{multiple ? "Görselleri seçin" : "Bir görsel seçin"}</h3></div>
              <button type="button" onClick={() => setOpen(false)}><X size={20} /></button>
            </header>
            <div className="admin-picker-toolbar">
              <label><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Dosya adı veya klasör ara..." autoFocus /></label>
              <a href="/admin/media" target="_blank">Yeni görsel yükle</a>
            </div>
            <div className="admin-picker-grid">
              {visible.map((item) => {
                const active = selected.includes(item.url);
                return (
                  <button type="button" key={item.url} className={active ? "active" : ""} onClick={() => choose(item.url)} title={item.url}>
                    <span><Image src={item.url} alt={item.title} fill sizes="130px" /></span>
                    <small>{item.title}</small>
                    {active && <i><Check size={13} /></i>}
                  </button>
                );
              })}
            </div>
            {!visible.length && <div className="admin-picker-empty">Aramanızla eşleşen görsel bulunamadı.</div>}
            <footer><span>{media.length} görsel · En fazla 120 sonuç gösteriliyor</span>{multiple && <button type="button" className="admin-primary-button compact" onClick={() => setOpen(false)}>{selected.length} görseli kullan</button>}</footer>
          </section>
        </div>
      )}
    </div>
  );
}

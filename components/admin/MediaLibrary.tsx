"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, FileIcon, ImageIcon, LoaderCircle, UploadCloud } from "lucide-react";
import type { AdminRow } from "@/lib/cms/admin-modules";

export function MediaLibrary({ rows, canEdit }: { rows: AdminRow[]; canEdit: boolean }) {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function upload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setMessage("");
    const response = await fetch("/api/admin/media", { method: "POST", body: new FormData(event.currentTarget) }).catch(() => null);
    const result = await response?.json().catch(() => null) as { ok: boolean; error?: string } | null;
    setBusy(false);
    if (!result) return setMessage(response?.status === 413 ? "Dosya çok büyük. Lütfen 4 MB altında bir dosya yükleyin." : "Yükleme başarısız.");
    if (!result.ok) return setMessage(result.error || "Yükleme başarısız.");
    form.current?.reset();
    setMessage("Dosya güvenli şekilde yüklendi.");
    router.refresh();
  }
  return (
    <>
      {canEdit && <form ref={form} onSubmit={upload} className="admin-upload-card"><div><UploadCloud size={24} /><span><strong>Yeni medya yükleyin</strong><small>JPG, PNG, WebP, AVIF, GIF, PDF, MP4 veya WebM · en fazla 10 MB</small></span></div><label><input name="file" type="file" required accept="image/jpeg,image/png,image/webp,image/avif,image/gif,application/pdf,video/mp4,video/webm" />Dosya seç</label><input name="alt" placeholder="Alt metin (görseller için önerilir)" /><button className="admin-primary-button compact" disabled={busy}>{busy ? <LoaderCircle className="spin" size={17} /> : <UploadCloud size={17} />} Yükle</button>{message && <p>{message}</p>}</form>}
      <div className="admin-media-grid">
        {rows.map((item) => <article key={item.id}>{item.status.startsWith("image/") ? <div className="admin-media-preview"><Image src={item.subtitle} alt={item.title} fill sizes="(max-width: 700px) 50vw, 220px" /></div> : <div className="admin-media-file"><FileIcon size={30} /></div>}<div><strong>{item.title}</strong><span>{item.extra} · {item.status}</span><button onClick={() => navigator.clipboard.writeText(item.subtitle)}><Copy size={14} /> URL’yi kopyala</button></div></article>)}
        {!rows.length && <div className="admin-empty admin-media-empty"><ImageIcon size={28} /><strong>Medya kütüphanesi boş</strong><span>İlk görselinizi yükleyerek başlayın.</span><small>mssbey</small></div>}
      </div>
    </>
  );
}

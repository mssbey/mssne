"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

export function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setResult(null);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        phone: form.get("phone") || undefined,
        email: form.get("email"),
        company: form.get("company") || undefined,
        subject: form.get("subject") || undefined,
        message: form.get("message"),
        kvkkConsent: form.get("kvkk") === "on",
        website: form.get("website"),
        sourcePage: window.location.pathname,
      }),
    });
    const body = await response.json() as { ok: boolean; error?: string };
    setBusy(false);
    if (!body.ok) return setResult({ ok: false, text: body.error || "Mesaj gönderilemedi." });
    event.currentTarget.reset();
    setResult({ ok: true, text: "Talebiniz alındı. Ekibimiz en kısa sürede size dönecek." });
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-grid"><label><span>Ad soyad *</span><input name="name" required minLength={2} placeholder="Adınız ve soyadınız" /></label><label><span>E-posta *</span><input name="email" required type="email" placeholder="ornek@firma.com" /></label><label><span>Telefon</span><input name="phone" type="tel" placeholder="05xx xxx xx xx" /></label><label><span>Firma</span><input name="company" placeholder="Firma adı" /></label></div>
      <label><span>Konu</span><input name="subject" placeholder="Nasıl yardımcı olabiliriz?" /></label>
      <label><span>Mesajınız *</span><textarea name="message" required minLength={10} rows={6} placeholder="Projenizi, ölçüleri veya ihtiyacınızı kısaca anlatın..." /></label>
      <input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="contact-consent"><input name="kvkk" type="checkbox" required /> Kişisel verilerimin iletişim talebimin yanıtlanması amacıyla işlenmesini kabul ediyorum.</label>
      {result && <p className={result.ok ? "contact-success" : "contact-error"}>{result.ok && <CheckCircle2 size={17} />}{result.text}</p>}
      <button disabled={busy}>{busy ? <><LoaderCircle className="spin" size={18} /> Gönderiliyor</> : <><Send size={17} /> Talebi gönder</>}</button>
    </form>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/lib/store/useAuth";

export default function KayitPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { setError("Kullanım koşullarını kabul etmelisiniz."); return; }
    if (!form.name || !form.email || !form.password) { setError("Tüm alanları doldurun."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    login({ name: form.name, email: form.email, phone: form.phone });
    router.push("/profil");
  };

  const field = (key: keyof typeof form, label: string, type = "text", placeholder = "") => (
    <div>
      <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-2 block">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-white/8 text-white placeholder:text-white/20 text-sm outline-none focus:border-[#FF00C8]/50 transition-colors cursor-auto"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,0,200,0.06) 0%, transparent 70%)" }} />

      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block cursor-none">
            <span className="text-3xl font-black" style={{ background: "linear-gradient(135deg, #FF00C8, #9B5CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>IKARUS</span>
            <span className="text-3xl font-black text-white ml-1">REKLAM</span>
          </Link>
          <p className="text-white/35 text-sm mt-2">Ücretsiz hesap oluşturun</p>
        </div>

        <div className="p-8 rounded-3xl border border-white/8 bg-[#0D0D0D]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
            )}
            {field("name", "Ad Soyad", "text", "Adınız Soyadınız")}
            {field("email", "E-posta", "email", "ornek@email.com")}
            {field("phone", "Telefon (isteğe bağlı)", "tel", "0500 000 00 00")}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white/30 mb-2 block">Şifre</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="En az 8 karakter"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-white/8 text-white placeholder:text-white/20 text-sm outline-none focus:border-[#FF00C8]/50 transition-colors cursor-auto pr-11"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white cursor-none">
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-auto mt-2">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 accent-[#FF00C8] cursor-auto" />
              <span className="text-xs text-white/35 leading-relaxed">
                <Link href="#" className="text-[#FF00C8] hover:underline cursor-none">Kullanım Koşulları</Link>&apos;nı ve{" "}
                <Link href="#" className="text-[#FF00C8] hover:underline cursor-none">Gizlilik Politikası</Link>&apos;nı okudum, kabul ediyorum.
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-black text-sm transition-all hover:scale-[1.02] disabled:opacity-60 cursor-none mt-2"
              style={{ background: "#FF00C8", boxShadow: "0 0 24px rgba(255,0,200,0.35)" }}
            >
              {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><UserPlus size={15} /> Hesap Oluştur</>}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-sm text-white/35">
              Zaten hesabınız var mı?{" "}
              <Link href="/giris" className="text-[#FF00C8] hover:text-white font-medium transition-colors cursor-none">Giriş Yap</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

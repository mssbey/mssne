import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Yönetim Girişi | İkarus Reklam", robots: "noindex,nofollow" };

export default async function AdminLoginPage() {
  if (await getSessionUser()) redirect("/admin");
  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <div className="admin-login-brand">
          <Image src="/logo.png" alt="İkarus Reklam" width={180} height={62} priority />
          <span>Yönetim Merkezi</span>
        </div>
        <div>
          <p className="admin-kicker">Tekrar hoş geldiniz</p>
          <h1>İçeriklerinizi yönetin.</h1>
          <p className="admin-login-copy">Güvenli yönetim alanına erişmek için hesabınızla giriş yapın.</p>
        </div>
        <LoginForm />
        <p className="admin-signature">crafted by mssbey</p>
      </section>
    </main>
  );
}

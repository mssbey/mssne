"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { loginAction, type LoginState } from "./actions";

export function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, {});
  return (
    <form action={action} className="admin-login-form">
      <label>
        <span>E-posta</span>
        <div className="admin-input-wrap">
          <Mail size={17} />
          <input name="email" type="email" autoComplete="email" placeholder="admin@ikarusreklam.com" required />
        </div>
      </label>
      <label>
        <span>Şifre</span>
        <div className="admin-input-wrap">
          <LockKeyhole size={17} />
          <input
            name="password"
            type={visible ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••••••"
            required
          />
          <button type="button" onClick={() => setVisible((value) => !value)} aria-label="Şifreyi göster veya gizle">
            {visible ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </label>
      <div className="admin-login-options">
        <label className="admin-check"><input name="remember" type="checkbox" /> Beni hatırla</label>
        <a href="mailto:info@ikarusreklam.com?subject=Admin şifre sıfırlama">Şifremi unuttum</a>
      </div>
      {state.error && <p className="admin-form-error" role="alert">{state.error}</p>}
      <button className="admin-primary-button" disabled={pending}>
        {pending ? <><LoaderCircle className="spin" size={18} /> Giriş yapılıyor</> : "Panele giriş yap"}
      </button>
    </form>
  );
}

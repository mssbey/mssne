"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultSettings, type ContactSettings } from "@/lib/cms/defaults";

const SiteContactContext = createContext<ContactSettings>(defaultSettings.contact);

// Panelde (Site Ayarları) kaydedilen iletişim bilgilerini istemci bileşenlerine taşır.
export function SiteContactProvider({ value, children }: { value: ContactSettings; children: ReactNode }) {
  return <SiteContactContext.Provider value={value}>{children}</SiteContactContext.Provider>;
}

export function useSiteContact() {
  return useContext(SiteContactContext);
}

export function whatsappLink(whatsapp: string, message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

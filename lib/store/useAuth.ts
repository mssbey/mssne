"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  name: string;
  email: string;
  phone?: string;
}

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

export const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      isLoggedIn: () => get().user !== null,
    }),
    { name: "ikarus-auth", skipHydration: true }
  )
);

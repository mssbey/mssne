"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  unitPrice: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, color: string, size: string, price: number) => void;
  removeItem: (productId: number, color: string, size: string) => void;
  updateQuantity: (productId: number, color: string, size: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  itemCount: () => number;
  buildWhatsAppMessage: () => string;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, color, size, price) => {
        set((state) => {
          const key = `${product.id}-${color}-${size}`;
          const existing = state.items.find(
            (i) => `${i.product.id}-${i.selectedColor}-${i.selectedSize}` === key
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                `${i.product.id}-${i.selectedColor}-${i.selectedSize}` === key
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { product, quantity: 1, selectedColor: color, selectedSize: size, unitPrice: price }],
          };
        });
        set({ isOpen: true });
      },

      removeItem: (productId, color, size) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.selectedColor === color && i.selectedSize === size)
          ),
        }));
      },

      updateQuantity: (productId, color, size, qty) => {
        if (qty < 1) {
          get().removeItem(productId, color, size);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId && i.selectedColor === color && i.selectedSize === size
              ? { ...i, quantity: qty }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () =>
        get().items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),

      itemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),

      buildWhatsAppMessage: () => {
        const { items } = get();
        if (items.length === 0) return "";
        const lines = items.map(
          (i) => `• ${i.product.name} (${i.selectedColor}, ${i.selectedSize}) x${i.quantity}`
        );
        return encodeURIComponent(
          `Merhaba! Şu ürünler için teklif almak istiyorum:\n\n${lines.join("\n")}\n\nFiyat bilgisi alabilir miyim?`
        );
      },
    }),
    { name: "ikarus-cart", skipHydration: true }
  )
);

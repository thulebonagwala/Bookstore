import React, { createContext, useContext, useEffect, useState } from "react";
import type { Book } from "../types";

export type CartItem = { book: Book; quantity: number };

type CartContextType = {
  items: CartItem[];
  add: (book: Book, qty?: number) => void;
  remove: (bookId: string) => void;
  setQty: (bookId: string, qty: number) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const add = (book: Book, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.book._id === book._id);
      if (found) return prev.map((p) => (p.book._id === book._id ? { ...p, quantity: p.quantity + qty } : p));
      return [...prev, { book, quantity: qty }];
    });
  };

  const remove = (bookId: string) => {
    setItems((prev) => prev.filter((i) => i.book._id !== bookId));
  };

  const setQty = (bookId: string, qty: number) => {
    setItems((prev) => prev.map((i) => (i.book._id === bookId ? { ...i, quantity: Math.max(1, qty) } : i)));
  };

  const clear = () => setItems([]);

  const total = items.reduce((s, it) => s + it.book.price * it.quantity, 0);

  return <CartContext.Provider value={{ items, add, remove, setQty, clear, total }}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

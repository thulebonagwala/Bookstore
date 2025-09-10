import { books as BOOKS } from "../mock/books";
import type { Book } from "../types";

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export const api = {
  listBooks: async (q?: string): Promise<Book[]> => {
    await delay(250);
    if (!q) return BOOKS;
    const s = q.toLowerCase();
    return BOOKS.filter((b) => b.title.toLowerCase().includes(s) || b.author.toLowerCase().includes(s));
  },
  getBook: async (id: string): Promise<Book | null> => {
    await delay(200);
    return BOOKS.find((b) => b._id === id) ?? null;
  },
  
  // simple auth mock: register/save user in localStorage
  auth: {
    register: async (name: string, email: string, password: string) => {
      await delay(300);
      const id = String(Date.now());
      const user = { id, name, email };
      localStorage.setItem("fake_user", JSON.stringify(user));
      // store password hashed? (mock)
      localStorage.setItem("fake_user_password", password);
      return user;
    },
    login: async (email: string, password: string) => {
      await delay(300);
      const u = localStorage.getItem("fake_user");
      const p = localStorage.getItem("fake_user_password");
      if (!u) throw new Error("User not found");
      const user = JSON.parse(u);
      if (user.email !== email || p !== password) throw new Error("Invalid credentials");
      return user;
    },
    logout: async () => {
      await delay(100);
      // in mock we don't clear registration
      return true;
    }
  }
};
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

type CartItem = { bookId: string; title: string; price: number; quantity: number };
const slice = createSlice({
  name: 'cart',
  initialState: { items: [] as CartItem[] },
  reducers: {
    addItem: (s, a: PayloadAction<CartItem>) => {
      const i = s.items.find(x => x.bookId === a.payload.bookId);
      if (i) i.quantity += a.payload.quantity; else s.items.push(a.payload);
    },
    removeItem: (s, a: PayloadAction<string>) => { s.items = s.items.filter(i => i.bookId !== a.payload); },
    setQty: (s, a: PayloadAction<{ bookId: string; quantity: number }>) => {
      const i = s.items.find(x => x.bookId === a.payload.bookId); if (i) i.quantity = a.payload.quantity;
    },
    clear: (s) => { s.items = []; }
  }
});
export const { addItem, removeItem, setQty, clear } = slice.actions;
export default slice.reducer;
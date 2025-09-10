import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type User = { id: string; name: string; email: string } | null;
const token = localStorage.getItem('token');
const user = token ? JSON.parse(localStorage.getItem('user') || 'null') : null;

const slice = createSlice({
  name: 'auth',
  initialState: { token, user } as { token: string | null; user: User },
  reducers: {
    setAuth: (s, a: PayloadAction<{ token: string; user: NonNullable<User> }>) => {
      s.token = a.payload.token; s.user = a.payload.user;
      localStorage.setItem('token', s.token!);
      localStorage.setItem('user', JSON.stringify(s.user));
    },
    logout: (s) => { s.token = null; s.user = null; localStorage.clear(); }
  }
});
export const { setAuth, logout } = slice.actions;
export default slice.reducer;
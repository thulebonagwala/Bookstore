import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import cart from '../features/cart/cartSlice';

export const store = configureStore({ reducer: { auth, cart } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
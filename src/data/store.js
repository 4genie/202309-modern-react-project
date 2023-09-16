import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/data/slice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

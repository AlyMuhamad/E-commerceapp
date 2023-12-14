'use client';

import reducerCart from './cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cart: reducerCart,
  },
});

export default store;

'use client';

import { createSlice } from '@reduxjs/toolkit';

//the products cart
const initialState = {
  cartProducts: [],
  amount: 1,
  showMenu: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    show(state) {
      state.showCart = true;
    },

    hide(state) {
      state.showCart = false;
    },

    add(state, action) {
      state.cartProducts = [action.payload, ...state.cartProducts];
      state.amount = state.amount;
    },

    remove(state, action) {
      state.cartProducts = state.cartProducts.filter(
        product => product.id !== action.payload.id
      );
      state.amount = state.amount;
    },
  },
});

export const { show, hide, add, remove } = cartSlice.actions;

export default cartSlice.reducer;

//the components updating this cart
// incresing the number of products and passing the id

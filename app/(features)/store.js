'use client';

import { combineReducers, createStore } from 'redux';
import reducerCart from './cartSlice';

const rootReducers = combineReducers({
  cart: reducerCart,
});

const store = createStore(rootReducers);

export default store;

'use client';
//the products cart
const initialState = {
  // id: null,
  cartProducts: [],
  productsInCart: 0,
  showCart: false,
  productInCart: false,
  productAmount: 0,
};

export default function reducerCart(state = initialState, action) {
  switch (action.type) {
    case 'cart/show':
      return {
        ...state,
        showCart: true,
      };
    case 'cart/hide':
      return {
        ...state,
        showCart: false,
      };
    case 'cart/add':
      return {
        ...state,
        // id: action.payload,
        cartProducts: [action.payload, ...state.cartProducts],
        productsInCart: state.productsInCart + 1,
        productAmount: state.productAmount,
        productInCart: true,
      };

    case 'cart/remove':
      return {
        ...state,
        // id: action.payload.id,
        cartProducts: state.cartProducts.filter(
          product => product.id !== action.payload.id
        ),
        productsInCart: state.productsInCart - 1,
        productAmount: state.productAmount,
        productInCart: false,
      };

    default:
      return state;
  }
}

// action creators

export function show() {
  return {
    type: 'cart/show',
  };
}

export function hide() {
  return {
    type: 'cart/hide',
  };
}

export function add(product) {
  return {
    type: 'cart/add',
    payload: product,
  };
}
export function remove(product) {
  return {
    type: 'cart/remove',
    payload: product,
  };
}

//the components updating this cart
// incresing the number of products and passing the id

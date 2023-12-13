'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.css';
import { add, hide, remove } from '../(features)/cartSlice';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function SideMenu() {
  // const [productsData, setProductsData] = useState([]);

  const dispatch = useDispatch();

  const showCart = useSelector(store => {
    return store.cart.showCart;
  });
  const productId = useSelector(store => {
    return store.cart.id;
  });
  const productAmount = useSelector(store => {
    return store.cart.productAmount;
  });
  const productInCart = useSelector(store => {
    return store.cart.productInCart;
  });
  const cartProducts = useSelector(store => {
    return store.cart.cartProducts;
  });

  function handleCart() {
    dispatch(hide());
  }

  function handleDeleteProduct(productData) {
    // setProductsData(productData =>
    //   productData.filter(product => product.id !== id)
    // );
    dispatch(remove(productData));
  }

  if (!showCart) return;
  if (showCart)
    return (
      <div className={styles.sideCart}>
        <button className={styles.closeBtn} onClick={() => handleCart()}>
          &lt;
        </button>
        {cartProducts.map(
          productData =>
            productInCart && (
              <div key={productData.id}>
                <Image
                  src={productData.image}
                  alt="a product"
                  width={75}
                  height={75}
                  priority
                />
                <p>{productData.title}</p>
                <p>{productData.price} $</p>
                <p>{productAmount}</p>
                {/* <button
                  onClick={() => {
                    // dispatch(remove(productData));
                    handleDeleteProduct(productData);
                  }}
                >
                  {productData.id}
                </button> */}
              </div>
            )
        )}
      </div>
    );
}

export default SideMenu;

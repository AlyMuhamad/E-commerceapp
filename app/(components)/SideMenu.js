'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.css';
import { add, hide, remove } from '../(features)/cartSlice';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

  const totalPrice = cartProducts.reduce(
    (totalPrice, productData) => totalPrice + productData.price,
    0
  );

  function handleDeleteProduct(productData) {
    // setProductsData(productData =>
    //   productData.filter(product => product.id !== id)
    // );
    dispatch(remove(productData));
    console.log(productData);
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
              <div key={productData.id} className={styles.productDetails}>
                <Image
                  src={productData.image}
                  alt="a product"
                  width={75}
                  height={75}
                  priority
                />
                <p className={styles.productTitle}>{productData.title}</p>
                <p>{productData.price} $</p>
                <button
                  className={styles.removeBtn}
                  onClick={() => {
                    // dispatch(remove(productData));
                    handleDeleteProduct(productData);
                  }}
                >
                  remove from cart
                </button>
              </div>
            )
        )}
        {totalPrice > 0 ? (
          <div className={styles.finalButtons}>
            <div className={styles.totalPrice}>Total Price: {totalPrice} $</div>
            <Link className={styles.paymentButton} href="/">
              Proceed to pay
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    );
}

export default SideMenu;
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

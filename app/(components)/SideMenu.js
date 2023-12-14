'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.css';
import { add, hide, remove } from '../(features)/cartSlice';
import Image from 'next/image';
import Link from 'next/link';

function SideMenu() {
  const dispatch = useDispatch();

  const showCart = useSelector(store => {
    return store.cart.showCart;
  });

  const productAmount = useSelector(store => {
    return store.cart.productAmount;
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
    dispatch(remove(productData));
  }
  console.log(cartProducts);

  if (!showCart) return;
  if (showCart)
    return (
      <div className={styles.sideCart}>
        <button className={styles.closeBtn} onClick={() => handleCart()}>
          &lt;
        </button>
        {cartProducts.map(productData => (
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
                handleDeleteProduct(productData);
              }}
            >
              remove from cart
            </button>
          </div>
        ))}
        {totalPrice > 0 ? (
          <div className={styles.finalButtons}>
            <div className={styles.totalPrice}>Total Price: {totalPrice} $</div>
            <Link
              className={styles.paymentButton}
              href="/"
              onClick={() => handleCart()}
            >
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

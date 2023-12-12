'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.css';
import { add, hide, remove } from '../(features)/cartSlice';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function SideMenu() {
  const [productsData, setProductsData] = useState([]);

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
  // const productsData = useSelector(store => {
  //   return store.cart.productsData;
  // });

  function handleCart() {
    dispatch(hide());
  }

  function handleDeleteProduct(id) {
    setProductsData(productData =>
      productData.filter(product => product.id !== id)
    );
  }

  useEffect(() => {
    async function products() {
      try {
        if (productId > 0) {
          const res = await fetch(
            `https://fakestoreapi.com/products/${productId}`
          );
          if (!res.ok)
            throw new Error('something went wrong with fetching data');
          const data = await res.json();
          setProductsData(productsData => [data, ...productsData]);
          // dispatch(add(data.id, data));
        }
      } catch (err) {
        console.error(err.message);
      }
    }
    products();
  }, [productId, dispatch]);

  if (!showCart) return;
  if (showCart)
    return (
      <div className={styles.sideCart}>
        <button className={styles.closeBtn} onClick={() => handleCart()}>
          &lt;
        </button>
        {productsData.map(
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
                <button
                  onClick={() => {
                    dispatch(remove(productData.id));
                    handleDeleteProduct(productData.id);
                  }}
                >
                  ❌
                </button>
              </div>
            )
        )}
      </div>
    );
}

export default SideMenu;

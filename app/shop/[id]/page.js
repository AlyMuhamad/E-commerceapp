'use client';
import { add, remove } from '@/app/(features)/cartSlice';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [addedProduct, setAddedProduct] = useState(false);

  const dispatch = useDispatch();

  const productInCart = useSelector(store => {
    return store.cart.productInCart;
  });

  function handleProduct(id) {
    setAddedProduct(!addedProduct);
    addedProduct ? dispatch(remove(id)) : dispatch(add(id));
  }

  useEffect(() => {
    async function products() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProductData(data);
    }
    products();
  }, [id]);

  return (
    <div className={styles.productPage}>
      <div className={styles.product}>
        <div>
          <Image
            src={productData.image}
            alt="a product"
            width={150}
            height={150}
            priority
          />
        </div>
        <div>
          <p className={styles.productTitle}>{productData.title}</p>
          <p>{productData.price} $</p>
        </div>
        <Link href="/">Buy Now</Link>
        <button onClick={() => handleProduct(productData.id)}>
          {addedProduct && productInCart
            ? 'remove from my cart'
            : 'Add to my cart'}
        </button>
        <p className={styles.productDescription}>{productData.description}</p>
        {/* <p>{productData.rating.rate}</p> */}
      </div>
    </div>
  );
}

export default Product;

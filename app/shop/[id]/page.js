'use client';
import { add, hide, remove } from '@/app/(features)/cartSlice';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [addedProduct, setAddedProduct] = useState(false);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  function handleDescreaseAmount() {
    if (amount <= 1) return;
    setAmount(() => amount - 1);
  }
  function handleIncreaseAmount() {
    setAmount(() => amount + 1);
  }

  function handleProduct(productData) {
    setAddedProduct(!addedProduct);
    addedProduct ? dispatch(remove(productData)) : dispatch(add(productData));
  }

  function handleCart() {
    dispatch(hide());
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
    <div className={styles.productPage} onClick={() => handleCart()}>
      <div className={styles.product}>
        <div>
          <Image
            src={productData.image}
            alt="a product"
            priority
            width={175}
            height={175}
          />
        </div>
        <div>
          <p className={styles.price}>{productData.price} $</p>
          <p className={styles.productTitle}>{productData.title}</p>
        </div>
        <div className={styles.purchaseDetails}>
          <div className={styles.amount}>
            <button
              className={styles.amountBtn}
              onClick={handleDescreaseAmount}
            >
              -
            </button>
            <div className={styles.amountNum}>{amount}</div>
            <button
              className={styles.amountBtn}
              onClick={() => handleIncreaseAmount()}
            >
              +
            </button>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.addBtn}
              onClick={() => handleProduct(productData)}
            >
              {addedProduct ? 'remove from my cart' : 'Add to my cart'}
            </button>
            <Link href="/" className={styles.buyBtn}>
              Buy Now
            </Link>
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.categoryDetails}>
            <p>Category</p>
            <p>{productData.category}</p>
          </div>
          <div className={styles.descriptionDetails}>
            <p>Description</p>
            <p className={styles.productDescription}>
              {productData.description}
            </p>
          </div>
          <div className={styles.rateDetails}>
            <p>Rate</p>
            <div>
              {/* <div>({productData.rating.rate})</div> */}
              <Rating
                name="read-only"
                // value={productData.rating.rate}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

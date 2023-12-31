'use client';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsCart3, BsHeart } from 'react-icons/bs';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { hide } from '../(features)/cartSlice';
import { useDispatch } from 'react-redux';

const style = {
  fontSize: '2.4rem',
};

function Shop() {
  const [productsData, setProductsData] = useState([]);
  const [showProductOptions, setShowProductOptions] = useState(false);
  const [productOfInterest, setProductOfInterest] = useState(null);

  const [pageDisplayed, setPageDisplayed] = useState(1);

  const dispatch = useDispatch();

  // const { id } = useSearchParams();
  // const { pathname } = useRouter();
  // console.log(pathname);

  function handleProductOptions(id) {
    setShowProductOptions(!showProductOptions);
    setProductOfInterest(id);
  }
  function handleChangePage(event, value) {
    setPageDisplayed(value);
  }

  function handleCart() {
    dispatch(hide());
  }

  useEffect(() => {
    async function products() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProductsData(data);
    }
    products();
  }, []);

  // className={`${styles.description} ${styles.yellow}`}

  return (
    <div className={styles.shoppingPage} onClick={() => handleCart()}>
      <ul className={styles.shoppingCategories}>
        <li>
          <Link href="/shop" className={styles.category}>
            All
          </Link>
        </li>
        <li>
          <Link href="/shop/men" className={styles.category}>
            Men
          </Link>
        </li>
        <li>
          <Link href="/shop/jewelery" className={styles.category}>
            Jewels
          </Link>
        </li>
        <li>
          <Link href="/shop/electronics" className={styles.category}>
            Electronics
          </Link>
        </li>
      </ul>

      <div className={styles.shoppingCard}>
        {productsData
          .filter(
            product =>
              product.id > pageDisplayed - 1 && product.id < pageDisplayed + 6
          )
          //   {
          //   if (pageDisplayed === 1)
          //     product.id > pageDisplayed - 1 && product.id < pageDisplayed + 4;
          //   if (pageDisplayed === 2)
          //     product.id > pageDisplayed + 2 && product.id < pageDisplayed + 45;
          // }

          .map(product => (
            <li key={product.id} className={styles.product}>
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt="a product"
                  height={100}
                  width={100}
                  priority
                  onClick={e => handleProductOptions(product.id)}
                />
              </div>
              {/* {showProductOptions && productOfInterest === product.id && (
                <div className={styles.shoppingIcons}>
                  <MdOutlineSearch style={style} />
                  <BsShuffle style={style} />
                </div>
              )} */}
              <div>
                <p className={styles.price}>{product.price} $</p>
                <Link className={styles.title} href={`shop/${product.id}`}>
                  {product.title}
                </Link>
              </div>
              <div className={styles.subDetails}>
                <BsHeart style={style} />
                <BsCart3 style={style} />
                <div>Reviews</div>
              </div>
            </li>
          ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={pageDisplayed}
          color="primary"
          onChange={handleChangePage}
        />
      </Stack>
    </div>
  );
}

export default Shop;

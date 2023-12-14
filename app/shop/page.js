'use client';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsCart3, BsShuffle } from 'react-icons/bs';
import { MdOutlineSearch } from 'react-icons/md';
import Image from 'next/image';
import styles from './page.module.css';
import image2 from '(assets)/jc-gellidon-fnc3YCtCCOI-unsplash.jpg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const style = {
  backgroundColor: '#9e9e',
  padding: '10px',
  fontSize: '40px',
  borderRadius: '50%',
};

function Shop() {
  const [productsData, setProductsData] = useState([]);
  const [showProductOptions, setShowProductOptions] = useState(false);
  const [productOfInterest, setProductOfInterest] = useState(null);

  const [pageDisplayed, setPageDisplayed] = useState(1);

  // let showProductOptions = false;

  function handleProductOptions(id) {
    setShowProductOptions(!showProductOptions);
    setProductOfInterest(id);
  }
  function handleChangePage(event, value) {
    setPageDisplayed(value);
  }

  useEffect(() => {
    async function products() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProductsData(data);
    }
    products();
  }, []);

  return (
    <div className={styles.shoppingPage}>
      <ul className={styles.shoppingCategories}>
        <li>
          <Link href="/contact" className={styles.category}>
            All
          </Link>
        </li>
        <li>
          <Link href="/blog" className={styles.category}>
            All
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.category}>
            All
          </Link>
        </li>
      </ul>
      <Image src={image2} alt="a girl" width={500} height={591} priority />

      <div className={styles.shoppingCard}>
        {productsData
          .filter(
            product =>
              product.id > pageDisplayed - 1 && product.id < pageDisplayed + 4
          )
          //   {
          //   if (pageDisplayed === 1)
          //     product.id > pageDisplayed - 1 && product.id < pageDisplayed + 4;
          //   if (pageDisplayed === 2)
          //     product.id > pageDisplayed + 2 && product.id < pageDisplayed + 45;
          // }

          .map(product => (
            <li key={product.id} className={styles.product}>
              <Image
                src={product.image}
                alt="a product"
                width={150}
                height={150}
                priority
                onClick={e => handleProductOptions(product.id)}
              />
              {showProductOptions && productOfInterest === product.id && (
                <div className={styles.shoppingIcons}>
                  <MdOutlineSearch style={style} />
                  <BsCart3 style={style} />
                  <BsShuffle style={style} />
                </div>
              )}

              <Link className={styles.title} href={`shop/${product.id}`}>
                {product.title}
              </Link>
              <p className={styles.price}>{product.price} $</p>
            </li>
          ))}
        <Stack spacing={2}>
          <Pagination
            count={10}
            page={pageDisplayed}
            color="primary"
            onChange={handleChangePage}
          />

          {/* Signature:
function(event: React.ChangeEvent, page: number) => void
event The event source of the callback.
page The page selected. */}
        </Stack>
      </div>
    </div>
  );
}

export default Shop;

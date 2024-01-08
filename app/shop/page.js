'use client';
import * as React from 'react';
import { BsCart3, BsHeart, BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { add, hide, remove } from '../(features)/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  fontSize: '2.6rem',
  cursor: 'pointer',
};
const searchStyle = {
  fontSize: '2.4rem',
  cursor: 'pointer',
  margin: '0 1.9rem 0 0',
};

function Shop() {
  const [productsData, setProductsData] = useState([]);
  const [productOfInterest, setProductOfInterest] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [addedProduct, setAddedProduct] = useState(false);
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const cartProducts = useSelector(store => {
    return store.cart.cartProducts;
  });

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

  function handleSearch() {
    setSearchResult(
      productsData.filter(product =>
        product.title.toLowerCase().includes(productOfInterest)
      )
    );
  }

  function handleCategory(category) {
    setCategoryProducts(
      productsData.filter(product => product.category === category)
    );
  }

  function handleProduct(productData) {
    setAddedProduct(!addedProduct);
    addedProduct ? dispatch(remove(productData)) : dispatch(add(productData));
  }

  return (
    <div className={styles.shoppingPage} onClick={() => handleCart()}>
      <div className={styles.topBar}>
        <ul className={styles.shoppingCategories}>
          <li onClick={() => handleCategory(' ')}>All</li>
          <li onClick={() => handleCategory("men's clothing")}>Men</li>
          <li onClick={() => handleCategory("women's clothing")}>Women</li>
          <li onClick={() => handleCategory('jewelery')}>Jewels</li>
          <li onClick={() => handleCategory('electronics')}>Electronics</li>
        </ul>
        <div className={styles.searchbar}>
          <input
            type="search"
            className={styles.searchfield}
            placeholder="Search for products"
            onChange={e => setProductOfInterest(e.target.value)}
          />
          <BsSearch style={searchStyle} onClick={handleSearch} />
        </div>
      </div>

      <div className={styles.shoppingCard}>
        {(searchResult.length > 0
          ? searchResult
          : categoryProducts.length > 0
          ? categoryProducts
          : productsData
        ).map(product => (
          <li key={product.id} className={styles.product}>
            <Image
              src={product.image}
              alt="a product"
              className={styles.productImage}
              height={175}
              width={175}
              priority
            />
            <div>
              <p className={styles.price}>{product.price} $</p>
              <Link className={styles.title} href={`shop/${product.id}`}>
                {product.title}
              </Link>
            </div>
            <div className={styles.subDetails}>
              <div className={styles.productIcons}>
                <BsCart3
                  key={product.id}
                  style={style}
                  onClick={() => handleProduct(product)}
                />
                <div className={styles.like}>
                  <div
                    className={`${styles.hearth} ${liked && styles.liked}`}
                    onClick={() => setLiked(!liked)}
                  />
                </div>
              </div>
              <Link href="/">Reviews</Link>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Shop;

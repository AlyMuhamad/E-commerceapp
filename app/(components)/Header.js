'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { BsCart3, BsMenuButtonWideFill } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../(features)/cartSlice';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/shop',
    label: 'Shop',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contact',
    label: 'Contact us',
  },
];

const style = {
  // backgroundColor: '#9e9e',
  margin: '15px',
  fontSize: '24px',
  cursor: 'pointer',
  // borderRadius: '50%',
};

function Header() {
  // const [productsInCart, setProductsInCart] = useState(null);
  // const [showCart, setShowCart] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  const productsInCart = useSelector(store => {
    return store.cart.productsInCart;
  });

  function handleCart() {
    dispatch(show());
  }

  return (
    <div className={styles.header}>
      <p>Our logo</p>
      <div className={styles.links}>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </div>

      <div className={styles.icons}>
        <div className={styles.cart}>
          {/* {productsInCart > 0 ? (
            <div className={styles.productsInCart}>{productsInCart}</div>
          ) : (
            ''
          )} */}
          <div className={styles.productsInCart}>{productsInCart}</div>
          <BsCart3 style={style} onClick={() => handleCart()} />
        </div>
        <BsMenuButtonWideFill style={style} />
      </div>
    </div>
  );
}

export default Header;

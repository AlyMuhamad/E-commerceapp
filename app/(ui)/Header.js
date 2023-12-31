'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { BsCart3, BsMenuButtonWideFill, BsHeart } from 'react-icons/bs';
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
    label: 'Contact',
  },
];

const style = {
  margin: '1.5rem',
  fontSize: '2.4rem',
  cursor: 'pointer',
};

const favorites = {
  ...style,
  stroke: '1rem',
};

function Header() {
  // const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  const cartProducts = useSelector(store => {
    return store.cart.cartProducts;
  });

  function handleCart() {
    dispatch(show());
  }

  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <p className={styles.logo}>Logo</p>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </div>

      <div className={styles.icons}>
        <BsHeart style={favorites} />
        <div className={styles.cart} onClick={() => handleCart()}>
          {/* {cartProducts.length > 0 ? (
            <div className={styles.productsInCart}>{cartProducts.length}</div>
          ) : (
            ''
          )} */}
          <div className={styles.productsInCart}>{cartProducts.length}</div>
          <BsCart3 style={style} />
        </div>
        <BsMenuButtonWideFill style={style} />
      </div>
    </div>
  );
}

export default Header;

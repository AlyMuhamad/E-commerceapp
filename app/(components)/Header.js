'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { BsCart3, BsMenuButtonWideFill } from 'react-icons/bs';
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
  // backgroundColor: '#9e9e',
  margin: '15px',
  fontSize: '24px',
  cursor: 'pointer',
  // borderRadius: '50%',
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

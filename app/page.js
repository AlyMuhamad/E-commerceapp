import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import image from '(assets)/girls.jpg';
import SecondLanding from './(components)/SecondLanding';
import ThirdLanding from './(components)/ThirdLanding';
import FourthLanding from './(components)/FourthLanding';
import FifthLanding from './(components)/FifthLanding';

const links = [
  {
    href: '/',
    label: 'Men',
  },
  {
    href: '/',
    label: 'Women',
  },
  {
    href: '/',
    label: 'Kids',
  },
];

export default function Home() {
  return (
    <main>
      <div className={styles.landing}>
        <div className={styles.landingBody}>
          <div className={styles.landingText}>
            <p>April Store</p>
            <p className={styles.headline}>Simplify</p>
            <p className={styles.headline}>Everything.</p>
            <p>
              Discover Chic, Define You - Elevate Your Fashion Game with
              Handpicked Styles for Every Occasion.
            </p>
            <Link href="/" className={styles.btn}>
              Explore Now
            </Link>
            <footer className={styles.footer}>
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.category}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </footer>
          </div>
          <Image
            src={image}
            alt="a girl"
            width={590.5}
            height={590.5}
            className={styles.girl}
            priority
          />
        </div>
      </div>
      <SecondLanding />
      <ThirdLanding />
      <FourthLanding />
      <FifthLanding />
    </main>
  );
}

import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import image from '(assets)/max-harlynking-nfWp1mCmBpM-unsplash-PhotoRoom.png-PhotoRoom.png';

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
    <main className={styles.landing}>
      <div className={styles.landingBody}>
        <div className={styles.landingText}>
          <p>April Store</p>
          <p className={styles.headline}>Simplify</p>
          <p className={styles.headline}>Everything.</p>
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
          width={500}
          height={750}
          className={styles.girl}
          priority
        />
      </div>
    </main>
  );
}

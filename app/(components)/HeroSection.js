import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import image from '../(assets)/girls.jpg';

function HeroSection({ scrollToTestimonials }) {
  const scroll = () => {
    scrollToTestimonials.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.landing}>
      <div className={styles.landingContent}>
        <p className={styles.headline}>
          Simplify <br /> Everything
        </p>
        <p className={styles.subheadline}>
          we believe that shopping should be more than just <br />a transaction;
          it should be an experience. Step into a world where style meets
          convenience, and quality meets affordability.
        </p>
        <div className={styles.btns}>
          <Link href="/shop" className={`${styles.btn} ${styles.exploreBtn}`}>
            Explore Now
          </Link>
          <button className={`${styles.btn} ${styles.whyBtn}`} onClick={scroll}>
            Why us?
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
          src={image}
          alt="a girl"
          className={styles.landingGirls}
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;

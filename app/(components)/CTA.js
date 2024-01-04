import styles from './CTA.module.css';

function CTA() {
  return (
    <div className={styles.CTASection}>
      <p className={styles.headline}>Discover Your Style with Us!</p>
      <p className={styles.subheadline}>
        Explore our latest collections and find great deals on high-quality
        products.
      </p>
      <button className={styles.shoppingBtn}>Start shopping now</button>
    </div>
  );
}

export default CTA;

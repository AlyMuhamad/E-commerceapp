'use client';

import styles from './Carousel.module.css';
import image1 from '../(assets)/girl1.jpg';
import image2 from '../(assets)/girl2.jpg';
import image3 from '../(assets)/girl3.jpg';
import image4 from '../(assets)/girl4.jpg';
import image5 from '../(assets)/girl5.jpg';
import Image from 'next/image';
import { useState } from 'react';

const carouselData = [
  {
    id: 1,
    image: image1,
    caption:
      'Welcome to a world where fashion meets individuality! Unleash your style with our latest fashion collection, meticulously curated to embrace diversity and redefine elegance. From timeless classics to cutting-edge trends, we invite you on a journey where every piece tells a story. Explore the intersection of comfort and chic, as we celebrate the unique style that sets you apart.',
  },
  {
    id: 2,
    image: image2,
    caption:
      "Immerse yourself in the allure of impeccable design, where every stitch is a testament to craftsmanship and sophistication. This showstopper is not just a garment; it's an expression of individuality and confidence. Crafted with precision, this piece seamlessly blends fashion with comfort, allowing you to make a statement without compromising on ease.",
  },
  {
    id: 3,
    image: image3,
    caption:
      "Stay ahead of the curve and dive into the world of the latest fashion trends. Our seasonal collection is a celebration of diversity, vibrancy, and individuality. From striking patterns that command attention to vibrant colors that reflect your personality, our curated selection ensures you're always on point. Rediscover your style with our handpicked pieces that capture the essence of contemporary fashion.",
  },
  {
    id: 4,
    image: image4,
    caption:
      "Our fashion journey is more than just clothing; it's a shared experience with our incredible community. Here's what our customers have to say about their love for our pieces. Real style, real satisfaction. We're proud to showcase the love and confidence our community exudes when wearing our creations. It's not just about fashion; it's about the stories we create together.",
  },
  {
    id: 5,
    image: image5,
    caption:
      "Indulge in the luxury of limited-time chic with our exclusive offer just for you. Elevate your style and embrace affordability with 20% off your next purchase. Use code 'STYLE15' at checkout to unlock a world of fashion that's both elegant and economical. This is your opportunity to redefine your wardrobe, each piece designed to inspire confidence and captivate attention.",
  },
];

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [slide, setSlide] = useState(1);

  function handlePrevious() {
    if (carouselIndex <= 0) return;
    setCarouselIndex(() => carouselIndex - 1);
    setSlide(() => slide - 1);
  }
  function handleNext() {
    if (carouselIndex >= 4) return;
    setCarouselIndex(() => carouselIndex + 1);
    setSlide(() => slide + 1);
  }

  return (
    <div className={styles.carouselSection}>
      <button className={styles.previous} onClick={() => handlePrevious()}>
        &lt;
      </button>
      <div className={styles.carousel}>
        <Image
          src={carouselData[carouselIndex].image}
          alt="a girl"
          height={300}
          className={styles.girl}
          priority
        />

        <div className={styles.carouselInnerBox}>
          <p>{carouselData[carouselIndex].caption}</p>
        </div>
      </div>
      <button className={styles.next} onClick={() => handleNext()}>
        &gt;
      </button>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${slide === 1 && styles.back}`}>
          &nbsp;
        </div>
        <div className={`${styles.dot} ${slide === 2 && styles.back}`}>
          &nbsp;
        </div>
        <div className={`${styles.dot} ${slide === 3 && styles.back}`}>
          &nbsp;
        </div>
        <div className={`${styles.dot} ${slide === 4 && styles.back}`}>
          &nbsp;
        </div>
        <div className={`${styles.dot} ${slide === 5 && styles.back}`}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Carousel;

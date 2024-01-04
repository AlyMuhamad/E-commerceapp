'use client';

import styles from './Carousel.module.css';
import image1 from '(assets)/girl1.jpg';
import image2 from '(assets)/girl2.webp';
import image3 from '(assets)/girl3.jpg';
import Image from 'next/image';
import { useState } from 'react';

const carouselData = [
  {
    image: image1,
    caption:
      'Step into Autumn with our latest Fall Favorites. 🍂 Explore cozy sweaters, stylish jackets, and more to elevate your seasonal wardrobe.',
  },
  {
    image: image2,
    caption:
      "Discover our Style Tips for Cooler Days! From layering techniques to accessorizing, we've got your autumn fashion covered. 🧣🍁",
  },
  {
    image: image3,
    caption:
      "Embrace elegance with our Limited Edition Autumn Collection. 🍂 This exclusive accessory is perfect for making a statement this season. Shop now before it's gone!",
  },
  {
    image: image1,
    caption:
      'Our community knows how to rock fall fashion! 🍁 Shoutout to [Customer Name] for slaying in our latest arrivals. Share your style with us using #FallFashionista!',
  },
  {
    image: image1,
    caption:
      "Flash Sale Alert! Don't miss out on exclusive fall deals. Limited time only – shop now and upgrade your wardrobe for less! 🍂✨",
  },
];

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  function handlePrevious() {
    if (carouselIndex <= 0) return;
    setCarouselIndex(() => carouselIndex - 1);
  }
  function handleNext() {
    if (carouselIndex > 4) return;
    setCarouselIndex(() => carouselIndex + 1);
  }

  return (
    <div className={styles.carouselSection}>
      {/* {carouselIndex > 0 && ()} */}
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
          <p>Our Store</p>
        </div>
      </div>
      {/* {carouselIndex < 4 && ()} */}
      <button className={styles.next} onClick={() => handleNext()}>
        &gt;
      </button>
      <div className={styles.dots}>
        <button className={styles.dot}>&nbsp;</button>
        <button className={styles.dot}>&nbsp;</button>
        <button className={styles.dot}>&nbsp;</button>
        <button className={styles.dot}>&nbsp;</button>
      </div>
    </div>
  );
}

export default Carousel;

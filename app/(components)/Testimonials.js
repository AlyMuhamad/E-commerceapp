'use client';

import Image from 'next/image';
import styles from './Testimonials.module.css';
import image1 from '(assets)/woman1.jpg';
import image2 from '(assets)/man1.jpg';
import image3 from '(assets)/woman2.jpg';
import image4 from '(assets)/man2.jpg';
import image5 from '(assets)/woman3.jpg';
import image6 from '(assets)/man3.jpg';
import image7 from '(assets)/man4.jpg';
import image8 from '(assets)/woman4.jpg';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const testimonialsData = [
  {
    profilePic: image1,
    accountName: 'Olivia Davis',
    country: 'Spain',
    text: "I'm amazed by the quality of the fabrics used in their clothing. Every piece feels luxurious and is well worth the investment.",
  },
  {
    profilePic: image2,
    accountName: 'Marcus Rodriguez',
    country: 'France',
    text: "Finding trendy and unique styles is so easy with this app. I always get compliments on my outfits, and it's become my go-to for staying fashion-forward.",
  },
  {
    profilePic: image3,
    accountName: 'Isabella Chang',
    country: 'Germany',
    text: 'Finally, a brand that understands the importance of comfort without compromising on style. The fit of their clothes is just perfect!',
  },
  {
    profilePic: image4,
    accountName: 'Xavier Carter',
    country: 'Finland',
    text: "From browsing to checkout, the entire shopping experience is seamless. The app's interface is user-friendly, and the delivery is always on time.",
  },
  {
    profilePic: image5,
    accountName: 'Sophia Walker',
    country: 'Denmark',
    text: 'Affordable yet stylish – a rare combination. I love how I can stay on trend without breaking the bank.',
  },
  {
    profilePic: image6,
    accountName: 'Aidan Foster',
    country: 'Mexico',
    text: 'The customer service team is exceptional. They promptly resolved an issue I had, and their commitment to customer satisfaction is truly commendable.',
  },
  {
    profilePic: image7,
    accountName: 'Jordan Taylor',
    country: 'Brazil',
    text: 'The customer service team is exceptional. They promptly resolved an issue I had, and their commitment to customer satisfaction is truly commendable.',
  },
  {
    profilePic: image8,
    accountName: 'Mia Anderson',
    country: 'Netherlands',
    text: "The personalized recommendations make me feel like the app understands my style. It's like having a personal shopper in my pocket!",
  },
];

const Testimonials = forwardRef((props, ref) => {
  const myRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  }));
  return (
    <div ref={myRef} className={styles.testimonialsSection}>
      <p className={styles.headline}>From our clients</p>
      <div className={styles.testimonials}>
        {testimonialsData.map(testimonial => (
          <div key={testimonial.accountName} className={styles.testimonialCard}>
            <blockquote>{testimonial.text}</blockquote>
            <div className={styles.picWithName}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Image
                  src={testimonial.profilePic}
                  alt="profile picture"
                  height={45}
                  className={styles.accountPic}
                  priority
                />
              </div>
              <div>
                <p className={styles.accountName}>{testimonial.accountName}</p>
                <div style={{ color: 'var(--color-brand-500)' }}>
                  {' '}
                  customer from {testimonial.country}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;

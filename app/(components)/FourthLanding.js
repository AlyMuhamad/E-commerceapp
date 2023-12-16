import Image from 'next/image';
import styles from './FourthLanding.module.css';
import image1 from '(assets)/woman1.jpg';
import image2 from '(assets)/man1.jpg';
import image3 from '(assets)/woman2.jpg';
import image4 from '(assets)/man2.jpg';
import image5 from '(assets)/woman3.jpg';
import image6 from '(assets)/man3.jpg';
import image7 from '(assets)/man4.jpg';
import image8 from '(assets)/woman4.jpg';

const testimonialsData = [
  {
    accountName: 'Olivia Davis',
    profilePic: image1,
    testimonialText:
      "I'm amazed by the quality of the fabrics used in their clothing. Every piece feels luxurious and is well worth the investment.",
  },
  {
    accountName: 'Marcus Rodriguez',
    profilePic: image2,
    testimonialText:
      "Finding trendy and unique styles is so easy with this app. I always get compliments on my outfits, and it's become my go-to for staying fashion-forward.",
  },
  {
    accountName: 'Isabella Chang',
    profilePic: image3,
    testimonialText:
      'Finally, a brand that understands the importance of comfort without compromising on style. The fit of their clothes is just perfect!',
  },
  {
    accountName: 'Xavier Carter',
    profilePic: image4,
    testimonialText:
      "From browsing to checkout, the entire shopping experience is seamless. The app's interface is user-friendly, and the delivery is always on time.",
  },
  {
    accountName: 'Sophia Walker',
    profilePic: image5,
    testimonialText:
      'Affordable yet stylish – a rare combination. I love how I can stay on trend without breaking the bank.',
  },
  {
    accountName: 'Aidan Foster',
    profilePic: image6,
    testimonialText:
      'The customer service team is exceptional. They promptly resolved an issue I had, and their commitment to customer satisfaction is truly commendable.',
  },
  {
    accountName: 'Jordan Taylor',
    profilePic: image7,
    testimonialText:
      'The customer service team is exceptional. They promptly resolved an issue I had, and their commitment to customer satisfaction is truly commendable.',
  },
  {
    accountName: 'Mia Anderson',
    profilePic: image8,
    testimonialText:
      "The personalized recommendations make me feel like the app understands my style. It's like having a personal shopper in my pocket!",
  },
];

function FourthLanding() {
  return (
    <div className={styles.testimonialsPage}>
      <p className={styles.testimonialsHeadline}>From our clients</p>
      <div className={styles.testimonials}>
        {testimonialsData.map(testimonial => (
          <div key={testimonial.accountName} className={styles.testimonialCard}>
            <p>{testimonial.testimonialText}</p>
            <div className={styles.picWithName}>
              <Image
                src={testimonial.profilePic}
                alt="profile picture"
                width={45}
                height={45}
                className={styles.accountPic}
                priority
              />
              <p className={styles.accountName}>{testimonial.accountName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourthLanding;

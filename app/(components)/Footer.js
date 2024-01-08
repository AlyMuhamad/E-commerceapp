import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaDribbble,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoLocation } from 'react-icons/io5';
import styles from './Footer.module.css';
import styled from 'styled-components';

const SocialIcon = styled(FaInstagram)`
  margin: auto;
  font-size: 3.2rem;
  cursor: pointer;

  @media (max-width: 43.75em) {
    font-size: 2.8rem;
  }
`;

const icons = [
  {
    id: 0,
    icon: <SocialIcon />,
  },
  {
    id: 1,
    icon: <SocialIcon as={FaFacebook} />,
  },
  {
    id: 2,
    icon: <SocialIcon as={FaDribbble} />,
  },
  {
    id: 3,
    icon: <SocialIcon as={FaYoutube} />,
  },
  {
    id: 4,
    icon: <SocialIcon as={FaLinkedinIn} />,
  },
];

const info = [
  {
    icon: <IoLocation />,
    text: 'Egypt,Beheira',
  },
  {
    icon: <FaPhoneAlt />,
    text: '+201128632928',
  },
  {
    icon: <IoMail />,
    text: 'alimoh0801@gmail.com',
  },
];

const links = [
  {
    head: 'Company',
    sublinks: ['About us', 'FAQ', 'Reviews', 'Locations', 'Forums'],
  },
  {
    head: 'More',
    sublinks: ['News', 'Careers', 'Support', 'Blog'],
  },
];

function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerLinks}>
        <p className={styles.headline}>Our Logo</p>
        {links.map(link => (
          <ul key={link.head} className={styles.linksRow}>
            <li className={styles.headline}>{link.head}</li>
            {link.sublinks.map(sublink => (
              <li key={sublink}>{sublink}</li>
            ))}
          </ul>
        ))}
        <ul className={styles.linksRow}>
          <p className={styles.headline}>Info</p>
          {info.map(info => (
            <div key={info.text} className={styles.contactInfo}>
              {info.icon}
              <p>{info.text}</p>
            </div>
          ))}
        </ul>
        <ul>
          <li className={styles.headline}>Follow Us</li>
          <div className={styles.linkSection}>
            <ul className={styles.socialLinks}>
              {icons.map(icon => (
                <li className={styles.iconItem} key={icon.id}>
                  <div className={styles.iconLink}>{icon.icon}</div>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

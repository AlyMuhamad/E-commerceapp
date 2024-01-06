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

const style = {
  margin: 'auto',
  fontSize: '32px',
  cursor: 'pointer',
};

const icons = [
  {
    id: 0,
    icon: <FaInstagram style={style} />,
  },
  {
    id: 1,
    icon: <FaFacebook style={style} />,
  },
  {
    id: 2,
    icon: <FaDribbble style={style} />,
  },
  {
    id: 3,
    icon: <FaYoutube style={style} />,
  },
  {
    id: 4,
    icon: <FaLinkedinIn style={style} />,
  },
];

function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerLinks}>
        <p className={styles.headline}>Our Logo</p>
        <ul>
          <li className={styles.headline}>Company</li>
          <li>About us</li>
          <li></li>
        </ul>
        <ul>
          <li className={styles.headline}>More</li>
          <li>News</li>
          <li>Careers</li>
        </ul>
        <div>
          <p className={styles.headline}>Contact Info</p>
          <div className={styles.contactInfo}>
            <IoLocation />
            <p>Egypt, Beheira</p>
          </div>
          <div className={styles.contactInfo}>
            <FaPhoneAlt />
            <p>+201128632928</p>
          </div>
          <div className={styles.contactInfo}>
            <IoMail />
            <p>alimoh0801@gmail.com</p>
          </div>
        </div>
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

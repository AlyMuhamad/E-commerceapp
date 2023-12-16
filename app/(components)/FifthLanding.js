import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IoLocation } from 'react-icons/io5';

import styles from './FifthLanding.module.css';

const style = {
  //   margin: '15px',
  fontSize: '32px',
  cursor: 'pointer',
};

function Footer() {
  return (
    <div className={styles.footerPage}>
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
          <li className={styles.socialLinks}>
            <li>
              <FaFacebook style={style} />
            </li>
            <li>
              <FaTwitter style={style} />
            </li>
            <li>
              <FaInstagram style={style} />
            </li>
            <li>
              <FaYoutube style={style} />
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

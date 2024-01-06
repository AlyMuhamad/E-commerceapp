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
              <li key={sublink.indexOf}>{sublink}</li>
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

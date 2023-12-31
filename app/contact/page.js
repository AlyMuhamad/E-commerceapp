'use client';

import {
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaBehanceSquare,
  FaCheckCircle,
} from 'react-icons/fa';
import styles from './page.module.css';
import { useState } from 'react';

const style = {
  margin: '15px',
  fontSize: '32px',
  cursor: 'pointer',
};
// 74 / 86 / 98
const checkStyles = {
  margin: '15px',
  fontSize: '86px',
  // cursor: 'pointer',
};

function Contact() {
  const [inquerySent, setInquerySent] = useState(false);

  return (
    <div className={styles.contactSection}>
      <div>
        <p className={styles.headline}>About Me</p>
        <p>
          My name is Aly Mohamed, a frontend developer based in Egypt. I am
          passionate about anything related to web development. This is one of
          the projects that I recently created to help establish me in this
          career. <br />
          You can find on:
          <div className={styles.socialMedia}>
            <FaGithub style={style} />
            <FaTelegram style={style} />
            <FaBehanceSquare style={style} />
            <FaInstagram style={style} />
          </div>
        </p>
      </div>
      {!inquerySent && (
        <div>
          <p className={styles.formHeadline}>
            you can also email me for bussines enquiries
          </p>
          <form onSubmit={() => setInquerySent(true)}>
            <div className={styles.clientForm}>
              <div className={styles.labelWithField}>
                <label className={styles.label}>Your name</label>
                <div>
                  <input
                    type="text"
                    className={styles.field}
                    placeholder="Your first name"
                    required
                  />
                  <input
                    type="text"
                    className={styles.lastName}
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div className={styles.labelWithField}>
                <label className={styles.label}>Your email</label>
                <input
                  type="text"
                  className={styles.field}
                  placeholder="Your email"
                  required
                />
              </div>
              <div className={styles.labelWithField}>
                <label className={styles.label}>What is your Inquiry?</label>
                <textarea
                  className={styles.inquerBody}
                  rows={4}
                  required
                ></textarea>
              </div>
            </div>
            <button className={styles.submit}>Submit Inquiry</button>
          </form>
        </div>
      )}
      {inquerySent && (
        <div className={styles.inqueryResponse}>
          <FaCheckCircle style={checkStyles} />
          <p>
            Your inquery has been received, thank you for reaching out. <br />
            We will be in touch with you within few days, stay tuned :)
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;

/*
About me 
:
icons of github, telegram, instagram, behance
 
 create a form 

*/

import styles from './page.module.css';

function page() {
  return (
    <div className={styles.contactPage}>
      <div>
        <p className={styles.headline}>About Me</p>
        <p>
          My name is Aly, a frontend developer based in Egypt. I am passionate
          about anything related to web development. <br />
          This is one of the projects that I recently created to help establish
          me in this career. you can find on
        </p>
        <p>you can also email me for bussines enquiries</p>
      </div>
      <form className={styles.clientForm}>
        <div>
          <label>Your Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Your email</label>
          <input type="text" required />
        </div>
        <label>What is your Inquiry?</label>
        <textarea required></textarea>
      </form>
    </div>
  );
}

export default page;

/*
About me 
:
icons of github, telegram, instagram, behance
 
 create a form 

*/

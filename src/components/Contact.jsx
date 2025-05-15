import styles from '../styles/Contact.module.css';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

const Contact = () => {
  return (
    <section id="contact">
      <p className={styles.sectionTextP1}>Get in Touch</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactInfoUpperContainer}>
        <div className={styles.contactInfoContainer}>
          <img 
            src={emailIcon}
            alt="email icon"
            className={`${styles.icon} ${styles.contactIcon} ${styles.emailIcon}`}
          />
          <p><a href="mailto:snasriin39@gmail.com">snasriin39@gmail.com</a></p>
        </div>
        <div className={styles.contactInfoContainer}>
          <img 
            src={linkedinIcon}
            alt="linkedin icon"
            className={`${styles.icon} ${styles.contactIcon}`}
          />
          <p><a href="https://www.linkedin.com/in/nasrin-s-573417254/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

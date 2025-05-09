import React from "react";
import styles from "./Profile.module.css"; 

const Profile = () => {
    return (
      <section id="profile" className={styles.profile}>
        <div className={styles.profilePicContainer}>
          <img src="./assets/avatar.png" alt="Nasrin Sultana's avatar" />
        </div>
        <div className={styles.sectionText}>
          <p>Hello I'm</p>
          <h1>Nasrin Sultana</h1>
          <p>Junior Fullstack Developer</p>
          <div>
            <button className={styles.btn}>Download CV</button>
            <button className={styles.btn}>Contact Info</button>
          </div>
        </div>
      </section>
    );
  };
  
export default Profile;
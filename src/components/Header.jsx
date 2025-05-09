import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
  <Header>
    <nav id="desktop-nav"> className={styles.navbar}
      <div className={styles.logo}>Nasrin Sultana</div>
      <div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <nav id="hamburger-nav" className={styles.hamburgerNav}>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.menuLinks}>
          <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
</Header>

)

export default Header;
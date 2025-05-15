import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header>
    <nav id="desktop-nav" className={styles.navbar}>
      <div className={styles.logo}>🌸 Nasrin Sultana 🌸</div>
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

    <section id="profile">
      <div className="profile__pic-container">
        <img src="/assets/avatar.png" alt="Nasrin Sultana's avatar" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello I'm</p>
        <h1 className="title">Nasrin Sultana</h1>
        <p className="section__text__p2">Junior Fullstack Developer</p>

        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/assets/resume.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = './#contact')}
          >
            Contact Info
          </button>

          <div id="socials-container">
            <img
              src="/assets/linkedin.png"
              alt="My LinkedIn Profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/in/nasrin-s-573417254/')
              }
            />
            <img
              src="/assets/github.png"
              alt="My GitHub Profile"
              className="icon"
              onClick={() =>
                (window.location.href = 'https://github.com/Nas1010')
              }
            />
          </div>
        </div>
      </div>
    </section>
  </header>
);

export default Header;

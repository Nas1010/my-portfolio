import React from "react";
// import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-name">Nasrin Sultana</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

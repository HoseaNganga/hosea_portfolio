import React from "react";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleHamburger = () => {
    setIsActive(!isActive);
  };
  const handleNavClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav">
      <h2>Hosea.dev</h2>
      <ul className={`navLinks ${isActive ? "is-active" : ""}`}>
        <li>
          <a href="/home" onClick={handleNavClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleNavClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={handleHamburger}
        className={`hamburger ${isActive ? "is-active" : ""}`}
      >
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default NavBar;

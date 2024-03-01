import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footerc">
        <h3>CopyRight&copy; 2024 All Rights Reserved</h3>
        <div className="footerc-socials">
          <a
            aria-label="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hosea-nganga-58b6912b0/"
          >
            <FaLinkedin />
          </a>
          <a
            aria-label="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://x.com/Hozee_nganga?t=ywre-LkLo6HwmdO61WQltQ&s=08"
          >
            <FaTwitter />{" "}
          </a>
          <a
            aria-label="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/HoseaNganga"
          >
            {" "}
            <FaGithub />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

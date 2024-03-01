import React from "react";
import "./HomeSection.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";
import image1 from "../../ImageAssets/icons8-waving-hand-60.png";

const HomeSection = () => {
  return (
    <section id="home" className="home">
      <div className="hero-main">
        <div className="hero-text">
          <h1>Front-End React Developer</h1>

          <p>
            Hi, I'm Hosea Nganga. A passionate Front-end React Developer based
            in Nairobi, Kenya. 📍
            <img
              src={image1}
              alt="waving hand"
              className="wave"
              width={50}
              height={50}
            />
          </p>

          <span className="linkIcons">
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
          </span>
        </div>
        <div className="hero-img"></div>
      </div>
      <div className="skills">
        <p>Tech Stack</p>
        <div className="logos">
          <ul>
            <li>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=js,nodejs"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=git,markdown"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

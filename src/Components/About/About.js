import React from "react";
import "./About.css";
import pdf from "../../updatedHoseaCv.pdf";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="img-side">
          <img
            src="https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
            alt="emoji"
            className="work-emoji"
          />
          <img
            src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt="mainaboutimg"
            className="mainimg"
          />
          <span>
            <img
              src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
              alt="txt"
            />
          </span>
        </div>
        <div className="text-side">
          <h3>About Me</h3>
          <h4>
            Front-end Developer<br></br>based in Nairobi,Kenya 📍
          </h4>
          <p>
            Hey, my name is Hosea Nganga, and I'm a Front-end Developer. My
            passion is to create and develop a clean UI/UX for my users.
            <br></br>
            My main stack currently is React/Next.js in combination with CSS and
            JavaScript.
          </p>
          <p className="cv">
            <a href={pdf} target="_blank" rel="noreferrer">
              View Cv
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

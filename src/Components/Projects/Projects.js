import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="project">
      <div className="container">
        <h2>Projects</h2>
        <div className="projectsFlexContainer">
          <div className="projectCard project1">
            <div className="project1ImageContainer imageContainer"></div>
            <h3>Prompt-Quest-App</h3>
            <p>
              This application facilitates user authentication via email login,
              enabling users to access various features such as creating and
              editing posts. Leveraging MongoDB as the backend database, user
              creation is managed through Mongoose, a MongoDB object modeling
              tool designed for Node.js.
            </p>
            <p>
              <a
                href="https://prompt-quest-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </p>
          </div>
          <div className="projectCard project2">
            <div className="project2ImageContainer imageContainer"></div>
            <h3>E-Commerce Web Application</h3>
            <p>
              This project is an e-commerce website built using
              HTML,CSS,JavScript and React. It includes features for browsing
              different product categories, adding items to the cart, and
              viewing product details.The application uses react-router-dom for
              routing. Different routes are defined for each page, and
              corresponding components are rendered based on the URL.
            </p>
            <p>
              <a
                href="https://e-commerce-app-2kc.pages.dev/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </p>
          </div>
          <div className="projectCard project3">
            <div className="project3ImageContainer imageContainer"></div>
            <h3>Gym Web Application</h3>
            <p>
              This project is a gym website built using HTML,CSS,JavScript and
              React.Different routes are defined for each page, and
              corresponding components are rendered based on the URL.The App
              component manages the state of the schedule, which includes
              information about various classes offered by the fitness center on
              different days of the week. The schedule data is stored as an
              array of objects, with each object representing a day and its
              corresponding classes.
            </p>
            <p>
              <a
                href="https://gym-app-w3a.pages.dev/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </p>
          </div>
          <div className="projectCard project4">
            <div className="project4ImageContainer imageContainer"></div>
            <h3>Car-Rental Web Application</h3>
            <p>
              This project is a car rental website built using
              HTML,CSS,JavScript and React.Different routes are defined for each
              page, and corresponding components are rendered based on the
              URL.Each page is a React component responsible for rendering
              specific content.
            </p>
            <p>
              <a
                href="https://car-rental-app.pages.dev/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

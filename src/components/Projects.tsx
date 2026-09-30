
import React from "react";
import "./Projects.css";

function Projects() {
  const openMovieProject = () => {
  window.open(
    "https://github.com/sakshikandalkar2004/Online-Movie-Ticket-Booking-System",
    "_blank"
  );
};

  const openPortfolio = () => {
    window.open(
      "https://my-portfolio-eu6s.vercel.app/",
      "_blank"
    );
  };

  const openEcommerce = () => {
    window.open(
      "https://e-commerce-website-lnp38oqyx-sakshikandalkar2004.vercel.app/",
      "_blank"
    );
  };

  return (
    <section className="projects" id="projects">
      <div className="project-title">
        <h4>MY WORK</h4>
        <h1>Featured Projects</h1>
      </div>

      <div className="project-container">

        {/* Movie Project */}
        <div className="project-card">
          <h2>🎬 Online Movie Ticket Booking System</h2>

          <p>
            A web application that allows users to register, log in, select
            movies, book seats, and generate tickets with database support.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>

          <button type="button" onClick={openMovieProject}>
            View Project
          </button>
        </div>

        {/* Portfolio Project */}
        <div className="project-card">
          <h2>💼 Personal Portfolio Website</h2>

          <p>
            A modern and responsive portfolio website built using React.js to
            showcase my skills, education, and projects with a professional
            design.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>React.js</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <button type="button" onClick={openPortfolio}>
            View Project
          </button>
        </div>

        {/* E-Commerce Project */}
        <div className="project-card">
          <h2>🛒 E-Commerce Website</h2>

          <p>
            A responsive e-commerce website where users can browse fashion
            products, explore categories, and manage their shopping cart.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <button type="button" onClick={openEcommerce}>
            View Project
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;


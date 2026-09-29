import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="project-title">
        <h4>MY WORK</h4>
        <h1>Featured Projects</h1>
      </div>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-card">
          <h2>🌍 TourEase - Tourism Website</h2>

          <p>
            A responsive tourism website designed to help users explore travel
            destinations, tour packages, and booking information with a modern
            and attractive interface.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <button>View Project</button>
        </div>

        {/* Project 2 */}
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

          <button>View Project</button>
        </div>

        {/* Project 3 */}
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

          <button>View Project</button>
        </div>

      </div>

    </section>
  );
}

export default Projects;
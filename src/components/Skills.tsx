import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h4>MY SKILLS</h4>
      <h1>Technical Skills</h1>

      <div className="skill-box">
        <div className="skill-card">
          <h3>HTML & CSS</h3>
          <p>Web Development</p>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Frontend Development</p>
        </div>

        <div className="skill-card">
          <h3>Bootstrap</h3>
          <p>Responsive Design</p>
        </div>

        <div className="skill-card">
          <h3>React.js</h3>
          <p>Frontend Development</p>
        </div>

        <div className="skill-card">
          <h3>Java</h3>
          <p>Programming</p>
        </div>

        <div className="skill-card">
          <h3>Spring Boot</h3>
          <p>Backend Development</p>
        </div>

        <div className="skill-card">
        <h3>TypeScript</h3>
        <p>Programming Language</p>
        </div>

        <div className="skill-card">
          <h3>MySQL</h3>
          <p>Database</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
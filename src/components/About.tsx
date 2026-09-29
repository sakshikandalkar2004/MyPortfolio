import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <h4>Who Am I?</h4>
        <h1>About Me</h1>

        <p>
          Hello! I'm <strong>Sakshi Umesh Kandalkar</strong>, an MCA student and an
          <strong> Aspiring Frontend Developer</strong> with a passion for creating
          modern, responsive, and user-friendly websites.

          <br /><br />

          I enjoy transforming ideas into interactive web applications using
          <strong> HTML, CSS, JavaScript, Bootstrap, and React.js</strong>. I focus
          on building clean user interfaces and providing a great user experience.

          <br /><br />

          I completed my <strong>BCA with 71%</strong> and I am currently pursuing
          <strong> MCA</strong>. Alongside frontend development, I am also learning
          Java, Spring Boot, and MySQL to expand my technical knowledge.

          <br /><br />

          I am actively looking for opportunities where I can enhance my skills,
          work on real-world projects, and begin my career as a
          <strong> Frontend Developer</strong> while continuously learning new
          technologies.
        </p>
      </div>

      <div className="about-right">

        <div className="card">
          <h2>🎓 Education</h2>
          <p><strong>BCA</strong> - 71%</p>
          <p><strong>MCA</strong> - Pursuing</p>
        </div>

        <div className="card">
          <h2>💻 Technical Skills</h2>
          <p>✔ HTML5 & CSS3</p>
          <p>✔ JavaScript</p>
          <p>✔ Bootstrap</p>
          <p>✔ React.js</p>
          <p>✔ Java</p>
          <p>✔ Spring Boot</p>
          <p>✔ MySQL</p>
        </div>

        <div className="card">
          <h2>🎯 Career Goal</h2>
          <p>
            To become a skilled <strong>Frontend Developer</strong> by building
            modern, responsive, and high-quality web applications that deliver an
            excellent user experience.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;

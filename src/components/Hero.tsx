import React from "react";
import "./Hero.css";
import profile from "../assets/sakshi.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h3>Hello, It's Me</h3>

        <h1>Sakshi Umesh Kandalkar</h1>

        <h2>
          MCA Student | <span>Frontend Developer</span>
        </h2>

        <p>
          Passionate MCA student with strong knowledge of Java, Spring Boot,
          React.js, MySQL, HTML, CSS and JavaScript. I love creating modern,
          responsive and user-friendly web applications.
        </p>

        <div className="hero-btn">
          <a href="/SakshiKandalkarresume.pdf" download>
            Download Resume
          </a>

          <a
            href="https://github.com/sakshikandalkar2004"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sakshi-kandalkar-12722a3b9"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Sakshi" />
      </div>
    </section>
  );
}

export default Hero;
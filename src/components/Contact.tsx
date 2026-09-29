import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h4>GET IN TOUCH</h4>
        <h1>Contact Me</h1>

        <p>
          I'm always open to internship opportunities, collaborations, and new
          projects. Feel free to contact me!
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>📧 Email: sakshikandalkar2004@gmail.com</p>

          <p>📱 Phone: +91 9356925915</p>

          <p>📍 Maharashtra, India</p>

          <a
            href="https://github.com/sakshikandalkar2004"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <br />
          <br />

          <a
            href="https://www.linkedin.com/in/sakshi-kandalkar-12722a3b9"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Sakshi Kandalkar"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="sakshikandalkar2004@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;


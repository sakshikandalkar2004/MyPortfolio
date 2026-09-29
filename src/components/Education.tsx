import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <div className="edu-title">
        <h4>MY EDUCATION</h4>
        <h1>Education Journey</h1>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <div className="circle"></div>

          <div className="content">
            <h2>Master of Computer Applications (MCA)</h2>
            <h3>Pursuing</h3>
            <p>
              Currently pursuing MCA with a focus on Web Development,
              Frontend Development, React.js and Java.
            </p>
          </div>
        </div>

        <div className="timeline-item">
  <div className="circle"></div>

  <div className="content">
    <h2>Master of Computer Applications (MCA)</h2>
    <h3>2025 – Present</h3>
    <p>Currently Pursuing</p>
  </div>
</div>

<div className="timeline-item">
  <div className="circle"></div>

  <div className="content">
    <h2>Bachelor of Computer Applications (BCA)</h2>
    <h3>71%</h3>
    <p>Completed</p>
  </div>
</div>

<div className="timeline-item">
  <div className="circle"></div>

  <div className="content">
    <h2>Higher Secondary Certificate (HSC)</h2>
    <h3>60%</h3>
    <p>Completed</p>
  </div>
</div>

<div className="timeline-item">
  <div className="circle"></div>

  <div className="content">
    <h2>Secondary School Certificate (SSC)</h2>
    <h3>81.20%</h3>
    <p>Completed</p>
  </div>
</div>
      </div>

    </section>
  );
}

export default Education;
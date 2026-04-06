import React from "react";
import "../styles/about.css";

import aboutImage from "../assets/about-us.jpg";

function About() {
  return (
    <section id="about" className="about fade-in reveal">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="about company" />
        </div>
        <div className="about-content">
          <h2>About NextGen Digital</h2>
          <p>
            We help businesses grow faster by building modern, scalable and
            user-friendly digital solutions using latest technologies.
          </p>
          <ul>
            <li>Modern React Websites</li>
            <li>High Performance UI</li>
            <li>Mobile Responsive Design</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;

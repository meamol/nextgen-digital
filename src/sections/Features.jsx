import React from "react";
import "../styles/features.css";

import { FaCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

function Features() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Modern scalable React websites.",
    },

    {
      icon: <FaMobileAlt />,
      title: "App Development",
      description: "High performance mobile apps.",
    },

    {
      icon: <FaPalette />,
      title: "UI UX Design",
      description: "Clean modern user experience.",
    },

    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Improve search ranking visibility.",
    },

    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description: "Secure scalable cloud deployment.",
    },

    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Track business growth insights.",
    },
  ];

  return (
    <section id="features" className="features reveal">
      <h2>Features</h2>

      <div className="features-container">
        {services.map((service, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

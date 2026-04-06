import React, { useState, useEffect } from "react";
import "../styles/hero.css";

import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

function Hero() {
  /* ⭐ CHANGE 1: slides array upgraded → image + text + buttons object structure */

  const slides = [
    {
      image: slider1,
      heading: "Building Future Ready Web Experiences",
      subheading:
        "Modern responsive websites built using React, JavaScript and latest frontend technologies.",
      btn1: "Get Started",
      btn2: "View Services",
      link1: "#contact",
      link2: "#services",
    },

    {
      image: slider2,
      heading: "High Performance React Applications",
      subheading:
        "Fast loading, SEO optimized and scalable frontend solutions for modern businesses.",
      btn1: "Our Projects",
      btn2: "Hire Developer",
      link1: "#projects",
      link2: "#contact",
    },

    {
      image: slider3,
      heading: "Design. Develop. Grow Your Digital Presence",
      subheading:
        "We help startups and businesses create powerful online experiences that convert visitors into customers.",
      btn1: "Contact Us",
      btn2: "Learn More",
      link1: "#contact",
      link2: "#about",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  /* ⭐ CHANGE 2: autoplay slider optimized with functional state update */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero reveal"
      /* ⭐ CHANGE 3: dynamic background image from slides object */

      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className="overlay">
        {/* ⭐ CHANGE 4: dynamic heading */}

        <h1>{slides[currentSlide].heading}</h1>

        {/* ⭐ CHANGE 5: dynamic subheading */}

        <p>{slides[currentSlide].subheading}</p>

        <div className="hero-buttons">
          {/* ⭐ CHANGE 6: SEO-friendly CTA links */}

          <a
            href={slides[currentSlide].link1}
            className="primary-btn"
            aria-label="Primary Call To Action Button"
          >
            {slides[currentSlide].btn1}
          </a>

          <a
            href={slides[currentSlide].link2}
            className="secondary-btn"
            aria-label="Secondary Call To Action Button"
          >
            {slides[currentSlide].btn2}
          </a>
        </div>

        {/* navigation arrows */}

        <div className="arrows">
          <span onClick={prevSlide}>❮</span>

          <span onClick={nextSlide}>❯</span>
        </div>

        {/* dots navigation */}

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

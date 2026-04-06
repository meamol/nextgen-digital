import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="navbar">
      <h2 className="logo">
        <a href="#home">NextGen Digital</a>
      </h2>

      <div
        className="nav-links menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      <ul className={menuOpen ? "menu active" : "menu"}>
        <li
          className={activeLink === "home" ? "active" : ""}
          onClick={() => {
            setActiveLink("home");
            setMenuOpen(false);
          }}
        >
          <a href="#home">Home</a>
        </li>

        <li
          className={activeLink === "about" ? "active" : ""}
          onClick={() => {
            setActiveLink("about");
            setMenuOpen(false);
          }}
        >
          <a href="#about">About</a>
        </li>

        <li
          className={activeLink === "features" ? "active" : ""}
          onClick={() => {
            setActiveLink("features");
            setMenuOpen(false);
          }}
        >
          <a href="#features">Features</a>
        </li>

        <li
          className={activeLink === "pricing" ? "active" : ""}
          onClick={() => {
            setActiveLink("pricing");
            setMenuOpen(false);
          }}
        >
          <a href="#pricing">Pricing</a>
        </li>

        <li
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => {
            setActiveLink("contact");
            setMenuOpen(false);
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

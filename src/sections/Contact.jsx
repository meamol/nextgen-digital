import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea rows="5" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

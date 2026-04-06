import React from "react";
import "../styles/testimonials.css";

function Testimonials() {
  const testimonialsData = [
    {
      name: "John Smith",
      role: "Marketing Manager",
      message:
        "NextGen Digital Solutions delivered our website perfectly. Highly recommended!",
      rating: 5,
    },

    {
      name: "Emily Davis",
      role: "Startup Founder",
      message:
        "Professional team with excellent support. Our business visibility improved a lot!",
      rating: 5,
    },

    {
      name: "Michael Brown",
      role: "Business Owner",
      message:
        "Fast service, clean design and great communication throughout the project.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials reveal">
      <h2 className="testimonial-title">What Our Clients Say</h2>

      <div className="testimonials-container">
        {testimonialsData.map((client, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{"⭐".repeat(client.rating)}</div>

            <p className="message">"{client.message}"</p>

            <h4>{client.name}</h4>

            <span>{client.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

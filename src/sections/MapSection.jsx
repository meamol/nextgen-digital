import React from "react";
import "../styles/map.css";

function MapSection() {
  return (
    <section className="map-section reveal">
      <h2 className="map-title">Our Office Location</h2>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=Mumbai,India&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;

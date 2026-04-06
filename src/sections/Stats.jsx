import React, { useState, useEffect } from "react";
import "../styles/stats.css";

function Stats() {
  const statsData = [
    { number: 120, label: "Projects Completed" },

    { number: 80, label: "Happy Clients" },

    { number: 10, label: "Years Experience" },

    { number: 24, label: "Support Available" },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < statsData[index].number ? count + 1 : count,
        ),
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats reveal">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{counts[index]}+</h2>

            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

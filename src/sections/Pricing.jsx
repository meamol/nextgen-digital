import React from "react";
import "../styles/pricing.css";

function Pricing() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "₹999",
      features: [
        "1 Website Design",
        "Basic Support",
        "Mobile Responsive",
        "SEO Ready",
      ],
      popular: false,
    },

    {
      title: "Professional",
      price: "₹2999",
      features: [
        "5 Website Pages",
        "Priority Support",
        "SEO Optimization",
        "Fast Performance",
      ],
      popular: true,
    },

    {
      title: "Enterprise",
      price: "₹5999",
      features: [
        "Unlimited Pages",
        "24/7 Support",
        "Advanced SEO",
        "Performance Optimization",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing reveal">
      <h2 className="pricing-title">Our Pricing Plans</h2>

      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >
            {plan.popular && <span className="badge">Most Popular</span>}

            <h3>{plan.title}</h3>

            <h1>{plan.price}</h1>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;

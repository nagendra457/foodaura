
import { useState } from "react";
import "./OrderTracking.css";

function OrderTracking() {
  const [status, setStatus] = useState(2);

  const steps = [
    {
      title: "Order Confirmed",
      description: "Your order has been received.",
      icon: "✓",
    },
    {
      title: "Preparing Food",
      description: "Our chefs are preparing your food.",
      icon: "🍳",
    },
    {
      title: "Out for Delivery",
      description: "Your order is on its way.",
      icon: "🛵",
    },
    {
      title: "Delivered",
      description: "Enjoy your delicious meal!",
      icon: "🏠",
    },
  ];

  return (
    <section className="tracking-section" id="tracking">
      <div className="tracking-heading">
        <span>FOODORA DELIVERY</span>
        <h1>Track Your Order</h1>
        <p>Follow your food journey from kitchen to doorstep.</p>
      </div>

      <div className="tracking-card">
        <div className="tracking-top">
          <div>
            <p>ORDER ID</p>
            <h3>#FD20261123</h3>
          </div>

          <div className="delivery-time">
            <span>ESTIMATED DELIVERY</span>
            <h2>30–40 min</h2>
          </div>
        </div>

        <div className="tracking-progress">
          {steps.map((step, index) => (
            <div
              className={`tracking-step ${
                index <= status ? "completed" : ""
              }`}
              key={step.title}
            >
              <div className="step-icon">{step.icon}</div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tracking-demo">
          <p>Demo: Update your order status</p>

          <div className="tracking-buttons">
            {steps.map((step, index) => (
              <button
                key={step.title}
                className={status === index ? "active" : ""}
                onClick={() => setStatus(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <h3>Current Status: {steps[status].title}</h3>
        </div>
      </div>
    </section>
  );
}

export default OrderTracking;

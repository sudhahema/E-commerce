import React, { useState } from "react";
import { Link } from "react-router-dom";

function Timeline() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = ["Buy", "Dispatch", "Out of Delivery", "Delivered"];

  const handleClick = (index) => {
    setActiveStage(index);
  };

  return (
    <div className="vcontainer">
      <div className="cart-container">
        <h2>Timeline</h2>
        <Link to="/">
          <button className="card-container-button">Home</button>
        </Link>
      </div>
      <ul className="timeline">
        {stages.map((stage, index) => (
          <li
            key={index}
            className={`timeline-item ${
              index === activeStage || 
              index === activeStage - 1 ||
              index === activeStage - 2 ||
              index === activeStage - 3
                ? "active"
                : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <p>{stage}</p>
          </li>
        ))}
      </ul>
      {activeStage === 0 && (
        <div>
          <p className="text-align">Enter the Payment Details</p>
        </div>
      )}
    </div>
  );
}

export default Timeline;

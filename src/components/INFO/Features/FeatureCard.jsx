// FeatureCard.jsx
import React from "react";

const FeatureCard = ({ icon, title, children, incomingText }) => {
  return (
    <div className="Features_card">
      <div className="Features_icon">{icon}</div>
      <h3 className="Features_title">{title}</h3>

      <div className="Features_desc">
        {children}
      </div>

      {incomingText && (
        <button className="Features_incomingBtn">
          {incomingText}
        </button>
      )}
    </div>
  );
};

export default FeatureCard;
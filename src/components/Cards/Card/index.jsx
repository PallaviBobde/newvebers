import React from "react";
import "./style.css";

function Card({
  cardtype,
  name,
  description,
  icon,
  clientImage,
  clientName,
  clientServiceName,
}) {
  return (
    <div className="service-card">
      {cardtype === "service" && (
        <>
          <p className="icon">{icon}</p>
          <h2>{name}</h2>
          <p className="description">{description}</p>
        </>
      )}
      {cardtype === "testimonial" && (
        <>
        <p className="description">{`"${description}"`}</p>
          <div className="customer">
            <img src={clientImage} alt="Description of the image" />
            <div>
              <div className="client-name">{clientName}</div>
            <div className="client-service-name">{clientServiceName} client</div>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}

export default Card;

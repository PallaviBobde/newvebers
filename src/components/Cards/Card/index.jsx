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
    <>
      <div className="service-card normal-text">
        {cardtype === "service" && (
          <div className="service-div">
            <p className="icon hideOnMobile">{icon}</p>
            <h2>{name}</h2>
            <p className="description hideOnMobile">{description}</p>
          </div>
        )}
        {cardtype === "testimonial" && (
          <>
            <p className="description ">{`"${description}"`}</p>
            <div className="customer">
              <img
                src={clientImage}
                alt="Description of the image"
                className="hideOnMobile"
              />
              <div>
                <div className="client-name">{clientName}</div>
                <div className="client-service-name hideOnMobile">
                  {clientServiceName} client
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;

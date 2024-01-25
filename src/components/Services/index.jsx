import React from "react";
import './style.css'
import { services } from "../../utils/constants";
import Card from "../Cards/Card";

function Services() {
  

  return <div className="services">
    <h1 className="heading">We expertise in...</h1>
    <div className="service-container">
      {services.map((service)=>{
        return  <Card cardtype="service" name={service.name} description={service.description} icon={service.icon}  />
      })}
    </div>
  </div>;
}

export default Services;

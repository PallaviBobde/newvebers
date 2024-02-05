import React from "react";
import './style.css'
import {indianClients} from "../../utils/constants";
import Card from "../Cards/Card";
import MobileSlider from "../MobileSlider";

function Testimonials() {

  return <div className="testimonials">
    <h1 className="sub-heading">We our clients say about our service</h1>
    <div className="testimonial-container">
      {indianClients.map((client)=>{
        return  <Card cardtype="testimonial" description={client.comment} clientImage={client.userImage} clientName={client.userName} clientServiceName={client.userService} />
      })}
    </div>
  </div>;
}

export default Testimonials;

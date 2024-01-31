import React from "react";
import './style.css'
import ContactForm from "../ContactForm/HomePageContact";

function LandingInfo() {
  return <div className="landingInfo">
    <div className="text-box">
       <h1>Build your next Website with us.</h1>
    <ContactForm/>
    </div>
   
    <i class="fas fa-angle-down absolute bottom-0 downarrow"></i>
  </div>;
}

export default LandingInfo;

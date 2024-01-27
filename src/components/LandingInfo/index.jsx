import React from "react";
import './style.css'
import ContactForm from "../ContactForm/HomePageContact";

function LandingInfo() {
  return <div className="landingInfo h-[90vh]">
    <h1>Build your next Website with us.</h1>
    {/* <p>We at VebersZone are dedicated to bringing a new era of design to the web. We want our customers to have web experiences they can be proud of.</p> */}
    <ContactForm/>
    <i class="fas fa-angle-down absolute bottom-0"></i>

  </div>;
}

export default LandingInfo;

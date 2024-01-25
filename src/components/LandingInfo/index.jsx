import React from "react";
import './style.css'
import ContactForm from "../ContactForm";

function LandingInfo() {
  return <div className="landingInfo">
    <h1>Build your next Website with us.</h1>
    {/* <p>We at VebersZone are dedicated to bringing a new era of design to the web. We want our customers to have web experiences they can be proud of.</p> */}
    <ContactForm/>
    <img className="img" src="https://cdn.pixabay.com/photo/2016/04/27/01/39/search-1355847_1280.png"/>
  </div>;
}

export default LandingInfo;

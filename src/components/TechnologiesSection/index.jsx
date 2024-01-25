import React from "react";
import './style.css'

function TechnolgiesSection() {

  return <div className="technolgies-section">
    <div className="container left">
      <div className="ticker">
        <marquee behavior="scroll" direction="left" scrollamount="8" className="marquee" scrolldelay="100">
          <span className="gray"> Technologies we use - </span>
          <span className="red"> 💻 Html</span>
          <span className="blue">  💻 Css</span>
          <span className="yellow"> 💻Javascript</span>
          <span className="pink"> 💻React</span>
          <span className="purple"> 💻React Native</span>
          <span className="red"> 💻 Bootstrap</span>
          <span className="blue">  💻 Tailwind</span>
           <span className="blue">  💻 Wordpress</span>
            <span className="blue">  💻 Figma</span>
      </marquee>
      </div>
    </div>
     <div className="container right">
      <div className="ticker">
        <marquee behavior="scroll" direction="right" scrollamount="8" className="marquee">
          <span className="red"> 💻 Website Development</span>
          <span className="blue">  🎨 Logo Design</span>
          <span className="yellow"> 📸 Instapost Making</span>
          <span className="pink"> 🛒 Digital Marketing</span>
          <span className="purple"> 📱 E-commerce Solutions</span>
          <span className="red"> 📱 Mobile App Development</span>
          <span className="blue"> ✍️ Content Creation</span>
          <span className="yellow"> 🎨  UI/UX Design</span>
          <span className="pink"> 🔍Branding Consultation</span>
          <span className="gray">- Our services</span>
      </marquee>
      </div>
      <div className="transparent"></div>
    </div>
    
  </div>;
}

export default TechnolgiesSection;

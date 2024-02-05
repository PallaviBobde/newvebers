import React, { useEffect, useState } from "react";
import './style.css'
import ContactForm from "../ContactForm/HomePageContact";
import { phoneNumber } from "../../utils/constants";
import { Link } from "react-router-dom";

function LandingInfo() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('Hey, I want to connect for')}`;
  const [text, setText] = useState('Website');
  const texts = ['Website', 'Logo Design', 'Insta Page', 'Ecommerce', 'Mobile App'];
  let index = 0;
  
  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return <div className="landingInfo">
    <div className="text-box">
      <h1 className="sub-heading"><span className="main-text heading">{text}</span> <br/>that grows your business.</h1>
       <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn normal-text">✉️ Start Today</Link>
    <ContactForm/>
    </div>
   
    <i class="fas fa-angle-down absolute bottom-0 downarrow"></i>
  </div>;
}

export default LandingInfo;

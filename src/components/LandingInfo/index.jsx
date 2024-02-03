import React, { useEffect, useState } from "react";
import './style.css'
import ContactForm from "../ContactForm/HomePageContact";
import { phoneNumber } from "../../utils/constants";
import { Link } from "react-router-dom";

function LandingInfo() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('I want to connect for')}`;
  const [text, setText] = useState('Website');
  const texts = ['Website', 'Logo Design', 'Insta Page', 'Ecommerce', 'Mobile App'];
  let index = 0;
  
  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 3000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return <div className="landingInfo">
    <div className="text-box">
      <h1>Build a <br/><span className="main-text">{text}</span> <br/>that grows your business.</h1>
       {/* <h1>Build your <br/>next <span className="main-text">{text}</span> <br/>with us.</h1> */}
       <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">✉️ WhatsApp Us</Link>
    <ContactForm/>
    </div>
   
    <i class="fas fa-angle-down absolute bottom-0 downarrow"></i>
  </div>;
}

export default LandingInfo;

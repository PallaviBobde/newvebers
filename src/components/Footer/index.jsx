import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import ContactForm from '../ContactForm/HomePageContact';
import MediaButton from "../MediaButtons";
import { phoneNumber } from "../../utils/constants";

function Footer() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    "I want a Website"
  )}`;
  return <div className="footer normal-text">
    <div className="address-container ">
      <p className="footer-heading ">Feel free to reach out </p>
      <p>If you have any questions or if you'd like to discuss your project further. We're here to help you succeed online.</p>
      <p className="hideOnMobile">
        Viman Nagar, Pune<br/>
        Phone: 8319699485<br/>
        Email: veberszone@gmail.com
      </p>
    </div>
    <div className="links-contianer ">
      <p className="footer-heading hideOnMobile">Quick Links </p>
      <Link to="/" className="a hideOnMobile">
          Home
        </Link>
        <Link to="/services" className="a hideOnMobile">
          Services
        </Link>
        <Link to="/portfolio" className="a hideOnMobile">
          Portfolio
        </Link>
        <Link to="/aboutus" className="a hideOnMobile">
          About Us
        </Link>
       <Link to="/contactus" className="a hideOnMobile">
        Contact Us
        </Link>
    </div>
    <div className="contact-container">
      <p className="footer-heading hideOnMobile">Get in contact with us!</p>
      <ContactForm/>
      <div className="icons">
            <MediaButton contactLink={"https://www.linkedin.com/in/vebers-zone-a50b242aa/"} iconName={"fa fa-linkedin"} />
            <MediaButton contactLink={"https://www.instagram.com/veberszone"} iconName={"fa fa-instagram"}/>
            <MediaButton contactLink={whatsappUrl} iconName={"fa fa-whatsapp"}  />
      </div>
    </div>
  </div>;
}

export default Footer;

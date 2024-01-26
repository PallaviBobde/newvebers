import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import ContactForm from '../ContactForm';

function Footer() {
  return <div className="footer">
    <div className="address-container">
      <p className="footer-heading">Feel free to reach out </p>
      <p>If you have any questions or if you'd like to discuss your project further. We're here to help you succeed online.</p>
      <p>
        Viman Nagar, Pune<br/>
        Phone: 8319699485<br/>
        Email: veberszone@gmail.com
      </p>
    </div>
    <div className="links-contianer">
      <p className="footer-heading">Quick Links </p>
      <Link to="/" className="a">
          Home
        </Link>
        <Link to="/Services" className="a">
          Services
        </Link>
        <Link to="/Portfolio" className="a">
          Portfolio
        </Link>
        <Link to="/AboutUs" className="a">
          About Us
        </Link>
       <Link to="/ContactUs" className="a">
        Contact Us
        </Link>
    </div>
    <div className="contact-container">
      <p className="footer-heading">Get in contact with us!</p>
      <ContactForm/>
      <div className="icons">
          <img src='https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png'/>
          <img src='https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_1280.png'/>
          <img src='https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png'/>
          <img src='https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_1280.png'/>
      </div>
    </div>
  </div>;
}

export default Footer;

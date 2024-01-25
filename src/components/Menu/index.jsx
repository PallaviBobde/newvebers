import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../../assets/images/vbb.png';

function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="logo"><img src={Logo} alt="Description of the image" /></Link>
      <div>
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
      </div>
       <Link to="/ContactUs" className="menubtn">
        Contact Us
        </Link>
    </div>
  );
}

export default Menu;

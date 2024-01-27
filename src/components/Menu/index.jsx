import React from "react";
import { Link, NavLink } from "react-router-dom";
import './style.css';
import Logo from '../../assets/images/vbb.png';

function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" activeClassName="active-link" className="logo"><img src={Logo} alt="Description of the image" /></NavLink>
      <div>
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : 'a')}>
          Home
        </NavLink>
        <NavLink to="/Services" className={({ isActive }) => (isActive ? 'active-link' : 'a')}>
          Services
        </NavLink>
        <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'a')}>
          Portfolio
        </NavLink>
        <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active-link' : 'a')}>
          About Us
        </NavLink>
      </div>
       <Link to="/ContactUs" className="menubtn">
        Contact Us
        </Link>
    </nav>
  );
}

export default Menu;

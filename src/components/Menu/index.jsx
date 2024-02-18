import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './style.css';
import Logo from '../../assets/images/vbb.png';

function Menu() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <>
    <div className={`menu-icon-container ${isMenuOpen ? 'bggray':''}`}>
      <NavLink to="/" className="logo"><img src={Logo} alt="Description of the image" /></NavLink>
      <div class="menu-icon showonphone" onClick={toggleMenu} > {isMenuOpen  ? 'X' : '☰'}</div>
    </div>

    <nav className="menu showondesktop normal-text" id="menu">
      <NavLink to="/" className="logo logomenu"><img src={Logo} alt="Description of the image" /></NavLink>
      <div>
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}> 
          Services
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          About Us
        </NavLink>
      </div>
       <Link to="/contactus" className="menubtn" onclick={()=>setMenuOpen(false)}>
        Contact Us
        </Link>
    </nav>
    {isMenuOpen &&  (<nav className="menu normal-text" id="menu">
      <NavLink to="/" className="logo logomenu"><img src={Logo} alt="Description of the image" /></NavLink>
      <div>
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}> 
          Services
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
        Contact Us
        </NavLink>
      </div>
    </nav>)
    }
    
    </>
  );
}

export default Menu;

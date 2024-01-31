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

    <nav className="menu showondesktop" id="menu">
      <NavLink to="/" className="logo logomenu"><img src={Logo} alt="Description of the image" /></NavLink>
      <div>
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/Services" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}> 
          Services
        </NavLink>
        <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/ValentineDiary" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Valentine Diary 🧡 
        </NavLink>
      </div>
       <Link to="/ContactUs" className="menubtn" onclick={()=>setMenuOpen(false)}>
        Contact Us
        </Link>
    </nav>
    
    {isMenuOpen &&  (<nav className="menu open" id="menu">
      <NavLink to="/" className="logo logomenu"><img src={Logo} alt="Description of the image" /></NavLink>
      <div>
        <NavLink to="/"  className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/Services" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}> 
          Services
        </NavLink>
        <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/ValentineDiary" className={({ isActive }) => (isActive ? 'active-link' : 'a')} onclick={()=>setMenuOpen(false)}>
          Valentine Diary 🧡 
        </NavLink>
      </div>
       <Link to="/ContactUs" className="menubtn" onclick={()=>setMenuOpen(false)}>
        Contact Us
        </Link>
    </nav>)
    }
    
    </>
  );
}

export default Menu;

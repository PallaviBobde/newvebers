import React from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import './style.css'
import OurFounders from "../../components/OurFounders";

function AboutUs() {
  
  return (
    <div className='page'>
      <Menu />
      <OurFounders/>
      <Footer />
    </div>
  );
}

export default AboutUs;

import React from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import './style.css'
import OurFounders from "../../components/OurFounders";
import AboutInfo from "../../components/AboutInfo";

function AboutUs() {
  
  return (
    <>
      <Menu />
      <AboutInfo/>
      <OurFounders/>
      <Footer />
      </>
  );
}

export default AboutUs;

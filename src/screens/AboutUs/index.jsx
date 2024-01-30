import React from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import './style.css'
import OurFounders from "../../components/OurFounders";
import AboutInfo from "../../components/AboutInfo";
import AboutWhySection from "../../components/AboutWhySection";
import GetFreeConsultation from '../../components/Cards/GetFreeConsultation';
import TopBanner from '../../components/TopBanner';

function AboutUs() {
  
  return (
    <>
     <TopBanner/>
      <Menu />
      <AboutInfo/>
      <OurFounders/>
      <AboutWhySection/>
      <GetFreeConsultation/>
      <Footer />
      </>
  );
}

export default AboutUs;

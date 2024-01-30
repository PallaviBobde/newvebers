import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css';
import ServicesSection from '../../components/ServicesSection';
import GetFreeConsultation from '../../components/Cards/GetFreeConsultation';
import TopBanner from '../../components/TopBanner';

function Services() {
  return (
    <>
     <TopBanner/>
        <Menu/>
        <ServicesSection/>
        <Footer/>
    </>
  )
}

export default Services;
import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css';
import ServicesSection from '../../components/ServicesSection';
import GetFreeConsultation from '../../components/Cards/GetFreeConsultation';

function Services() {
  return (
    <>
        <Menu/>
        <ServicesSection/>
        <GetFreeConsultation/>
        <Footer/>
    </>
  )
}

export default Services;
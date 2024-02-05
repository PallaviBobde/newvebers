import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css';
import ServicesSection from '../../components/ServicesSection';
import FAQs from '../../components/Faqs';

function Services() {
  return (
    <>
        <Menu/>
        <ServicesSection/>
        <FAQs/>
        <Footer/>
    </>
  )
}

export default Services;
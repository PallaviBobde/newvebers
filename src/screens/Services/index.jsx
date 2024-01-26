import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css';
import ServicesSection from '../../components/ServicesSection';
import GetFreeConsultation from '../../components/Cards/GetFreeConsultation';

function Services() {
  return (
    <div className='page'>
     <Menu/>
     <ServicesSection/>
     <GetFreeConsultation/>
     <Footer/>
    </div>
  )
}

export default Services;
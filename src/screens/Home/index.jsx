import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import LandingInfo from '../../components/LandingInfo';
import ServicesSection from '../../components/ServicesSection';
import Testimonials from '../../components/Testimonials';
import TechnolgiesSection from '../../components/TechnologiesSection';
import Works from '../../components/Works';
import FAQs from '../../components/Faqs';
import GetFreeConsultation from '../../components/Cards/GetFreeConsultation';

function Home() {
  return (
    <div className='page'>
      <Menu/>
      <LandingInfo/>
      {/* <TechnolgiesSection/> */}
      <ServicesSection />
      <GetFreeConsultation/>
      <Works/>
      <Testimonials/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default Home;
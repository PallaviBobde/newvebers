import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import LandingInfo from '../../components/LandingInfo';
import ServicesSection from '../../components/ServicesSection';
import Testimonials from '../../components/Testimonials';
import FAQs from '../../components/Faqs';
import GetFreeConsultation from '../../components/Cards/GetFreeConsultation';
import PortfolioSection from '../../components/PortfolioSection';

function Home() {
  return (
    <div className='page'>
      <Menu/>
      <LandingInfo/>
      <ServicesSection />
      <GetFreeConsultation/>
      <PortfolioSection isHomepage />
      <Testimonials/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default Home;
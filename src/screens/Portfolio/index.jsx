import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import PortfolioSection from '../../components/PortfolioSection';
import FAQs from '../../components/Faqs';

function Portfolio() {
  return (
    <>
        <Menu/>
        <PortfolioSection />
        <FAQs/>
        <Footer/>
    </>

  )
}

export default Portfolio;
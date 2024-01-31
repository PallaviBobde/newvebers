import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import PortfolioSection from '../../components/PortfolioSection';
import TopBanner from '../../components/TopBanner';

function Portfolio() {
  return (
    <>
     <TopBanner/>
        <Menu/>
        <PortfolioSection />
        <Footer/>
    </>

  )
}

export default Portfolio;
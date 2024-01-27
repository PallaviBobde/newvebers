import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import PortfolioSection from '../../components/PortfolioSection';

function Portfolio() {
  return (
    <div className='page'>
     <Menu/>
     <PortfolioSection />
     <Footer/>
    </div>
  )
}

export default Portfolio;
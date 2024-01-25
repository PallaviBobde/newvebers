import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import LandingInfo from '../../components/LandingInfo';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import TechnolgiesSection from '../../components/TechnologiesSection';
import Works from '../../components/Works';

function Home() {
  return (
    <div className='page'>
      <Menu/>
      <LandingInfo/>
      {/* <TechnolgiesSection/> */}
      <Services/>
      <Works/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home;
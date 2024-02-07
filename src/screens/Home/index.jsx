import React from 'react'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css'
import LandingInfo from '../../components/LandingInfo';
import ServicesSection from '../../components/ServicesSection';
import Testimonials from '../../components/Testimonials';
import FAQs from '../../components/Faqs';
import PortfolioSection from '../../components/PortfolioSection';
import TopBanner from '../../components/TopBanner';
import { Link } from 'react-router-dom';

function Home() {
  return (<>
      <TopBanner/>
      <Menu/>
      <LandingInfo/>
      <ServicesSection />
      <PortfolioSection isHomepage />
      <Testimonials/>
      <FAQs/>
      <Footer/>
      <div className='sticky'>
        <p> Wish happy rose day!</p>
        <Link
          to={`/roseday`}
          className='menubtn'
        >
            Send Wish
        </Link>
      </div>
      
</>

  )
}

export default Home;
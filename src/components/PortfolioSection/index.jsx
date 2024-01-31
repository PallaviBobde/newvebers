import React from 'react'
import './style.css'
import { portfolioImages } from '../../utils/constants';
import MobileSlider from '../MobileSlider';
import { Link } from 'react-router-dom';

function PortfolioSection({isHomepage=false}) {
  const imagesArray = isHomepage ? portfolioImages.slice(0,6) : portfolioImages;
  return (
    <div className='portfolio'>
        <h1 className='heading'>Our Works</h1>
        <div className='portfolio-container'>
          {imagesArray.map((imgUrl)=>{
                    return <div className='portfolio-inner-container'>
                      <img src={imgUrl} />
                    </div>
          })}
        </div>
        {
          isHomepage && <Link to={'/portfolio'} className='more-btn'>View More</Link>
        }
        
    </div>
  )
}

export default PortfolioSection;
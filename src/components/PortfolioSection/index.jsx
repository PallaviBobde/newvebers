import React from 'react'
import './style.css'
import { portfolioImages } from '../../utils/constants';

function PortfolioSection({isHomepage=false}) {
  return (
    <div className='portfolio'>
        <h1 className='heading'>Our Works</h1>
        <div className='portfolio-container'>
          {portfolioImages.map((imgArray)=>{
            const images = isHomepage ? imgArray.slice(0, 2) : imgArray;
              return <div className='portfolio-inner-container'>
                {
                  images.map((imgUrl)=>{
                    return <img src={imgUrl} />
                  })
                }
              </div>
          })}
        </div>
    </div>
  )
}

export default PortfolioSection;
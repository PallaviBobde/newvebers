import React from 'react'
import './style.css'
import { portfolioImages } from '../../utils/constants';
import MobileSlider from '../MobileSlider';

function PortfolioSection({isHomepage=false}) {
  const flattenedImagesArray = portfolioImages.flat(Infinity);
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
        <MobileSlider>
                {
                  flattenedImagesArray.map((imgUrl)=>{
                    return <div className='img-holder'>
                      <img src={imgUrl} />
                    </div>
                  })
                }
        </MobileSlider>
    </div>
  )
}

export default PortfolioSection;
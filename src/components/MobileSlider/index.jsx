import React from "react";
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MobileSlider({children}) {
  
  const settings = {
    dotsClass: 'slick-dots custom-dots',
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    customPaging: (i) => (
      <span className="dot">
      </span>
    ),
     nextArrow: <></>,
  };

  return <div className="mobile-slider">
     <Slider {...settings}>
      {children}
    </Slider>
  </div>;
}

export default MobileSlider;

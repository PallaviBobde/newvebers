import React from "react";
import './style.css'
import { services } from "../../utils/constants";
import Card from "../Cards/Card";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MobileSlider from "../MobileSlider";

function Services() {
  
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
        {/* You can customize the dot appearance here */}
      </span>
    ),
  };

  return <div className="services">
    <h1 className="heading">We expertise in...</h1>
    <div className="service-container">
      {services.map((service)=>{
        return  <Card cardtype="service" name={service.name} description={service.description} icon={service.icon}  />
      })}
    </div>
  </div>
  ;
}

export default Services;

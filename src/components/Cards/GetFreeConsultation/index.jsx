import React from "react";
import "./style.css";
import ContactForm from "../../ContactForm/HomePageContact";

function GetFreeConsultation() {
  return (
    <div className='get-free-consultation'>
      <div className="text">
         <div className="text-heading">Get free Consultation</div>
        <p className="my-3">
        Elevate your online presence with a complimentary consultation from VebersZone's expert team, tailoring solutions to help you achieve your goals.
        </p>
        <ContactForm/>
      </div>
      <div className="img-contianer">
        <div className="inner-img-container">
          <img src="https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_1280.jpg"/>
        </div>
      </div>
     
    </div>
  );
}

export default GetFreeConsultation;

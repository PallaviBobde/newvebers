import React from "react";
import "./style.css";
import ContactForm from "../../ContactForm";

function GetFreeConsultation() {
  return (
    <div className='get-free-consultation'>
      <div className="text">
         <div className="text-heading">Get free Consultation</div>
        <p>
          Ready to take your online presence to the next level? Our expert team at VebersZone is here to provide you with a complimentary consultation to discuss your unique needs and explore how we can help you achieve your goals.
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

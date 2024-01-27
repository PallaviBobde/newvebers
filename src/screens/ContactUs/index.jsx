import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import GenrelContactForm from "../../components/ContactForm/genralContactForm"
import './style.css'

function ContactUs() {
  return (
    <div className='page'>
      <Menu />
      <GenrelContactForm/>
      <Footer />
    </div>
  );
}

export default ContactUs;

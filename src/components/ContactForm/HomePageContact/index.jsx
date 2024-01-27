import React from "react";
import './style.css'

function ContactForm() {
  return <form className="contactform">
    <input type="email" className="flex-1" name="name" placeholder="Type your email address"/>
    <button>Get Started</button>
  </form>;
}

export default ContactForm;
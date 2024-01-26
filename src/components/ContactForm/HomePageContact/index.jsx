import React from "react";
import './style.css'

function ContactForm() {
  return <form className="contactform">
    <input type="email" name="name" placeholder="Type your email address"/>
    <button>Get Started</button>
  </form>;
}

export default ContactForm;
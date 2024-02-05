import React from "react";
import MediaButton from "../../MediaButtons";
import SocialLinkCard from "../../SocialLinkCard";
import LocationCard from "../../Cards/LocationCard";
import ContactCard from "../../Cards/ContactCard";
import './style.css';
import { Link } from "react-router-dom";
import { phoneNumber } from "../../../utils/constants";

export default function index() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    "I want a Website"
  )}`;
  return (
    <section
      id="Contact"
      className="relative py-4 flex flex-col sm:px-28 sm:pb-36 pb-8 text-white normal-text"
    >

     
      <div className="w-full lg:flex-row flex-col flex z-10 bg-[#82828520] p-4 sm:p-8 rounded-[10px]">

        <div className="lg:w-1/2 w-full sm:p-24 flex flex-col flex-1 text-white space-y-10 justify-around hideOnMobile">
          <div className="flex flex-col space-y-2 ">
            <div className="text-[2.5rem]">Have a question or want to get in touch</div>
            <div className="px-2 text-[1.2rem] text-[#1e8fffe4]">
           We would love to hear from you! Feel free to reach out through any
          of the following methods
            </div>
          </div>

          <div className="flex space-x-3 mb-10">
            <MediaButton contactLink={"https://www.linkedin.com/in/vebers-zone-a50b242aa/"} iconName={"fa fa-linkedin"} />
            <MediaButton contactLink={"https://www.instagram.com/veberszone"} iconName={"fa fa-instagram"}/>
            <MediaButton contactLink={whatsappUrl} iconName={"fa fa-whatsapp"}  />
          </div>
          <div className=" flex space-y-6 flex-col">
            <SocialLinkCard contactLink={"Mailto:veberszone@gmail.com"} iconName={"fa-envelope"} heading="Mail" content="veberszone@gmail.com"/>
            <SocialLinkCard contactLink={whatsappUrl} iconName={"fa-whatsapp"} heading="Whatsapp US: " content="+91 831 9699 485"/>
            <SocialLinkCard contactLink={"tel:8319699485"} iconName={"fa-call"} heading="Call Us" content="+91 831 9699 485"/>
          </div>
        </div>
        <div className="showOnMobile"> 
          <div className="text-[2.5rem]">Contact Us</div>
          <p>We would love to hear from you! Feel free to reach out through any
          of the following methods </p>
              <Link
                to={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn"
              >Whatsapp :
                +91 8319699485
              </Link>
              <Link
                to="tel:+918319699485"
                className="connect-btn"
              >
                Call : +91 8319699485
              </Link>
              <Link
                to="mailto:veberszone@gmail.com"
                className="connect-btn"
              >Mail : veberszone@gmail.com</Link>
              <Link
                to="https://www.instagram.com/veberszone"
                className="connect-btn"
              >Insta DM : @Veberszone</Link>

        </div>
        <ContactCard/>
      </div>

       <div className=" flex-col space-y-2 my-6 bg-[#82828520] sm:p-10 rounded-[10px] hideOnMobile">
          <LocationCard />
      </div>
    </section>
  );
}

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
      className="relative py-4 flex flex-col sm:px-28 sm:pb-36 pb-8 text-white "
    >
      <div className=" flex-col my-12 bg-[#82828520] p-8 rounded-[10px] hideonphone">
        <h2 className=" text-[2rem] sm:text-[4rem] ">Have a question or want to get in touch</h2>
        <p className="sm:px-4 my-4 text-[1rem] sm:text-[1.2rem] text-[#1e8fffe4]">
          We would love to hear from you! Feel free to reach out through any
          of the following methods
        </p>
      </div>

      <div className=" flex-col space-y-2 my-6 bg-[#82828520] sm:p-10 rounded-[10px] hideonphone">
        <p className="text-[1.4rem] p-4">LOCATIONS AND MAPs </p>
        <div className="flex p-8">
          <LocationCard />
        </div>
      </div>
      <div className="w-full lg:flex-row flex-col flex z-10 bg-[#82828520] p-8 rounded-[10px]">

        <div className="lg:w-1/2 w-full sm:p-24 flex flex-col flex-1 text-white space-y-10 justify-around">
          <div className="flex flex-col space-y-2 ">
            <div className="text-[2.5rem]">Let's Chat </div>
            <div className="px-2 text-[1.2rem] text-[#1e8fffe4]">
           <span className="text-[#ffdb4d]"> Warning: </span>  We may make your competitors jealous... So connect with us at your own risk !!
            </div>
          </div>

          <div className="flex space-x-3 mb-10">
            <MediaButton contactLink={"https://www.linkedin.com/in/vebers-zone-a50b242aa/"} iconName={"fa fa-linkedin"} />
            <MediaButton contactLink={"https://www.instagram.com/veberszone"} iconName={"fa fa-instagram"}/>
            <MediaButton contactLink={whatsappUrl} iconName={"fa fa-whatsapp"}  />
          </div>
          <div className=" flex space-y-6 flex-col">
            <Link
                to="tel:+918319699485"
                className="contact_link"
              >
                +91 8319699485
              </Link>
            <SocialLinkCard contactLink={"Mailto:veberszone@gmail.com"} iconName={"fa-envelope"} heading="Mail" content="veberszone@gmail.com"/>
            <SocialLinkCard contactLink={whatsappUrl} iconName={"fa-whatsapp"} heading="Whatsapp US: " content="+91 831 9699 485"/>
            <SocialLinkCard contactLink={"tel:8319699485"} iconName={"fa-call"} heading="Call Us" content="+91 831 9699 485"/>
          </div>
        </div>
        <ContactCard/>
      </div>
    </section>
  );
}

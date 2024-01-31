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
      {/* <div className="w-full z-10 flex  "> */}

        {/* <div className="lg:w-1/2 w-full my-12  flex flex-col flex-1 text-white space-y-10 "> */}
          <div className="flex flex-col space-y-2 mb-10 mt-10">
            <div className="text-[2.5rem]">Have a project to discuss ? Let's get in touch! </div>
            <div className="px-2 text-[1.2rem] ">
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
        {/* </div> */}
        {/* <ContactCard/> */}
      {/* </div> */}
    </section>
  );
}

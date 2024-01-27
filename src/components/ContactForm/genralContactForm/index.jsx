import React from "react";
import MediaButton from "../../MediaButtons";
import SocialLinkCard from "../../SocialLinkCard";
import LocationCard from "../../Cards/LocationCard";
import ContactCard from "../../Cards/ContactCard"

export default function index() {
  return (
    <section
      id="Contact"
      className="relative py-4 flex flex-col sm:px-28 sm:pb-36 pb-8 text-white"
    >
      <div className="flex flex-col my-12 bg-[#82828520] p-8 rounded-[10px]">
        <h2 className="text-[4rem] ">Have a question or want to get in touch</h2>
        <p className="px-4 my-4 text-[1.2rem] text-[#1e8fffe4]">
          {" "}
          
          we would love to hear it from you! feel free to reach out through any
          of the following method
        </p>
      </div>

      <div className="flex flex-col space-y-2 my-6 bg-[#82828520] p-10 rounded-[10px]">
        <p className="text-[1.4rem] px-2">LOCATIONS AND MAPs </p>
        <div className="flex p-8">
          <LocationCard />
        </div>
      </div>
      <div className="w-full lg:flex-row flex-col flex z-10 bg-[#82828520] p-8 rounded-[10px]">

        <div className="lg:w-1/2 w-full p-24 flex flex-col flex-1 text-white space-y-10 justify-around">
          <div className="flex flex-col space-y-2 ">
            <div className="text-[2.5rem]">Let's Chat </div>
            <div className="px-2 text-[1.2rem] text-[#1e8fffe4]">
           <span className="text-[#ffdb4d]"> Warning: </span>  We may make your competitors jealous... So connect with us at your own risk !!
            </div>
          </div>

          <div className="flex space-x-3">
            <MediaButton contactLink={"https://www.linkedin.com/in/vebers-zone-a50b242aa/"} iconName={"fa fa-linkedin"} />
            <MediaButton contactLink={""} iconName={"fa fa-instagram"}/>
            <MediaButton contactLink={""} iconName={"fa fa-youtube"}  />
            <MediaButton contactLink={""} iconName={"fa fa-twitter"}  />
          </div>
          <div className="flex space-y-6 flex-col">
            <SocialLinkCard contactLink={"Mailto:veberszone@gmail.com"} iconName={"fa-envelope"} heading="Mail" content="veberszone@gmail.com"/>
            <SocialLinkCard contactLink={"tel:8319699485"} iconName={"fa-whatsapp"} heading="Whatsapp US: " content="+91 8319699485"/>
            <SocialLinkCard contactLink={"github.com/gagan-baghel"} iconName={"fa-github"} heading="Github" content="gagan-baghel"/>
          </div>
        </div>
        <ContactCard/>
      </div>
    </section>
  );
}

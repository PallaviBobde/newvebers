import React from "react";
import MediaButton from "../../MediaButtons"
import SocialLinkCard from "../../SocialLinkCard"
import LocationCard from "../../Cards/LocationCard"

export default function index() {
  return (
    <section id="Contact" className="relative py-12 flex flex-col sm:px-28 sm:pb-36 pb-8 text-white">

      <div className="flex flex-col my-16">
        <h2 className="text-[3rem]">Have a question or want to get in touch</h2>
        <p className="px-2 text-[1rem] text-[#828285]"> we would love to hear it from you! feel free to reach out through any of the following method</p>
      </div>

      <div className="flex flex-col space-y-4 my-6"> 
        <p className=" text-[1.5rem]">LOCATIONS AND MAPs </p>
        <p className="px-2 text-[1rem] text-[#828285]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, officiis? </p>
        <div className="flex p-12" > 
          <LocationCard/> 
        </div>



      </div>



       <div className="w-full lg:flex-row flex-col flex z-10">
        <div className=" w-full lg:w-1/2 flex justify-center items-center my-12">
          <form
            action="https://formsubmit.co/8dceccfc7d1a6ea003ce596aa34236d6"
            method="POST"
            className="mx-2 w-full max-w-lg border-black bg-[#11111A] rounded-md px-8 py-10 sm:py-14 "
            style={{ boxShadow: "0 12px 105px 0 #1e90ff12" }}
          >
            <h1 className="text-[#8892B0] text-center md:text-4xl text-3xl py-6 pb-10 smooth-italic">
              Get In Touch &nbsp;{" "}
              <i className="fa-solid fa-envelope hover:text-[#1e90ff]" />
            </h1>
            <div className="flex flex-wrap -mx-3 ">
              <div className=" w-full lg:w-1/2  px-3 pb-2 ">
                <input
                  className="h-12 appearance-none block w-full bg-[#161616] text-[#1e90ff] border border-[#8892B030]  py-2 px-4 leading-tight focus:outline-none focus:bg-[#1e90ff20] rounded-[10px]"
                  id="grid-first-name"
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full lg:w-1/2 px-3 py-2 lg:pt-0  ">
                <input
                  className="h-12 appearance-none block w-full bg-[#161616]  text-[#1e90ff]  border border-[#8892B030] py-3 px-4  leading-tight focus:outline-none focus:bg-[#1e90ff20] rounded-[10px]"
                  id="grid-last-name"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full px-3 py-2 ">
                <input
                  className="h-12 appearance-none block w-full bg-[#161616] text-[#1e90ff] border border-[#8892B030] py-2 px-4 leading-tight focus:outline-none  focus:bg-[#1e90ff20] rounded-[10px]"
                  id="grid-last-name"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                
              </div>
              <div className="w-full px-3 py-2 ">
                <input
                  className="h-12 appearance-none block w-full bg-[#161616] text-[#1e90ff] border border-[#8892B030] py-2 px-4 leading-tight focus:outline-none  focus:bg-[#1e90ff20] rounded-[10px]"
                  id="grid-last-name"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full px-3 py-2">
                <textarea
                  className="h-48 resize-none appearance-none bg-[#161616] block w-full text-[#1e90ff] border border-[#8892B030] py-2 px-4  mb-3 leading-tight focus:outline-none focus:bg-[#1e90ff20] focus:border-gray-500 rounded-[10px]"
                  id="grid-password"
                  type="password"
                  name="user_msg"
                  placeholder="Message"
                  defaultValue={""}
                />
                <input
                  type="hidden"
                  name="_next"
                  defaultValue="https://gagan-baghel.github.io/gagan_baghel_Portfolio/#Contact"
                />
              </div>
            </div>
            <div className="flex w-full justify-end ">
              <button
                id="contactBtn"
                className="rounded-[10px] opacity-80 border-[1px] text-xs text-[#1e90ff] border-[#1e90ff] hover:text-[#8892B0]  hover:border-[#8892b088]  py-3 my-3 px-4"
                onclick="contactbutton()"
              >
                Send your Message
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full p-24 flex flex-col flex-1 text-white space-y-10 justify-around">
          <div className="flex flex-col space-y-2 ">
            <div className="text-[2rem]">Contact Form</div>
            <div className="px-2 text-[.8rem] text-[#828285]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque necessitatibus quidem aspernatur vel rem deserunt perferendis consectetur totam molestiae</div>
          </div>


          <div className="flex space-x-3">
            <MediaButton contactlink={""} iconName={"fa fa-linkedin"} />
            <MediaButton contactlink={""} iconName={"fa fa-linkedin"} />
            <MediaButton contactlink={""} iconName={"fa fa-linkedin"} />
            <MediaButton contactlink={""} iconName={"fa fa-linkedin"} />
          </div>
          <div className="flex space-y-6 flex-col">
            <SocialLinkCard/>
            <SocialLinkCard/>
            <SocialLinkCard/>
          </div>
        </div>

      </div>

    </section>

    
            

  );
}

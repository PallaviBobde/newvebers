import React from 'react'

export default function index() {
  return (<div className=" w-full lg:w-1/2 flex items-center my-12 justify-center">
  <form
    action="https://formsubmit.co/8dceccfc7d1a6ea003ce596aa34236d6"
    method="POST"
    className="mx-2 w-full max-w-lg bg-[#161616] border border-[#8892B030] rounded-md px-8 py-10 sm:py-14 lg:w-full"
    style={{ boxShadow: "0 12px 105px 0 #1e90ff12" }}
  >
    <h1 className="text-[#8892B0] text-center md:text-4xl text-3xl py-6 pb-10 smooth-italic">
      Contact Form &nbsp;{" "}
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
        className="rounded-[10px] opacity-80 border-[1px] text-[#1e90ff] border-[#1e90ff] hover:text-[#8892B0]  hover:border-[#8892b088]  py-3 my-3 px-4 text-[1rem]"
        onclick="contactbutton()"
      >
        Send your Message
      </button>
    </div>
  </form>
</div>)
}

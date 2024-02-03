import React from 'react'


export default function index() {
  return (
    <div className=" w-[22rem] flex flex-col p-8 rounded-[10px] bg-[#1e90ff20] space-y-2">
        <img 
            src={"https://res.cloudinary.com/dlksyxvtd/image/upload/v1706423632/vebers/u90tok450g3tfjdbyuei.png"}
            className="rounded-[10px] mb-6 h-[15rem]"
            loading="lazy">
        </img>
        <p className="px-2 text-[1.4rem] ">VebersZone Office - 1 </p>
        <p className="px-2 text-[1.1rem] text-[#1e8fffe4]">Viman Nagar, Pune, <br/>Maharastra, India <br/> 411014</p>
    </div>
  )
}

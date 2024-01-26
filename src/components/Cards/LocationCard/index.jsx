import React from 'react'
import mapImage from '../../../assets/mapImage/MapImage.png'

export default function index() {
  return (
    <div className=" w-[22rem] flex flex-col p-8 rounded-[10px] bg-[#1e90ff10] space-y-2">

        <img 
            src={mapImage}
            className="rounded-[10px] mb-6 h-[15rem]"
            loading="lazy">
        </img>

        <p className="px-2 text-[1rem] ">VebersZone Office - 1 </p>
        <p className="px-2 text-[.8rem] text-[#828285]">Viman Nagar, Pune Maharastra, India <br/> 411014</p>



    </div>
  )
}

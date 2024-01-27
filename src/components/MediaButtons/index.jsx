import React from 'react'

export default function index({contactLink,iconName}) {
  console.log(iconName)
  return (
    <a href={`${contactLink}`} className="flex justify-center items-center h-[50px] w-[50px] rounded-[10px] border border-[#8892B070] bg-[#1e90ff20] ">
            <i class={` ${iconName} text-[24px]`} aria-hidden="true"></i>

    </a>
  )
}

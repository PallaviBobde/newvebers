import React from 'react'

export default function index({heading, content, contactLink}) {
  return (
    <a href={contactLink} target='_blank'  className='rounded-[10px] border border-[#8892B070] bg-[#111111] p-4 '>
        <div className="text-[1rem] text-[#1e8fffe4]">{heading}</div>
        <div className="flex justify-between text-[1.2rem]">
            <p className="truncate">{content} </p>
            <i className="fa-solid fa-arrow-right-long "></i>
        </div>
    </a>
  )
}

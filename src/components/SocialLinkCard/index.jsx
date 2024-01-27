import React from 'react'

export default function index({heading, content, contactLink}) {
  return (
    <a href={contactLink} target='_blank'  className='rounded-[10px] border border-[#8892B070] bg-[#1e90ff20] p-4 '>
        <div className="text-[1rem] text-[#1e8fffe4]">{heading}</div>
        <div className="flex justify-between text-[1.2rem]">
            <p>{content} </p>
            <i class="fa-solid fa-arrow-right-long "></i>
        </div>
    </a>
  )
}

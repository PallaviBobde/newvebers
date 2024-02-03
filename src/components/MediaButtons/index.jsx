import React from 'react'

export default function index({contactLink,iconName}) {
  console.log(iconName)
  return (
    <a href={`${contactLink}`} className="mx-3">
            <i class={` ${iconName} text-[24px]`} aria-hidden="true"></i>
    </a>
  )
}

// https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg

import React from "react";
import './style.css';
import FoundersCard from "./FounderCard";
import { TeamMembers } from "../../utils/constants";

function OurFounders() {
  return (
    <div className="our-founders">
         <h1 className="heading">Our Founders</h1>
         {
            TeamMembers.map((Member,index)=>{
                return <FoundersCard index={index} name={Member.name} image={Member.image} description={Member.description}/>
            })
         }
    </div>
  );
}

export default OurFounders;

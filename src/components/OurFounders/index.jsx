import React from "react";
import './style.css';
import FoundersCard from "../Cards/FounderCard";
import { TeamMembers } from "../../utils/constants";

function OurFounders() {
  return (
    <div className="our-founders">
         <h1 className="heading">Meet our Team</h1>
         {
            TeamMembers.map((Member,index)=>{
                return <FoundersCard index={index} name={Member.name} designation={Member.designation} image={Member.image} description={Member.description}/>
            })
         }
    </div>
  );
}

export default OurFounders;

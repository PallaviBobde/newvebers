import React from "react";
import './style.css';
import WorksCard from "../Cards/WorksCard";
import { webDevelopmentProjects } from "../../utils/constants";

function Works() {
  return <div className="works">
    <h1 className="heading">Our Works</h1>
    <div className="work-container">
      {
        webDevelopmentProjects.map((project,index)=>{
          return <WorksCard isBigCard={index===0 || index===3} projectImage={project.image} projectName={project.name} projectDescription={project.description}  />
        })
      }
    </div>
  </div>;
}

export default Works;

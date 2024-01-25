import React from "react";
import "./style.css";

function WorksCard({ isBigCard, projectImage, projectName, projectDescription  }) {
  return (
    <div className={`work-card ${isBigCard ? 'big-card':''}`}>
      <div className="text">{projectName}</div>
      <img src={projectImage} className={isBigCard ? 'big-img':''}/>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint aspernatur recusandae, molestiae dignissimos dicta necessitatibus laudantium voluptatibus sunt? Deserunt.
        </p>
      </div>
    </div>
  );
}

export default WorksCard;

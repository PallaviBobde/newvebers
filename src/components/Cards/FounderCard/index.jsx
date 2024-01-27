import React from "react";
import './style.css';

function FoundersCard({name,designation,image,description,index}) {
  const myString = description;
  const htmlObject = { __html: myString };

  return (
    <div className="founder-card bg-[#82828520] p-8 rounded-[10px] ">
        {(index === 0 || index===2) && <div className="img-container">
            <img src={image} className="img"/>
          </div>
        }
       <div className="text-container">
        <h1 className="h1">{name}</h1>
        <h2>{designation}</h2>
        <p className="about text-[#ffffffa1]" dangerouslySetInnerHTML={htmlObject}>
        </p>
        {/* links */}
       </div>
       {index === 1 && <div className="img-container">
            <img src={image} className="img"/>
          </div>
        }
    </div>
  );
}

export default FoundersCard;

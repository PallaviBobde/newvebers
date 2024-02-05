import React from "react";
import './style.css';

function FoundersCard({name,designation,image,description,index}) {
  const myString = description;
  const htmlObject = { __html: myString };

  return (
    <div className="founder-card  rounded-[10px] normal-text">
        {(index === 0 || index===2) && <div className="img-container">
            <img src={image} className="img"/>
          </div>
        }
       <div className="text-container">
        <h1 className="h1">{name}</h1>
        <h2 style={{fontSize:'14px'}}>{designation}</h2>
        <p className="about text-[#ffffffa1] hideOnMobile" dangerouslySetInnerHTML={htmlObject}>
        </p>
       </div>
       {index === 1 && <div className="img-container">
            <img src={image} className="img"/>
          </div>
        }
    </div>
  );
}

export default FoundersCard;

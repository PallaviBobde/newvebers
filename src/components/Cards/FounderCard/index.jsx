import React from "react";
import './style.css';

function FoundersCard({name,designation,image,description,index}) {
  const myString = description;
  const htmlObject = { __html: myString };

  return (
    <div className="founder-card">
        {index === 0 && <div className="img-container">
            <img src={image}/>
            <div className="box"/>
          </div>
        }
       <div>
        <h1 className="h1">{name}</h1>
        <h2>{designation}</h2>
        <p className="about" dangerouslySetInnerHTML={htmlObject}>
        </p>
        {/* links */}
       </div>
       {index === 1 && <div className="img-container">
            <img src={image}/>
            <div className="box"/>
          </div>
        }
    </div>
  );
}

export default FoundersCard;

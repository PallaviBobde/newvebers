import React from "react";
import './style.css';

function FoundersCard({name,image,description,index}) {
    const myString = description;

  // Create an object with a __html property containing your HTML string
  const htmlObject = { __html: myString };

  return (
    <div className="founder-card">
        {index === 0 && <img src={image}/>}
       <div>
        <h2>{name}</h2>
        <p className="about" dangerouslySetInnerHTML={htmlObject}>
        </p>
       </div>
       {index === 1 && <img src={image}/>}
    </div>
  );
}

export default FoundersCard;

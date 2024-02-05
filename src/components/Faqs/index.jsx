import React, { useState } from "react";
import './style.css';
import { faqs, webDevelopmentProjects } from "../../utils/constants";

function FAQs() {
  const [activeIndex,setActiveIndex] = useState(-1);

  return <div className="faqs">
    <h1 className="sub-heading">Frequently asked questions</h1>
    <div className="faq-container normal-text">
      {
        faqs.map((faq,index)=>{
          return <div className={`faq ${index>2 ? 'hideOnMobile' :''}`} onClick={()=>setActiveIndex(index===activeIndex ? -1 : index)}>
            <div className={`question ${index===activeIndex ? 'active-question' :''}`}>
              <p>
                {faq.question}
              </p>
              <p className="plus" >{index===activeIndex ? '-' : '+' }</p>
            </div>
            <div className={`answer ${index===activeIndex ? 'active-answer' :''}`} >{faq.answer}</div>
          </div>
        })
      }
    </div>
  </div>;
}

export default FAQs;

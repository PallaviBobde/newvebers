import React, { useState } from "react";
import "./style.css";
import { portfolioImages } from "../../utils/constants";
import MobileSlider from "../MobileSlider";
import { Link } from "react-router-dom";

function PortfolioSection({ isHomepage = false }) {
  const [activeImageIndex, setActiveImageIndex] = useState(-1);
  const imagesArray = isHomepage
    ? portfolioImages.slice(0, 6)
    : portfolioImages;
  return (
    <div className="portfolio">
      <h1 className="sub-heading">Our Portfolio</h1>
      <div className="portfolio-container">
        {imagesArray.map((imgUrl, index) => {
          return (
            <div
              className="portfolio-inner-container"
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={imgUrl} />
            </div>
          );
        })}
      </div>
      {isHomepage && (
        <Link to={"/portfolio"} className="more-btn">
          View More
        </Link>
      )}
      {activeImageIndex !== -1 && (
        <div className="modal">
          <div className="img-div">
            {/* <div className="view-btn">View</div> */}
            <div className="cross" onClick={() => setActiveImageIndex(-1)}>
              <i class="fa fa-xmark"></i>
            </div>

            <img src={imagesArray[activeImageIndex]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioSection;

import React, { useState } from "react";
import "./style.css";
import heart from "../../assets/images/heart.png";
import ribbon from "../../assets/images/ribbon.png";
import { Link } from "react-router-dom";
import { phoneNumber } from "../../utils/constants";

function TopBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const hideBanner = () => {
    setShowBanner(!showBanner);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent('I want a Valentine Diary Website')}`;

  return showBanner ? (
    <div className="top-banner">
      <img src={heart} className="heart" />
      <img src={heart} className="heart2" />
      <img src={heart} className="heart3" />
      <img src={ribbon} className="ribbon" />
      <img src={ribbon} className="ribbon1" />
      <img src={ribbon} className="ribbon2" />
      <img src={ribbon} className="ribbon4" />

      <div className="text">
        <div className="onlytext">
          <h2>Ready for Love adventure?</h2>
          <p>
            This Valentines gift your partner a journey through your Memories!
            <br /> A <span className="highlight">Digital Gift</span> in the form
            of a <span className="highlight">Website!</span>
          </p>
        </div>
        <div className="btns-container">
          <p className="showon850">
            A <span className="highlight">Digital Gift</span> in the form of a{" "}
            <span className="highlight">Website!</span>
          </p>
          <p>Get a gift for your loved ones!</p>
          <div className="btns">
            <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="blue">WhatsApp Us</Link>
            <Link to="/valentinediary" className="whiteborder">
              Valentine Diary
            </Link>
          </div>
        </div>
      </div>
      <div onClick={hideBanner} className="fa-times-container">
      <i class="fas fa-times" ></i>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default TopBanner;

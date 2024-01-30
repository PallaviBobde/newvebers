import React from "react";
import Menu from "../../components/Menu";
import "./style.css";
import heart from "../../assets/images/heart.png";
import ribbon from "../../assets/images/ribbon.png";
import MobileSlider from "../../components/MobileSlider";
import { Link } from "react-router-dom";
import { phoneNumber } from "../../utils/constants";

function ValentineDiary() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    "I want a Valentine Diary Website"
  )}`;
  return (
    <div className="valentine-diary">
      {/* <Menu/> */}
      {/* <!-- Home Section --> */}
      <section id="home">
        <h1>
          Welcome to <br />
          <span className="bold">Valentine Diary</span>
        </h1>
        <p>A <span className="highlight">Digital Gift</span> in the form of a{" "}
            <span className="highlight">Website!</span></p>
        <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Get Started
        </Link>
      </section>

      {/* <!-- About Section --> */}
      <section id="about">
        <div className="container">
          <h2>
            About <br />
            Valentine Diary
          </h2>
          <p>
            Valentine Diary is your go-to platform to express love and create
            personalized digital memories. We believe in celebrating love in a
            unique and thoughtful way.
          </p>
        </div>
        <div className="container">
          <h2>Key Features:</h2>
          <div className="inner-container">
            <div>
              <p className="emoji">🎨</p>
              <p className="bold">Customizable Themes:</p>
              <p>Tailor the look to your style.</p>
            </div>
            <div>
              <p className="emoji">🌐</p>
              <p className="bold">Personalized Domain:</p>
              <p>Choose a domain reflecting your love story.</p>
            </div>
            <div>
              <p className="emoji">📷</p>
              <p className="bold">Photo Gallery & Love Notes:</p>
              <p>Showcase special moments with heartfelt messages.</p>
            </div>
            <div>
              <p className="emoji">⏳</p>
              <p className="bold">Interactive Timeline:</p>
              <p>Navigate through the story of your love with each click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section id="features">
        <div className="container">
          <h2>Why Valentine Diary?</h2>
          <p>
            Valentine Diary is not just a gift; it's a digital journey crafted
            for your love story. Unlike traditional presents, it goes beyond
            material gifts, offering a personalized touch that resonates on a
            deeper, more sentimental level. Dive into a unique celebration of
            shared moments and achievements through interactive elements and
            curated collages.
          </p>
        </div>
        <div className="container">
          <h2>Valentine Diary Website</h2>
          <p>
            Unveil your love story on our digital canvas. Just like the perfect
            webpage, it captures all the elements to make your heart click—a
            lasting tribute to your relationship.
            <br />
            <br />
            Ready to turn the pages of your love story online? Explore Valentine
            Diary today.
          </p>
        </div>
      </section>

      {/* <!-- Plans Section --> */}
      <section id="plans">
        <h2>Plans</h2>
        <p>
          Choose the perfect plan for your digital Valentine's gift and make
          this day unforgettable. Let the gifting begin!
        </p>
        <div className="plans-container">
          <div className="plan-div">
            <h3>Silver 💖</h3>
            <div>
              <p>₹399</p>
              <br/>
              <br/>
              <p>
                <b>Total Photos:</b> 15 or lesser
              </p>
              <p>
                <b>Total Videos:</b> 2 or lesser
              </p>
              <p>
                <b>Supported Devices:</b> Only Phones
              </p>
              <p>Non Customizable</p>
              <p>
                <b>Active:</b> For 4 months
              </p>
              <p>
                <b>Love Story Timeline:</b> Not Included
              </p>
              <br />
              <br />
              <br />
              <br/>
              <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Buy Now
              </Link>
              {/*  */}
            </div>
          </div>
          <div className="plan-div">
            <h3>Gold 🌟</h3>
            <div>
              <p>₹1199</p>
              <br/>
              <p>Choose Colors</p>
              <p>
                <b>Total Photos:</b> 40 or lesser
              </p>
              <p>
                <b>Total Videos:</b> 5 or lesser
              </p>
              <p>
                <b>Supported Devices:</b> Phone, Desktops
              </p>
              <p>Semi-Customizable</p>
              <p>
                <b>Active:</b> For 7 months
              </p>
              <p>
                <b>Additionals:</b>
              </p>
              <p>🎶 Couple Playlist</p>
              <br />
              <br />
              <br/>
              <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Buy Now
              </Link>
            </div>
          </div>
          <div className="plan-div">
            <h3>Platinum ✨</h3>
            <div>
              <p>₹2999</p>
              <p>Multilingual</p>
              <p>Choose Colors</p>
              <p>
                <b>Total Photos:</b> 100 or lesser
              </p>
              <p>
                <b>Total Videos:</b> 10 or lesser
              </p>
              <p>
                <b>Supported Devices:</b> All devices
              </p>
              <p>Fully Customizable</p>
              <p>
                <b>Active:</b> For 12 months
              </p>
              <p>
                <b>Additionals:</b>
              </p>
              <p>🎶 Couple Playlist</p>
              <p>⌛ Love Story Timeline</p>
              <p>✉️ Love Week Custom Emails</p>
              <br/>
              <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Us Section --> */}
      <section id="contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            For the best offers and to discover more about this digital
            Valentine's gift - Valentine Diary, don't hesitate to get in touch
            with us.
          </p>
          <p>
            Whatsapp US:  <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                +91 8319699485
              </Link>
          </p>
          <div className="inner-container">
            <div>
              <p className="emoji">📞</p>
              <p className="bold">Call :</p>
              <p>+91 8319699485</p>
            </div>
            <div>
              <p className="emoji">📧</p>
              <p className="bold">Mail : </p>
              <p>veberszone@gmail.com</p>
            </div>
            <div>
              <p className="emoji">📱</p>
              <p className="bold">Insta DM :</p>
              <p>@Veberszone</p>
            </div>
          </div>
        </div>

        {/* <!-- Include Contact Information here --> */}
      </section>

      {/* images */}
      <img src={heart} className="heart" />
      <img src={heart} className="heart1" />
      <img src={heart} className="heart2" />
      <img src={heart} className="heart3" />
      <img src={heart} className="heart4" />
      <img src={heart} className="heart5" />
      <img src={heart} className="heart6" />
      <img src={ribbon} className="ribbon" />
      <img src={ribbon} className="ribbon1" />
      <img src={ribbon} className="ribbon2" />
      <img src={ribbon} className="ribbon4" />
      <p className="go-to-veberszone">
        <Link to="/">
          Go to
          <br />
          VebersZone
        </Link>
      </p>

      {/* <!-- Footer Section --> */}
      <footer>
        <p>&copy; 2024 Valentine Diary - by Veberszone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ValentineDiary;

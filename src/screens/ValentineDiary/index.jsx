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
      {/* <!-- Home Section --> */}
      <section id="home">
        <h1>
          Welcome to <br />
          <span className="bold">Valentine Diary</span>
        </h1>
        <p>
          A <span className="highlight">Digital Gift</span> in the form of a{" "}
          <span className="highlight">Website!</span>
        </p>
      </section>

      {/* <!-- About Section --> */}
      <section id="about">
        <div className="">
          <h2>
            About
            Valentine Diary
          </h2>
          <p>
            Valentine Diary is like a special digital gift you can give your
            loved one on Valentine's Day.
            <br /> It's a website where you can share and relive all your
            favorite memories together. It's not just a present; it's a way to
            celebrate your unique love story in a fun and personalized way.
            <br /> Create your Valentine Diary, and let the love unfold online
          </p>
        </div>
        <img src="https://cdn.pixabay.com/photo/2018/06/23/20/07/couple-3493435_1280.png" />
      </section>

      {/* <!-- Features Section --> */}
      <section id="features">
        <img src='https://res.cloudinary.com/dlksyxvtd/image/upload/v1706679743/you-removebg-preview_2_bf2ucy.png'/>
        <div className="">
          <h2>Why Valentine Diary?</h2>
          <p>
            🌟 Capture moments, cherish memories.
            <br />
            🎨 Customize with themes that reflect you.
            <br />
            💖 Express love with personalized notes.
            <br />
            📆 Relive the romance with an interactive timeline.
            <br />
            📷 Showcase favorite photos in a beautiful gallery.
            <br />
            ⏰ Countdown to special moments.
            <br />
            🌐 Get your unique web space with a custom domain.
            <br />
          </p>
        </div>
      </section>

      {/* <!-- Plans Section --> */}
      <section id="plans">
        <h2>Plans</h2>
        <p className="subtitle">
          Choose the perfect plan for your digital Valentine's gift and make
          this day unforgettable. Let the gifting begin!
        </p>
        <div className="plans-container">
          <div className="plan-div">
            <h3>Silver 💖</h3>
            <div>
              <p className="price">₹399</p>
              <p>❌ Multilingual</p>
              <p>❌ Choose Colors</p>
              <p>
                <b>Total Photos:</b> 15 or lesser
              </p>
              <p>
                <b>Total Videos:</b> 2 or lesser
              </p>
              <p>
                <b>Supported Devices:</b> Only Phones
              </p>
              <p>
                <b>Theme: </b>Non Customizable
              </p>
              <p>
                <b>Active:</b> For 4 months
              </p>
              <p>
                <b>Additionals:</b>
              </p>
              <p>❌ Couple Playlist</p>
              <p>❌ Love Story Timeline</p>
              <p>❌ Love Week Custom Emails</p>
              <br />
              <Link
                to={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="buy"
              >
                Get Silver <i class="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="plan-div">
            <h3>Gold 🌟</h3>
            <div>
              <p className="price">₹1199</p>
              <p>❌ Multilingual</p>
              <p>✅ Choose Colors</p>
              <p>
                <b>Total Photos:</b> 40 or lesser
              </p>
              <p>
                <b>Total Videos:</b> 5 or lesser
              </p>
              <p>
                <b>Supported Devices:</b> Phone, Desktops
              </p>
              <p>
                <b>Theme: </b>Semi-Customizable
              </p>
              <p>
                <b>Active:</b> For 7 months
              </p>
              <p>
                <b>Additionals:</b>
              </p>
              <p>✅ Couple Playlist</p>
              <p>❌ Love Story Timeline</p>
              <p>❌ Love Week Custom Emails</p>
              <br />
              <Link
                to={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="buy"
              >
                Get Gold <i class="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="plan-div">
            <h3>Platinum ✨</h3>
            <div>
              <p className="price">₹2999</p>
              <p>✅ Multilingual</p>
              <p>✅ Choose Colors</p>
              <p>
                <b>Total Photos:</b> 100 or lesser
              </p>
              <p>
                <b>Total Videos:</b> 10 or lesser
              </p>
              <p>
                <b>Supported Devices:</b> All devices
              </p>
              <p>
                <b>Theme: </b>Fully Customizable
              </p>
              <p>
                <b>Active:</b> For 12 months
              </p>
              <p>
                <b>Additionals:</b>
              </p>
              <p>✅ Couple Playlist</p>
              <p>✅ Love Story Timeline</p>
              <p>✅ Love Week Custom Emails</p>
              <br />
              <Link
                to={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="buy"
              >
                Get Platinum <i class="fas fa-chevron-right"></i>
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
          <div className="inner-container">
            <div>
              <p className="emoji hideOnMobile">📱</p>
              <p className="bold">Whatsapp : </p>
              <Link
                to={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact_link"
              >
                +91 8319699485
              </Link>
            </div>
            <div>
              <p className="emoji hideOnMobile">📞</p>
              <p className="bold">Call : </p>
              <Link
                to="tel:+918319699485"
                className="contact_link"
              >
                +91 8319699485
              </Link>
            </div>
            <div>
              <p className="emoji hideOnMobile">📧</p>
              <p className="bold">Mail : </p>
              <Link
                to="mailto:veberszone@gmail.com"
                className="contact_link"
              >veberszone@gmail.com</Link>
            </div>
            <div>
              <p className="emoji hideOnMobile">📱</p>
              <p className="bold">Insta DM : </p>
              <Link
                to="https://www.instagram.com/veberszone"
                className="contact_link"
              >@Veberszone</Link>
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
        <Link to="/" >
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

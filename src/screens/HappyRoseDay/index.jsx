import { useParams } from "react-router-dom";
import "./style.css";

function HappyRoseDay() {
  const { firstName, secondName } = useParams();

  return (
    <div className="happyroseday">
      <img
        src="https://cdn.pixabay.com/photo/2020/06/23/07/00/flowers-5331604_1280.png"
        className="bigrose"
      />
      <div className="content">
        <h1 className="happytext">Happy Rose Day 🌹</h1>
        <div className="incontent">
          <p className="para">
            Dear {secondName},
            <br />
            Happy Rose Day!
            <br /> <br />
            I wanted to send you this letter to let you know how much you mean
            to me. You bring so much happiness and love into my life, just like
            a beautiful rose brightens up a room.
            <br /> <br />
            Your kindness and support have made a big difference in my life, and
            I am grateful for you every day. So, on this special day, I want to
            say thank you for being amazing.
            <br /> <br />
            Please accept this virtual rose as a token of my affection for you.
            I hope it brings a smile to your face and reminds you of how much
            you are loved.
            <br /> <br />
            With love,
            <br />
            From - {firstName}
          </p>
          <img src="https://cdn.pixabay.com/photo/2020/06/23/07/00/flowers-5331604_1280.png" className="smallrose"/>
        </div>
      </div>
    </div>
  );
}

export default HappyRoseDay;

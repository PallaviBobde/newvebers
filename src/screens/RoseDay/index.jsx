import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const RoseDay = () => {
  const [names, setNames] = useState({
    yourname: "",
    theirname: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(names);
  };

  return (
    <div className="roseday">
      <div>
        <img src="https://cdn.pixabay.com/photo/2020/06/23/07/00/flowers-5331604_1280.png" />
      </div>
      <h1>Say happy rose day!</h1>
      {!submitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <p>What's your name?</p>
          <input
            type="text"
            name="yourname"
            value={names.yourname}
            onChange={handleChange}
            placeholder="Your name here"
          />
          <p>What's your loved ones name?</p>
          <input
            type="text"
            name="theirname"
            value={names.theirname}
            onChange={handleChange}
            placeholder="Their name here"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
         <Link
          to={`/happyroseday/${names.yourname}/${names.theirname}`}
          className="menubtn"
        >
            Visit Link
        </Link>
        <p>Copy and send below link:</p>
        <p>{`www.veberszone.com/happyroseday/${names.yourname}/${names.theirname}`}</p>
        </>
       
      )}
    </div>
  );
};

export default RoseDay;

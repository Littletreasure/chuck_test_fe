import React from "react";
import "../styles/Joke.css";

const Joke = props => {
  const onClick = () => {
    props.handleHomeClick();
  };
  return (
    <div className="Joke">
      <p>{props.joke}</p>
      <button className="button" onClick={onClick}>
        Home
      </button>
    </div>
  );
};

export default Joke;

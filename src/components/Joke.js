import React from "react";
import "../styles/Joke.css";

const Joke = props => {
  return (
    <header>
      <h1 className="Joke">{props.joke}</h1>
    </header>
  );
};

export default Joke;

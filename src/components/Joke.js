import React, { Component } from "react";
import "../styles/Joke.css";

class Joke extends Component {
  onClick = () => {
    this.props.handleHomeClick();
  };
  render() {
    return (
      <div className="Joke">
        <p>{this.props.joke}</p>

        <button className="button" onClick={this.onClick}>
          Home
        </button>
      </div>
    );
  }
}

export default Joke;

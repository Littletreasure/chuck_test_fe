import React, { Component } from "react";
import "../styles/Joke.css";

class Joke extends Component {
  onClick = () => {
    this.props.handleHomeClick();
  };
  render() {
    return (
      <div>
        <header>
          <h1 className="Joke">{this.props.joke}</h1>
        </header>
        <button onClick={this.onClick}>Home</button>
      </div>
    );
  }
}

export default Joke;

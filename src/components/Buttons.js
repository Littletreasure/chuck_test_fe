import React, { Component } from "react";
import "../styles/Buttons.css";

class Buttons extends Component {
  state = {
    modalVisible: false
  };
  render() {
    return (
      <div className="Main">
        <div className="Buttons">
          <p>Click here for a random joke</p>
          <button className="Button" type="submit">
            Random
          </button>
        </div>
        <div className="Buttons">
          <p>Click here to customize the name</p>
          <button className="Button" type="submit">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;

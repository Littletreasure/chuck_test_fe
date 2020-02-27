import React, { Component } from "react";
import "../styles/Buttons.css";
import Search from "./Search";

class Buttons extends Component {
  state = {
    clicked: false
  };

  onClickRand = event => {
    this.props.handleClick();
  };

  onClickSearch = event => {
    this.setState({ clicked: true });
  };
  render() {
    return (
      <div className="Main">
        {!this.state.clicked ? (
          <div>
            <div className="Buttons">
              <p>Click here for a random joke</p>
              <button
                className="Button"
                type="submit"
                onClick={this.onClickRand}
              >
                Random
              </button>
            </div>
            <div className="Buttons">
              <p>Click here to customize the name</p>
              <button
                className="Button"
                type="submit"
                onClick={this.onClickSearch}
              >
                Search
              </button>
            </div>
          </div>
        ) : (
          <Search handleSearchClick={this.props.handleSearchClick} />
        )}
      </div>
    );
  }
}

export default Buttons;

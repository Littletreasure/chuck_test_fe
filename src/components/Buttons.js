import React, { Component } from "react";
import "../styles/Buttons.css";
import Search from "./Search";

class Buttons extends Component {
  state = {
    clicked: false
  };

  onClickRand = () => {
    this.props.handleClick();
  };

  onClickSearch = () => {
    this.setState({ clicked: true });
  };
  onHomeClick = () => {
    this.setState({ clicked: false });
    this.props.handleHomeClick();
  };
  onClickList = () => {
    this.props.handleListClick();
  };
  render() {
    return (
      <div className="Main">
        {!this.state.clicked ? (
          <div className="ButtonList">
            <div className="Buttons">
              <p className="text">Click here for a random joke</p>
              <button
                className="Button"
                type="submit"
                onClick={this.onClickRand}
              >
                Random
              </button>
            </div>
            <div className="Buttons">
              <p className="text">Click here to customize the name</p>
              <button
                className="Button"
                type="submit"
                onClick={this.onClickSearch}
              >
                Search
              </button>
            </div>
            <div className="Buttons">
              <p className="text">Never-ending Joke List</p>
              <button
                className="Button"
                type="submit"
                onClick={this.onClickList}
              >
                List
              </button>
            </div>
          </div>
        ) : (
          <Search
            handleSearchClick={this.props.handleSearchClick}
            onHomeClick={this.onHomeClick}
          />
        )}
      </div>
    );
  }
}

export default Buttons;

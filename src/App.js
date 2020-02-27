import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Joke from "./components/Joke";
import * as api from "./utils/api";

class App extends Component {
  state = {
    clicked: false,
    joke: null
  };
  handleClick = () => {
    api.getJoke().then(joke => {
      this.setState({ joke: joke, clicked: true });
    });
  };
  handleSearchClick = (firstName, lastName) => {
    api.getJoke(firstName, lastName).then(joke => {
      this.setState({ joke: joke, clicked: true });
    });
  };
  handleHomeClick = () => {
    this.setState({ clicked: false, joke: null });
  };
  render() {
    const { clicked, joke } = this.state;
    return (
      <div className="App">
        <Header />
        {clicked ? (
          <Joke joke={joke} handleHomeClick={this.handleHomeClick} />
        ) : (
          <Buttons
            handleClick={this.handleClick}
            handleSearchClick={this.handleSearchClick}
            handleHomeClick={this.handleHomeClick}
          />
        )}
      </div>
    );
  }
}

export default App;

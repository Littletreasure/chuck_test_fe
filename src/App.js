import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Joke from "./components/Joke";
import * as api from "./utils/api";
import chuck from "./chuck-norris.jpg";

class App extends Component {
  state = {
    clicked: false,
    joke: null,
    jokes: [],
    list: null
  };
  handleClick = () => {
    api.getJoke().then(joke => {
      this.setState({ joke: joke, clicked: true });
    });
  };
  handleSearchClick = (firstName, lastName) => {
    api.getJoke(firstName, lastName).then(joke => {
      this.setState({ joke: joke, clicked: true, list: false });
    });
  };
  handleHomeClick = () => {
    this.setState({ clicked: false, joke: null, jokes: [], list: null });
  };
  handleListClick = () => {
    api.getJokeList().then(jokes => {
      this.setState({ jokes: jokes, clicked: true, list: true });
    });
  };
  render() {
    const { clicked, joke, jokes, list } = this.state;
    return (
      <div className="App">
        <Header />
        {clicked ? (
          <Joke
            joke={joke}
            handleHomeClick={this.handleHomeClick}
            jokes={jokes}
            list={list}
          />
        ) : (
          <Buttons
            handleClick={this.handleClick}
            handleSearchClick={this.handleSearchClick}
            handleHomeClick={this.handleHomeClick}
            handleListClick={this.handleListClick}
          />
        )}
        {list ? null : (
          <div className="Image">
            <img src={chuck} alt="chuck" width="180" />
          </div>
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Joke from "./components/Joke";
import JokeList from "./components/JokeList";
import * as api from "./utils/api";
import chuck from "./chuck-norris.jpg";

class App extends Component {
  state = {
    singleJoke: false,
    joke: null,
    jokeList: false
  };
  handleClick = () => {
    api.getJoke().then(joke => {
      this.setState({ joke: joke, singleJoke: true });
    });
  };
  handleSearchClick = (firstName, lastName) => {
    api.getJoke(firstName, lastName).then(joke => {
      this.setState({ joke: joke, singleJoke: true, jokeList: false });
    });
  };
  handleHomeClick = () => {
    this.setState({ singleJoke: false, joke: null, jokeList: false });
  };
  handleListClick = () => {
    this.setState({ singleJoke: false, jokeList: true });
  };
  render() {
    const { singleJoke, joke, jokeList } = this.state;
    return (
      <div className="App">
        <Header />
        {singleJoke ? (
          <Joke joke={joke} handleHomeClick={this.handleHomeClick} />
        ) : jokeList ? (
          <JokeList handleHomeClick={this.handleHomeClick} />
        ) : (
          <Buttons
            handleClick={this.handleClick}
            handleSearchClick={this.handleSearchClick}
            handleHomeClick={this.handleHomeClick}
            handleListClick={this.handleListClick}
          />
        )}
        {jokeList ? null : (
          <div className="ImageDiv">
            <img className="Image" src={chuck} alt="chuck" width="180" />
          </div>
        )}
      </div>
    );
  }
}

export default App;

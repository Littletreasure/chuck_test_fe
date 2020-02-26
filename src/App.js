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

  render() {
    const { clicked, joke } = this.state;
    return (
      <div className="App">
        <Header />
        {clicked ? (
          <Joke joke={joke} />
        ) : (
          <Buttons handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default App;

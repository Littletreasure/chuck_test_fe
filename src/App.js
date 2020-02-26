import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";

class App extends Component {
  state = {
    clicked: false,
    joke: null
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Buttons />
      </div>
    );
  }
}

export default App;

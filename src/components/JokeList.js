import React, { Component } from "react";
import "../styles/JokeList.css";
import * as api from "../utils/api";

class JokeList extends Component {
  state = {
    jokes: [],
    isLoading: false
  };
  onHomeClick = () => {
    this.props.handleHomeClick();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    api.getJokeList().then(jokes => {
      this.setState({ jokes });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = event => {
    const element = event.target.documentElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState({ isLoading: true }, () => {
        api.getJokeList().then(jokes => {
          this.setState({
            jokes: [...this.state.jokes, ...jokes],
            isLoading: false
          });
        });
      });
    }
  };
  render() {
    const { jokes, isLoading } = this.state;
    return (
      <div className="Jokes" onScroll={this.handleScroll}>
        <div>
          <button className="HomeButton" onClick={this.onHomeClick}>
            Home
          </button>
        </div>
        {jokes.map(joke => {
          return (
            <p className="joke" key={Math.random()}>
              {joke.joke}
            </p>
          );
        })}
        {isLoading && <div className="loading">Loading...</div>}
      </div>
    );
  }
}

export default JokeList;

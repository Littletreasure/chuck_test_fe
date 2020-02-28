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
  onMoreClick = () => {
    this.setState({ isLoading: true }, () => {
      api.getJokeList().then(jokes => {
        this.setState({
          jokes: [...this.state.jokes, ...jokes],
          isLoading: false
        });
      });
    });
  };
  componentDidMount() {
    api.getJokeList().then(jokes => {
      console.log(jokes);
      this.setState({ jokes: jokes });
    });
  }
  render() {
    const { jokes, isLoading } = this.state;
    return (
      <div className="Jokes">
        {jokes.map(joke => {
          return <p key={joke.id}>- {joke.joke}</p>;
        })}
        {isLoading && <div>Loading...</div>}
        <div>
          <button onClick={this.onMoreClick}>More</button>
          <button onClick={this.onHomeClick}>Home</button>
        </div>
      </div>
    );
  }
}

export default JokeList;

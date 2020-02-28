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
  // onMoreClick = () => {
  //   this.setState({ isLoading: true }, () => {
  //     api.getJokeList().then(jokes => {
  //       this.setState({
  //         jokes: [...this.state.jokes, ...jokes],
  //         isLoading: false
  //       });
  //     });
  //   });
  // };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    api.getJokeList().then(jokes => {
      this.setState({ jokes: jokes });
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
        <div className="buttons">
          <button onClick={this.onHomeClick}>Home</button>
        </div>
        {jokes.map(joke => {
          return <p key={joke.id}>- {joke.joke}</p>;
        })}
        {isLoading && <div>Loading...</div>}
        <div className="buttons">
          <button onClick={this.onHomeClick}>Home</button>
        </div>
      </div>
    );
  }
}

export default JokeList;

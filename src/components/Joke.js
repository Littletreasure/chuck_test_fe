import React, { Component } from "react";
import "../styles/Joke.css";

class Joke extends Component {
  onClick = () => {
    this.props.handleHomeClick();
  };
  render() {
    const { joke, jokes, list } = this.props;
    return (
      <div className="Joke">
        {!list ? (
          <p>{joke}</p>
        ) : (
          <div>
            {jokes.map(joke => {
              return <p key={joke.id}>- {joke.joke}</p>;
            })}
          </div>
        )}

        <button onClick={this.onClick}>Home</button>
      </div>
    );
  }
}

export default Joke;

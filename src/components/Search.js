import React, { Component } from "react";
import "../styles/Search.css";

class Search extends Component {
  state = {
    firstName: "",
    lastName: "",
    error: false
  };
  handleChange = event => {
    const { id, value } = event.target;
    if (id === "first") {
      this.setState({ firstName: value, error: false });
    } else {
      this.setState({ lastName: value, error: false });
    }
  };

  handleSubmit = event => {
    const { firstName, lastName } = this.state;
    event.preventDefault();
    if (firstName.length === 0 || lastName.length === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      this.props.handleSearchClick(firstName, lastName);
    }
  };
  onHomeClick = () => {
    this.setState({ firstName: "", lastName: "", error: false });
    this.props.onHomeClick();
  };
  render() {
    const { firstName, lastName, error } = this.state;
    return (
      <div>
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            <label className="label">
              First Name:
              <input
                type="text"
                id="first"
                value={firstName}
                onChange={this.handleChange}
              ></input>
            </label>
            <label className="label">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={this.handleChange}
              ></input>
            </label>
            <button className="button" type="submit">
              Search
            </button>
          </form>
          {error ? <p>Please complete both fields</p> : null}
        </div>
        <div>
          <button className="Home" onClick={this.onHomeClick}>
            Home
          </button>
        </div>
      </div>
    );
  }
}

export default Search;

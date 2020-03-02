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
    const regex = /^[A-Za-z]+$/;
    event.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      !regex.test(firstName) ||
      !regex.test(lastName)
    ) {
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
  onResetClick = () => {
    this.setState({ firstName: "", lastName: "", error: false });
  };
  render() {
    const { firstName, lastName, error } = this.state;
    return (
      <div>
        <div className="FormMain">
          <form onSubmit={this.handleSubmit} className="form">
            <label className="label">
              First Name:
              <input
                type="text"
                id="first"
                value={firstName}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">
              Last Name:
              <input
                type="text"
                id="last"
                value={lastName}
                onChange={this.handleChange}
              />
            </label>
            <button className="SearchButton" type="submit">
              Search
            </button>
          </form>
        </div>

        <div>
          <button className="HomeButton" onClick={this.onResetClick}>
            Reset
          </button>
          <button className="HomeButton" onClick={this.onHomeClick}>
            Home
          </button>
        </div>
        <div>
          {error ? (
            <p className="error">
              Both fields must be completed, with letters only
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Search;

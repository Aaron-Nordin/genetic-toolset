import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <hr />
        Login:
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
          <button>Go!</button>
        </form>
        <div>-or-</div>
        <Link to="/registration">
          <button>Register!</button>
        </Link>
        <hr />
      </div>
    );
  }
}

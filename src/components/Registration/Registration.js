import React, { Component } from "react";

export default class Registration extends Component {
  state = {
      username: "",
      password: "",
      email: "",
      profilePic: ""
  }
  
    handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <hr />
        Registration
        <hr />
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
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="url"
            name="profilePic"
            placeholder="Profile Pic URL"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

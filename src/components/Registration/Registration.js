import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";

class Registration extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    userImage: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  register = () => {
    const { username, password, email, userImage } = this.state;
    axios
      .post("/auth/register", { username, password, email, userImage })
      .then(res => {
        this.props.setUser({ username, email, userImage });
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        alert("Email is already in use");
      });
  };

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
            name="userImage"
            placeholder="Profile Pic URL"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="file"
            name="userImage"
            accept="image/*"
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" onClick={this.register} />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Registration);

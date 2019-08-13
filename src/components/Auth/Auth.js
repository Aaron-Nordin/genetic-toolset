import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        const { username, email, user_image: userImage } = res.data.user;
        this.props.setUser({ username, email, userImage });
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        alert("Try again");
      });
  };

  render() {
    return (
      <div>
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
          <button onClick={this.login}>Login</button>
        </form>
        <div>- or -</div>
        <Link to="/registration">
          <button>Register</button>
        </Link>
        <hr />
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Auth);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import "./Auth.css";

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
        const {
          username,
          email,
          user_image: userImage,
          user_id: userId
        } = res.data.user;
        this.props.setUser({ userId, username, email, userImage });
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        alert("Try again");
      });
  };

  // onMouseMoveBackground = () => {
  //   const loginRegister = document.getElementById("auth-homepage-pop-in");
  //   if (loginRegister.classList.contains("hide")) {
  //     loginRegister.classList.remove("hide");
  //   } else {
  //     loginRegister.classList.add("hide");
  //   }
  // };
  // onMouseMove={this.onMouseMoveBackground}
  // hide

  render() {
    return (
      <div
        style={{
          maxWidth: "100vw",
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          overflowY: "hidden"
        }}
      >
        <video autoPlay muted loop id="DNA-vid">
          <source src="http://localhost:5555/static/DNA.mp4" type="video/mp4" />
        </video>
        <div className="auth-homepage" id="auth-homepage-pop-in">
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
            <Link to="/registration" className="hidden-a-tag">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Auth);

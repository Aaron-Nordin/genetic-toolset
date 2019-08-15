import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import { Element, scroller } from "react-scroll";
import Registration from "../Registration/Registration";
import GeneLib from "../GeneLib/GeneLib";
import Nav from "../Nav/Nav";
import "./Auth.css";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    register: false,
    loggedIn: false
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login = async () => {
    const { username, password } = this.state;
    this.setState({ loggedIn: true });
    await axios
      .post("/auth/login", { username, password })
      .then(res => {
        const {
          username,
          email,
          user_image: userImage,
          user_id: userId
        } = res.data.user;
        this.props.setUser({ userId, username, email, userImage });
      })
      .catch(() => {
        alert("Try again");
      });

    scroller.scrollTo("Gene-Lib-Ele", {
      duration: 1500,
      delay: 150,
      smooth: true,
      offset: -25
    });
  };

  handleRegButton = () => {
    this.setState({ register: true });
    scroller.scrollTo("Registration-Ele", {
      duration: 1500,
      delay: 150,
      smooth: true
      // offset: 10
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
    console.log(this.props)
    return (
      <div className="auth-component">
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
            <source
              src="http://localhost:5555/static/DNA.mp4"
              type="video/mp4"
            />
          </video>
          {!this.props.userId ? (
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
                <button onClick={this.handleRegButton}>Register</button>
              </form>
            </div>
          ) : null}
        </div>
        <div className="registration-component">
          {this.state.register ? (
            <Element name="Registration-Ele">
              <Registration />
            </Element>
          ) : null}
        </div>
        <div className="nav-component">
          {this.props.userId ? <Nav /> : null}
        </div>
        <div className="gene-lib-component">
          {this.props.userId ? (
            <Element name="Gene-Lib-Ele">
              <GeneLib />
            </Element>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const {userId} = reduxState
  return {userId}
}

export default connect(
  mapStateToProps,
  { setUser }
)(Auth);

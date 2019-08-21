import React, { Component } from "react";
import axios from "axios";
import {
  setUser,
  updateBannerHeight,
  updateNavHeight
} from "../../ducks/reducer";
import { connect } from "react-redux";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import Registration from "../Registration/Registration";
import GeneLib from "../GeneLib/GeneLib";
import Nav from "../Nav/Nav";
import "./Auth.css";

const MainContainer = styled.div`
  max-width: 100vw;

`;

class Auth extends Component {
  state = {
    username: "",
    password: "",
    register: false
  };

  containerRef = React.createRef();

  componentDidMount() {
    this.props.updateBannerHeight(this.containerRef.current.clientHeight);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login = async () => {
    const { username, password } = this.state;
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
      offset: -110
    });
  };

  handleRegButton = () => {
    this.setState({ register: true });
    scroller.scrollTo("Registration-Ele", {
      duration: 250,
      delay: 25,
      smooth: true,
      offset: 10
    });
  };

  render() {
    return (
      <MainContainer className="auth-component">
        <div
          className="homepage"
          ref={this.containerRef}
          style={{
            maxWidth: "100vw",
            height: "100vh",
            width: "100%",
            backgroundColor: "black",
            overflowY: "hidden"
          }}
        >
          <video
            autoPlay
            muted
            loop
            id="DNA-vid"
            style={{
              width: "100%",
              margin: 0,
              pading: 0,
              overflowX: "hidden",
              
            }}
          >
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
      </MainContainer>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId } = reduxState;
  return { userId };
}

export default connect(
  mapStateToProps,
  { setUser, updateBannerHeight, updateNavHeight }
)(Auth);

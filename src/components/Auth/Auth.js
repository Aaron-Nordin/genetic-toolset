import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import Registration from "../Registration/Registration";
import GeneLib from "../GeneLib/GeneLib";
import CircleWave from "../d3/CircleWave";
import Nav from "../Nav/Nav";
// import ActiveBackground from "./ActiveBackground";
import "./Auth.css";
import {
  showRegisterCompFn,
  setUser,
  updateBannerHeight,
  updateNavHeight
} from "../../ducks/reducer";
import {
  AboutH5,
  DarkToLightButton,
  Input,
  LoginForm,
  LoginFormContainer,
  TitleH2
} from "./AuthSTYLE.js";

const MainContainer = styled.div`
  max-width: 100vw;
`;

class Auth extends Component {
  state = {
    username: "",
    password: "",
    mouseMove: false,
    mouseTriggered: false,
    showDiv: false,
    contHeight: null,
    contWidth: null
  };

  containerRef = React.createRef();

  componentDidMount() {
    this.props.updateBannerHeight(this.containerRef.current.clientHeight);
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({ contHeight: height, contWidth: width });
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
    this.props.showRegisterCompFn(true);
    scroller.scrollTo("scroll-to-register", {
      duration: 500,
      delay: 150,
      smooth: true,
      offset: 0
    });
  };

  handleMouseMove = e => {
    this.setState({ mouseMove: true });
    // let lastEvent = e;
    if (!this.state.mouseTriggered) {
      this.setState({ mouseTriggered: true });
      setTimeout(() => {
        this.setState({ mouseTriggered: false, mouseMove: false });
      }, 1500);
    }
  };

  handleMouseEnter = e => {
    // let eventClone = Object.assign({}, e);
    // this.setState({ mouseMove: true, mouseTriggered: true });
    this.setState({ showDiv: true });
  };

  handleMouseLeave = e => {
    setTimeout(() => {
      this.setState({ showDiv: false });
    }, 1500);
  };

  render() {
    return (
      <MainContainer className="auth-component">
        <div
          className="homepage"
          id="homepage"
          ref={this.containerRef}
          style={{
            maxWidth: "100vw",
            height: "100vh",
            width: "100%",
            overflowY: "hidden"
          }}
        >
          <div style={{}} >
            <CircleWave
              height={this.state.contHeight}
              width={this.state.contWidth}
            />
          </div>
          {/* <video
            onMouseMove={e => this.handleMouseMove(e)}
            autoPlay
            muted
            loop
            id="DNA-vid"
            style={{
              width: "100%",
              margin: 0,
              pading: 0,
              overflowX: "hidden"
            }}
          >
            <source src="/static/DNA.mp4" type="video/mp4" />
          </video> */}
          {(!this.props.userId && this.state.mouseMove) ||
          (!this.props.userId && this.state.showDiv) ? (
            <LoginFormContainer
              className="auth-homepage"
              id="auth-homepage-pop-in"
              transition={props => props.transition}
            >
              <LoginForm
                onSubmit={e => e.preventDefault()}
                onMouseEnter={e => this.handleMouseEnter(e)}
                onMouseLeave={e => this.handleMouseLeave(e)}
              >
                <TitleH2>GENE TOOLKIT</TitleH2>
                <Input
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Username"
                  onChange={e => this.handleChange(e)}
                />
                <Input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  onChange={e => this.handleChange(e)}
                />
                <DarkToLightButton onClick={this.login}>
                  Login
                </DarkToLightButton>
                <DarkToLightButton onClick={this.handleRegButton}>
                  Register
                </DarkToLightButton>
                <AboutH5>about</AboutH5>
              </LoginForm>
            </LoginFormContainer>
          ) : null}
        </div>
        <div className="registration-component">
          {this.props.showRegisterComp ? (
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
  const { showRegisterComp, userId } = reduxState;
  return { showRegisterComp, userId };
}

export default connect(
  mapStateToProps,
  { showRegisterCompFn, setUser, updateBannerHeight, updateNavHeight }
)(Auth);

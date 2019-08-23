import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "./ducks/reducer";

export class App extends Component {
  componentDidMount() {
    axios.get("/auth/currentuser").then(res => {
      const {
        user_id: userId,
        user_image: userImage,
        username,
        email
      } = res.data;
      this.props.setUser({ userId, userImage, username, email });
    });
  }

  render() {
    return (
      <div className="App" >
        {this.props.location.pathname === "/" ||
        this.props.location.pathname === "/registration" ? null : (
          <Nav />
        )}
        {routes}
        {/* <video
            autoPlay
            muted
            loop
            id="DNA-vid"
            style={{
              width: "100%",
              postition: "absolute",
              top: 0,
              margin: 0,
              pading: 0,
              overflowX: "hidden",
              zIndex: 1
            }}
          >
            <source
              src="http://localhost:5555/static/DNA.mp4"
              type="video/mp4"
            />
          </video> */}
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(withRouter(App));

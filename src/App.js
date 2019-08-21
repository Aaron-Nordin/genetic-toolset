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
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(withRouter(App));

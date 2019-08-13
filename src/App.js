import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === "/" ||
        this.props.location.pathname === "/registration" ? null : (
          <Nav />
        )}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);

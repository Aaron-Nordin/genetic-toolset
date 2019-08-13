import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../ducks/reducer";

class Nav extends Component {
  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.logoutUser();
      console.log(this.props)
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>{this.props.username}</h3>
        <img src={this.props.userImage} alt="profile pic" />
        <button onClick={this.logout}>Logout</button>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { username, userImage } = reduxState;
  return { username, userImage };
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);

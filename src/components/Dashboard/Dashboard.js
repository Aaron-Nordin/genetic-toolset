import React, { Component } from "react";
import { connect } from "react-redux";
import GeneLib from "../GeneLib/GeneLib";

class Dashboard extends Component {

  render() {
    return (
      <div>
        <hr />
        <GeneLib />
        <hr />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { username, userImage } = reduxState;
  return { username, userImage };
}

export default connect(mapStateToProps)(Dashboard);

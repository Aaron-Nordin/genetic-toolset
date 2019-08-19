import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { logoutUser } from "../../ducks/reducer";
import { Navbar, Button } from "react-bootstrap";

//---------------------------STYLE-----------------------------

const ProfilePic = styled.img`
  max-height: 120px;
  max-width: 120px;
`;
const NameIcon = styled.div`
  font-size: 2em;
  padding: 0.5em 0;
  display: flex;
  justify-content: flex-end;
`;
const PicContainer = styled.div`
  width: 100%;
  
`

const navStyle = {
  // display: "flex",
  // alignItems: "center",
  // alignContent: "center",
  // justifyContent: "space-around"
  width: "100%",
  height: "13vh"
};

const rightText = {};

//---------------------------CLASS-----------------------------

class Nav extends Component {
  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <Navbar style={navStyle} variant="dark" bg="dark">
        <Navbar.Brand>Welcome to Gene Toolkit</Navbar.Brand>
        <NameIcon>
          <Navbar.Text style={rightText}>
            Signed in as: <a href="#login">{this.props.username}</a>
          </Navbar.Text>
          <Button variant="light" onClick={this.logout}>
            Logout
          </Button>
        </NameIcon>
        <PicContainer>
          <ProfilePic src={this.props.userImage} alt="profile pic" />
        </PicContainer>
      </Navbar>
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
)(withRouter(Nav));

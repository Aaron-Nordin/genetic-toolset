import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { logoutUser } from "../../ducks/reducer";
import { Navbar, Button } from "react-bootstrap";

//---------------------------STYLE-----------------------------

const ProfilePic = styled.img`
  max-height: 10vh;
  /* max-width: 120px; */
`;
const NameIcon = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: flex-end;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 43vw;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
`;
const PicContainer = styled.div`
margin-right: 0.4em;
`

const navStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-between",
  height: "11vh",
  boxShadow: "5px 5px 10px 5px #111111",
  // zIndex: "1",
};
const logoutButtonStyle = {
  width: "5em"
}

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
        {/* <Navbar.Brand></Navbar.Brand> */}
        <NameIcon>
          <Navbar.Text style={rightText}>
            Signed in as: <a href="#login">{this.props.username}</a>
          </Navbar.Text>
          <Button variant="light" onClick={this.logout} style={logoutButtonStyle}>
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

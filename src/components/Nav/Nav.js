import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { logoutUser, updateNavHeight } from "../../ducks/reducer";
import { Navbar } from "react-bootstrap";

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
`;
export const LogoutButton = styled.button`
  background: #fafafa;
  width: 10vw;
  height: 1.5em;
  /* margin-top: 10px; */
  color: #343a40;
  font-size: 0.75em;
  transition: 0.5s;
  border: 2px solid #343a40;
  :hover {
    background: #343a40;
    color: #fafafa;
    border: 2px solid #fafafa;
  }
`;

// const NavbarCustom = styled.div`

// `

const navStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-between",
  height: "11vh",
  boxShadow: "5px 5px 10px 5px #111111"
  // zIndex: "1",
};

const rightText = {};

//---------------------------CLASS-----------------------------

class Nav extends Component {
  navRef = React.createRef();

  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  componentDidMount() {
    this.props.updateNavHeight(this.navRef.current.clientHeight);
  }

  render() {
    return (
      <div ref={this.navRef}>
        <Navbar style={navStyle} variant="dark" bg="dark">
          {/* <Navbar.Brand></Navbar.Brand> */}
          <NameIcon>
            <Navbar.Text style={rightText}>
              Signed in as: <a href="#login">{this.props.username}</a>
            </Navbar.Text>
            <LogoutButton onClick={this.logout}>Logout</LogoutButton>
          </NameIcon>
          <PicContainer>
            <ProfilePic src={this.props.userImage} alt="profile pic" />
          </PicContainer>
        </Navbar>
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
  { logoutUser, updateNavHeight }
)(withRouter(Nav));

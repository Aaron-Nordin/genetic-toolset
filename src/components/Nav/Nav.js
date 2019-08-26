import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { logoutUser, updateNavHeight } from "../../ducks/reducer";
import {mediaQuerySize} from "../../mediaQueries";

//---------------------------STYLE-----------------------------

const ProfilePic = styled.img`
  max-height: 10vh;

  /* max-width: 120px; */
`;
const PicContainer = styled.div`
  img {
    width: 100px;

    /* #1 */
    border: 5px solid #828a92;

    /* #2 */
    padding: 5px;
    background: #343a40;

    /* #3 */
    outline: 5px solid #fafafa;
  }
`;
const NameButton = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 50%;
  position: relative;
  left: 48.5%;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
`;
const LogoutButton = styled.button`
  position: relative;
  top: 5px;
  background: #fafafa;
  width: 10vw;
  height: 2em;
  /* margin-top: 10px; */
  color: #343a40;
  font-size: 0.6em;
  font-weight: bold;
  transition: 0.5s;
  border: 2px solid #343a40;
  :hover {
    background: #343a40;
    color: #fafafa;
    border: 2px solid #fafafa;
  }

  @media ${mediaQuerySize[1000]} {
    width: 18vw;
    font-size: 0.4em;
  }
`;

const NavbarCustom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 11vh;
  box-shadow: 5px 5px 10px 5px #111111;
  background: #343a40;
  color: #fafafa;
  font-family: "Montserrat", sans-serif;
`;
const UserH1 = styled.h1`
  font-weight: bold;
  position: relative;
  top: 4px;
`;
const H3 = styled.h3`
  font-weight: normal;
  position: relative;
  right: 10px;
`;
const Welcome = styled.div`
  width: 60vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

// const navStyle = {
//   width: "100%",
//   display: "flex",
//   alignItems: "center",
//   alignContent: "center",
//   justifyContent: "space-between",
//   height: "11vh",
//   boxShadow: "5px 5px 10px 5px #111111"
//   // zIndex: "1",
// };

// const rightText = {};

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
      <div ref={this.navRef} style={{ display: "flex" }}>
        <NavbarCustom id="NavbarCustom">
          {/* <Navbar.Brand></Navbar.Brand> */}
          <NameButton>
            <Welcome>
              <H3>LOGGED IN AS:</H3>
              <UserH1>{this.props.username}</UserH1>
            </Welcome>
            <LogoutButton onClick={this.logout}>LOGOUT</LogoutButton>
          </NameButton>
        </NavbarCustom>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <PicContainer>
            <ProfilePic src={this.props.userImage} alt="profile pic" />
          </PicContainer>
        </div>
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
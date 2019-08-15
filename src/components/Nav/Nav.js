import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

//---------------------------STYLE-----------------------------
// const NavContainer = styled.div`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 9000000;
//   box-shadow: 0 0 5px #cccccc;
//   transition: all 0.5s ease-out;
//   box-sizing: border-box;
//   display: block;
// `;

// const Navbar = styled.div`
//   position: relative;
//   min-height: 62px;
//   margin-bottom: 0;
//   border: none;
//   box-sizing: border-box;
//   display: block;
//   font-family: "Roboto", Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   line-height: 1.58;
//   letter-spacing: -0.003em;
//   color: #555555;
//   background-color: #fff;
// `;

// const nav = document.querySelector(".homepage");
// const navTop = nav.offsetTop;

// function handleScroll() {
//   if (window.scrollY > navTop) {
//     nav.classList.add("fixed-nav");
//     document.body.style.paddingTop = nav.offsetHeight + "px";
//   } else {
//     nav.classList.remove("fixed-nav");
//     document.body.style.paddingTop = 0;
//   }
// }
// window.addEventListener("scroll", handleScroll);

const ProfilePic = styled.img`
    max-height: 160px;
    max-width: 160px;
`

class Nav extends Component {
  logout = () => {
    axios.delete("/auth/logout").then(() => {
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  render() {
    return (
        <div>
          <h3>{this.props.username}</h3>
          <ProfilePic src={this.props.userImage} alt="profile pic" />
          <button onClick={this.logout}>Logout</button>
          <hr/>
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
)(withRouter(Nav));

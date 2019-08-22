import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import styled from "styled-components";

const RegContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("http://localhost:5555/static/frameworkDNABackgrd.png");
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const RegInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 25vw;
  height: 30vw;
  background: lightgrey;
`;

const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-around;
`;

const Input = styled.input`
  position: relative;
  padding: 10px 15px;
  background-color: rgba(52, 58, 64, 0.25);
  color: #333;
  outline: none;
  margin-top: 10px;
  width: 15vw;
  transition: 0.3s all;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  :hover {
    background-color: rgba(52, 58, 64, 0.25);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  :focus {
    border: 3px solid #555;

  }
`;

const InputButton = styled.button`
  width: 15vw;
  height: 2em;
  margin-top: 10px;
  background: #555;
  color: #fafafa;
  transition: 1sec;
  border: 2px solid #fafafa;
  :hover {
    background: #fafafa;
    color: #555;
    border: 2px solid #555;
  }
`;

const TitleH2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-top: 7vh;
`;

class Registration extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    userImage: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  register = () => {
    const { username, password, email, userImage } = this.state;
    axios
      .post("/auth/register", { username, password, email, userImage })
      .then(res => {
        this.props.setUser({ username, email, userImage });
        this.props.history.push("/");
      });
    // .catch(() => {
    //   alert("Email is already in use");
    // });
  };

  render() {
    return (
      <RegContainer>
        <RegInnerContainer>
          <RegForm onSubmit={e => e.preventDefault()}>
            <TitleH2>REGISTRATION</TitleH2>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={e => this.handleChange(e)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.handleChange(e)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={e => this.handleChange(e)}
            />
            <Input
              type="url"
              name="userImage"
              placeholder="Profile Pic URL"
              onChange={e => this.handleChange(e)}
            />
            <Input
              type="file"
              name="userImage"
              accept="image/*"
              onChange={e => this.handleChange(e)}
            />
            <InputButton onClick={this.register}>Submit</InputButton>
          </RegForm>
        </RegInnerContainer>
      </RegContainer>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Registration);

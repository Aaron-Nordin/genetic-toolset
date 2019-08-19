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
  padding: 10px 15px;
  background-color: #fafafa;
  outline: none;
  margin-top: 10px;
  :focus {
    border: 3px solid #555;
  }
`;

const InputButton = styled.button`
  width: 15vw;
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
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        alert("Email is already in use");
      });
  };

  render() {
    return (
      <RegContainer>
        <RegInnerContainer>
          Registration
          <RegForm onSubmit={e => e.preventDefault()}>
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
            <input type="submit" onClick={this.register} />
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

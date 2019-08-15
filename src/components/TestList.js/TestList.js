import React, { Component } from "react";
import styled from "styled-components";

const TestMenu = styled.div`
  top: 0px;
  height: calc(100vh - 0px);
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  width: 260px;
  background-color: #fafafa;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  contain: strict;
  position: sticky;
`;

const LogoContainer = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: center;
  display: block;
`;

const LogoLink = styled.a`
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    display: inline-block;
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
    text-align: center;

`

export default class TestList extends Component {
  render() {
    return (
      <TestMenu>
        <LogoContainer>
          <LogoLink href="http://localhost:5555/about">
            <img src="http://localhost:5555/static/logo.png" alt="logo" />
          </LogoLink>
        </LogoContainer>
        TestList
        <li>DNA1</li>
        <li>DNA2</li>
        <li>DNA3</li>
        <li>RNA1</li>
        <li>RNA2</li>
        <li>RNA3</li>
        <li>AA1</li>
        <li>AA2</li>
        <li>AA3</li>
      </TestMenu>
    );
  }
}

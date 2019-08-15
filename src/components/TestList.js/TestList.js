import React, { Component } from "react";
import styled from "styled-components";
import DNATests from "../Assays/DNATests"

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
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: inline-block;
  color: -webkit-link;
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
`;

const Logo = styled.img`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  max-height: 260px;
  max-width: 260px;
  padding: 2px;
  width: 100%;
  display: block;
`;

const Search = styled.div`
  padding: 5px 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: block;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 20px;
  height: 1.8em;
  width: 0.9em;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  overflow: hidden;
`;

const SearchInput = styled.input`
  width: calc(100% - 40px);
  box-sizing: border-box;
  margin: 0 20px;
  padding: 5px 10px 5px 20px;
  border: 0;
  border-bottom: 1px solid #e1e1e1;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 13px;
  color: #333333;
  background-color: transparent;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const ScrollbarContainer = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  position: relative;
  overflow: hidden !important;
  overflow-anchor: none;
  touch-action: auto;
  display: block;
`;

const ScrollbarInnerCont = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  margin: 0;
  padding: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;


export default class TestList extends Component {
  render() {
    return (
      <TestMenu>
        <LogoContainer>
          <LogoLink href="http://localhost:5555/about">
            <Logo src="http://localhost:5555/static/logo.png" alt="logo" />
          </LogoLink>
        </LogoContainer>
        <Search>
          <SearchIcon
            viewBox="0 0 1000 1000"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z" />
          </SearchIcon>
          <SearchInput type="text" placeholder="Search..." />
        </Search>
        <ScrollbarContainer>
          <ScrollbarInnerCont>
            <DNATests/>
            <li>RNA1</li>
            <li>RNA2</li>
            <li>RNA3</li>
            <li>AA1</li>
            <li>AA2</li>
            <li>AA3</li>
          </ScrollbarInnerCont>
        </ScrollbarContainer>
      </TestMenu>
    );
  }
}

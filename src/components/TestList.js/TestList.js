import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-scroll";
import styled from "styled-components";
import DNATests from "../Assays/DNATests";
import RNATests from "../Assays/RNATests";
import AATests from "../Assays/AATests";

const TestMenu = styled.div`
  overflow-y: scroll;
  position: ${props => props.position};
  top: 0px;
  left: ${props => (props.position === "fixed" ? "0px" : "-20vw")};
  min-height: 100vh;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  width: 20vw;
  background-color: #fafafa;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  contain: strict;
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #343a40;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #343a40;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #343a40;
  }
`;

const LogoContainer = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: center;
  display: block;
  padding-top: 1em;
`;

const LogoInnerContainer = styled.a`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: inline-block;
  color: -webkit-link;
  text-align: center;
  /* text-decoration: underline; */
  transition: 0.5s;
`;

const Logo = styled.img`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  max-height: 260px;
  max-width: 260px;
  padding: 2px;
  width: 100%;
  display: block;
  cursor: pointer;

`;

const Search = styled.div`
  padding: 25px 0;
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
  font-family: "Roboto", sans-serif;
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
  padding-inline-start: 5%;
`;

class TestList extends Component {
  state = {
    testListPosition: "absolute"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (
      window.scrollY >=
      this.props.navbarHeight + this.props.bannerImageHeight
    ) {
      this.setState({ testListPosition: "fixed" });
    } else {
      this.setState({ testListPosition: "absolute" });
    }
  };

  render() {
    return (
      <TestMenu position={this.state.testListPosition}>
        <LogoContainer>
          <LogoInnerContainer>
            <Link
              activeClass="active"
              to="NavbarCustom"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Logo src="http://localhost:5555/static/logo.png" alt="logo" />
            </Link>
          </LogoInnerContainer>
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
            <DNATests />
            <RNATests />
            <AATests />
          </ScrollbarInnerCont>
        </ScrollbarContainer>
      </TestMenu>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps)(TestList);

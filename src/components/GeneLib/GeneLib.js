import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import TestArea from "../TestArea/TestArea";
import TestList from "../TestList.js/TestList";
import GeneLibSlidingPane from "./GeneLibSlidingPane";
import styled from "styled-components";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "./GeneLib.css";

const Body = styled.div`
  display: block;
  margin-left: 20vw;
`;
const BodyWrap = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: #333333;
  display: flex;
  position: relative;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
`;
const SlidingPaneCont = styled.div`
  background: #343a40;
  height: 100%;
  width: 7vw;
  margin: 0;
  position: absolute;
  right: 0px;
`;
const DNAHamburger = styled.img`
  position: relative;
  left: 23%;
  width: 50%;
  height: auto;
  margin-top: 4vh;
  box-shadow: 10px 10px 5px black;
  transition: 0.5s ease;
  :hover {
    opacity: 0.5;
    border: 3px solid black;
    border-radius: 8px;
  }
`;
const SlidingPaneMainCont = styled.div`
  height: 100vh;
  width: 7vw;
  position: ${props => props.position};
  top: 0px;
  right: 0px;
`;

const testAreaStyle = {
  width: "100%",
  zIndex: -2
};
const slidingPaneStyle = {
  zIndex: 4
};

class GeneLib extends Component {
  constructor() {
    super();
    this.state = {
      genes: [],
      isPaneOpen: false,
      isPaneOpenLeft: false,
      slidPaneContDivPosition: "absolute"
    };
  }

  componentDidMount() {
    this.getGenes();
    Modal.setAppElement(this.el);
    window.addEventListener("scroll", this.onScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getGenes();
    }
  }

  onScroll = () => {
    if (
      window.scrollY >=
      this.props.navbarHeight + this.props.bannerImageHeight
    ) {
      this.setState({ slidPaneContDivPosition: "fixed" });
    } else {
      this.setState({ slidPaneContDivPosition: "absolute" });
    }
  };

  getGenes = () => {
    if (this.props.userId !== null) {
      axios
        .get(`/api/metadata/usergenes/${this.props.userId}`)
        .then(res => {
          this.setState({
            genes: res.data
          });
          return this.state;
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleDNAHambClick = () => {
    this.setState({ isPaneOpen: true });
    // slidingPaneStyle.zIndex = 6;
  };

  handleSlidingPaneClose = () => {
    this.setState({ isPaneOpen: false });
    // slidingPaneStyle.zIndex = 4;
  };

  render() {
    return (
      <Body>
        <BodyWrap>
          <div className="Test-List">
            <TestList />
          </div>
          <div className="Test-Area" style={{ height: "100vh", width: "72.5vw" }}>
            <TestArea style={testAreaStyle} />
          </div>
          <SlidingPaneMainCont
            className="Gene-Lib"
            position={this.state.slidPaneContDivPosition}
          >
            <SlidingPaneCont ref={ref => (this.el = ref)}>
              <DNAHamburger
                src="http://localhost:5555/static/DNAHamburger.png"
                alt="DNA icon onClick"
                onClick={this.handleDNAHambClick}
              />
              <SlidingPane
                className="some-custom-class"
                style={slidingPaneStyle}
                overlayClassName="some-custom-overlay-class"
                isOpen={this.state.isPaneOpen}
                title={`${this.props.username}'s Gene Library`}
                subtitle="Select a gene to run assays"
                onRequestClose={() => {
                  // triggered on "<" on left top click or on outside click
                  this.handleSlidingPaneClose();
                }}
              >
                <GeneLibSlidingPane />
              </SlidingPane>
            </SlidingPaneCont>
          </SlidingPaneMainCont>
        </BodyWrap>
      </Body>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId, username, bannerImageHeight, navbarHeight } = reduxState;
  return { userId, username, bannerImageHeight, navbarHeight };
}

export default connect(mapStateToProps)(GeneLib);

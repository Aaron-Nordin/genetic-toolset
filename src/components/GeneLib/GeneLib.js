import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import TestArea from "../TestArea/TestArea";
import TestList from "../TestList.js/TestList";
import GeneLibSlidingPane from "./GeneLibSlidingPane";
import styled from "styled-components";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import { mediaQuerySize } from "../../mediaQueries";
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
const SlidingPaneMainCont = styled.div`
  height: ${props => props.height};
  width: 7vw;
  position: ${props => props.position};
  top: 0px;
  right: 0px;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom-left-radius: ${props => props.borderRadius};
`;
const HamArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.5;
    /* border: 3px solid black;
    border-radius: 8px; */
    cursor: pointer;
  }
  /* @media ${mediaQuerySize[850]} {
    [title~="Library"] {
    font-size: 12px;
  }
  } */
`;
const SelGeneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DNAHamburger = styled.img`
  position: relative;
  width: 70px;
  height: auto;
  margin-top: 4vh;
  box-shadow: 10px 10px 5px black;
  transition: 0.5s ease;

  @media ${mediaQuerySize[1000]} {
    width: 50px;
  }
`;
const ArrowExpand = styled.img`
  position: relative;
  width: 35%;
  height: auto;
  transition: 0.5s ease;
  color: #fafafa;
  transform: rotate(90deg);
  margin-top: 10px;
`;
const LightButton = styled.button`
  position: relative;
  top: 5px;
  background: #fafafa;
  width: 75px;
  height: 6vh;
  /* margin-top: 10px; */
  color: #343a40;
  font-size: 16pt;
  transition: 0.5s;
  border: 2px solid #343a40;
  padding: 2px;
  box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    inset 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  :hover {
    background: #343a40;
    color: #fafafa;
    border: 2px solid #fafafa;
  }
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
      isSelectedGene: false,
      testAreaWidth: "91.2%",
      sPaneMContPosition: "absolute",
      sPaneMContHeight: "100vh",
      sPaneMContBRadius: "0"
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
        this.props.navbarHeight + this.props.bannerImageHeight &&
      !this.props.selectedGene.geneId
    ) {
      this.setState({
        sPaneMContPosition: "fixed",
        sPaneMContHeight: "225px",
        testAreaWidth: "100%",
        sPaneMContBRadius: "30px"
      });
    } else if (
      window.scrollY >=
        this.props.navbarHeight + this.props.bannerImageHeight &&
      this.props.selectedGene.geneId
    ) {
      this.setState({
        sPaneMContPosition: "fixed",
        sPaneMContHeight: "400px",
        testAreaWidth: "100%",
        sPaneMContBRadius: "30px"
      });
    } else {
      this.setState({
        sPaneMContPosition: "absolute",
        sPaneMContHeight: "100vh",
        testAreaWidth: "91.2%",
        sPaneMContBRadius: "0"
      });
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

  handleCopyAA = () => {
    let aa = this.props.selectedGene.aaSeq;
    let dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummyId");
    document.getElementById("dummyId").value = aa;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  handleCopyDNA = () => {
    let dna = this.props.selectedGene.dnaSeq;
    let dummyTwo = document.createElement("input");
    document.body.appendChild(dummyTwo);
    dummyTwo.setAttribute("id", "dummyIdTwo");
    document.getElementById("dummyIdTwo").value = dna;
    dummyTwo.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTwo);
  };

  handleCopyRNA = () => {
    let rna = this.props.selectedGene.rnaSeq;
    let dummyThree = document.createElement("input");
    document.body.appendChild(dummyThree);
    dummyThree.setAttribute("id", "dummyIdThree");
    document.getElementById("dummyIdThree").value = rna;
    dummyThree.select();
    document.execCommand("copy");
    document.body.removeChild(dummyThree);
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
          <div
            className="Test-Area"
            style={{
              height: "100vh",
              width: `${this.state.testAreaWidth}`,
              transition: "0.5s"
            }}
          >
            <TestArea style={testAreaStyle} />
          </div>
          <SlidingPaneMainCont
            className="Gene-Lib selectedGene"
            position={this.state.sPaneMContPosition}
            height={this.state.sPaneMContHeight}
            borderRadius={this.state.sPaneMContBRadius}
          >
            <SlidingPaneCont ref={ref => (this.el = ref)}>
              <HamArrowContainer>
                <DNAHamburger
                  src="/static/DNAHamburger.png"
                  alt="DNA icon onClick"
                  onClick={this.handleDNAHambClick}
                />
                <ArrowExpand
                  src="/static/ArrowExpand.png"
                  alt="expand arrow"
                  onClick={this.handleDNAHambClick}
                />
              </HamArrowContainer>
              {this.props.selectedGene.geneId ? (
                <SelGeneContainer>
                  <LightButton onClick={this.handleCopyDNA}>DNA</LightButton>
                  <LightButton onClick={this.handleCopyRNA}>RNA</LightButton>
                  <LightButton onClick={this.handleCopyAA}>
                    Amino Acid
                  </LightButton>
                </SelGeneContainer>
              ) : null}
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
  const {
    userId,
    username,
    bannerImageHeight,
    navbarHeight,
    selectedGene
  } = reduxState;
  return { userId, username, bannerImageHeight, navbarHeight, selectedGene };
}

export default connect(mapStateToProps)(GeneLib);

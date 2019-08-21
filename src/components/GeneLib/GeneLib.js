import React, { Component } from "react";
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
  /* position: sticky;
  top: 0px; */
`;
const BodyWrap = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: #333333;
  display: flex;
  /* justify-content: space-between; */
  position: relative;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
`;
const SlidingPaneCont = styled.div`
  background: #343a40;
  height: 100%;
  width: 7%;
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
      // genes: [],
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    // this.getGenes();
    Modal.setAppElement(this.el);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getGenes();
    }
  }

  // getGenes = () => {
  //   if (this.props.userId !== null) {
  //     axios
  //       .get(`/api/metadata/genes/${this.props.userId}`)
  //       .then(res => {
  //         this.setState({
  //           genes: res.data
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };

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
          <div className="Test-Area" style={{ height: "100vh", width: "73vw" }}>
            <TestArea style={testAreaStyle} />
          </div>
          <div className="Gene-Lib">
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
          </div>
        </BodyWrap>
      </Body>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId, username } = reduxState;
  return { userId, username };
}

export default connect(mapStateToProps)(GeneLib);

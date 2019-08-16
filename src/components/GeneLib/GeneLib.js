import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import TestArea from "../TestArea/TestArea";
import TestList from "../TestList.js/TestList";
import styled from "styled-components";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "./GeneLib.css";

const Body = styled.div`
  display: block;
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
const ScrollBoxDNA = styled.textarea`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  width: 26.6667%;
  height: 200px;
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #9f1829;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #9f1829;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9f1829;
  }
`;
const ScrollBoxRNA = styled(ScrollBoxDNA)`
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1a97ba;
  }
  ::-webkit-scrollbar-thumb {
    background: #1a97ba;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1a97ba;
  }
`;
const ScrollBoxAA = styled(ScrollBoxDNA)`
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #64ad37;
  }
  ::-webkit-scrollbar-thumb {
    background: #64ad37;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #64ad37;
  }
`;
const SlidingPaneCont = styled.div`
  background: #343a40;
  height: 100%;
  width: 7%;
  margin: 0;
  position: absolute;
  right: 0px;
`;
const ScrollBoxDesc = styled(ScrollBoxDNA)`
  width: 80%;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1a97ba;
  }
  ::-webkit-scrollbar-thumb {
    background: #1a97ba;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1a97ba;
  }
`;
const DNAHamburger = styled.img`
  position: relative;
  left: 23%;
  width: 50%;
  height: auto;
  margin-top: 4vh;
  box-shadow: 10px 10px 5px black;
  transition: .5s ease;
  :hover {
    opacity: 0.5;
    border: 3px solid black;
    border-radius: 8px;
  }
`;

const testAreaStyle = {
  width: "100%"
};

class GeneLib extends Component {
  constructor() {
    super();
    this.state = {
      genes: [],
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    this.getGenes();
    Modal.setAppElement(this.el);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getGenes();
    }
  }

  getGenes = () => {
    if (this.props.userId !== null) {
      axios
        .get(`/api/metadata/genes/${this.props.userId}`)
        .then(res => {
          this.setState({
            genes: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
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
            style={{ height: "100vh", width: "72.5vw" }}
          >
            <TestArea style={testAreaStyle} />
          </div>
          <div className="Gene-Lib">
            <SlidingPaneCont ref={ref => (this.el = ref)}>
              {/* <button onClick={() => this.setState({ isPaneOpen: true })}>
                Open Gene Library
              </button> */}
              <DNAHamburger
                src="http://localhost:5555/static/DNAHamburger.png"
                alt="DNA icon onClick"
                onClick={() => this.setState({ isPaneOpen: true })}
              />
              <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={this.state.isPaneOpen}
                title={`${this.props.username}'s Gene Library`}
                subtitle="Select a gene to run assays"
                onRequestClose={() => {
                  // triggered on "<" on left top click or on outside click
                  this.setState({ isPaneOpen: false });
                }}
              >
                <div>Add Another Gene</div>
                <br />
                {this.state.genes.map(g => (
                  <div key={g.geneId}>
                    <div className="gene-info">
                      <h4>{g.geneName}</h4>
                      <ScrollBoxDesc>{g.geneDesc}</ScrollBoxDesc>
                      <div>
                        <ScrollBoxDNA>{g.dnaSeq}</ScrollBoxDNA>
                        <ScrollBoxRNA>{g.rnaSeq}</ScrollBoxRNA>
                        <ScrollBoxAA>{g.aaSeq}</ScrollBoxAA>
                        <hr />
                      </div>
                    </div>
                  </div>
                ))}
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

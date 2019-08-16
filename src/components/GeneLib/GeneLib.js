import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import TestArea from "../TestArea/TestArea";
import TestList from "../TestList.js/TestList";
import styled from "styled-components";

const Body = styled.div`
  display: block;
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

const testAreaStyle = {
  // width: "65%",
};

class GeneLib extends Component {
  constructor() {
    super();
    this.state = {
      genes: []
    };
  }

  componentDidMount() {
    this.getGenes();
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
          <div className="Test-Area">
            <TestArea style={testAreaStyle} />
          </div>
          <div className="Gene-Lib">
            GeneLib
            {this.state.genes.map(g => (
              <div key={g.geneId}>
                <div className="gene-info">
                  <h2>{g.geneName}</h2>
                  <h5>{g.geneDesc}</h5>
                  <h6>{g.dnaSeq}</h6>
                  <h6>{g.rnaSeq}</h6>
                  <h6>{g.aaSeq}</h6>
                </div>
              </div>
            ))}
          </div>
        </BodyWrap>
      </Body>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId } = reduxState;
  return { userId };
}

export default connect(mapStateToProps)(GeneLib);

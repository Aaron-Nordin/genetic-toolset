import styled from "styled-components";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

const AddGeneButton = styled.button`
  width: 15vw;
  height: 2em;
  margin-top: 10px;
  background: #343a40;
  color: #fafafa;
  transition: 1sec;
  border: 2px solid #fafafa;
  :hover {
    background: #fafafa;
    color: #343a40;
    border: 2px solid #343a40;
  }
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

class GeneLibSlidingPane extends Component {
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
      <div>
        <AddGeneButton>Add Gene</AddGeneButton>
        <br />
        <br/>
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
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId, username } = reduxState;
  return { userId, username };
}

export default connect(mapStateToProps)(GeneLibSlidingPane);

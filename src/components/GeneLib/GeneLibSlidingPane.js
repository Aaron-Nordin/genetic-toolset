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
  transition: 1s;
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
const InputButton = styled.button`
  width: 19.5%;
  height: 2em;
  margin-top: 10px;
  background: #555;
  color: #fafafa;
  transition: 1sec;
  border: 2px solid #fafafa;
  :hover {
    background: #fafafa;
    color: #555;
    border: 2px solid #555;
  }
`;
const InputDNA = styled.textarea`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  width: 39%;
  height: 200px;
  outline: none;
  border: 2px dotted #9f1829;
  border-radius: 5px;
  :focus {
    border: 2px solid #9f1829;
    border-radius: 5px;
  }
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
const InputRNA = styled(InputDNA)`
  border: 2px dotted #1a97ba;
  margin-left: 2%;
  :focus {
    border: 2px solid #1a97ba;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1a97ba;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #1a97ba;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1a97ba;
  }
`;
const InputDesc = styled(InputDNA)`
  width: 80%;
  border: 2px dotted #343a40;
  :focus {
    border: 2px solid #343a40;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #343a40;
  }
  ::-webkit-scrollbar-thumb {
    background: #343a40;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #343a40;
  }
`;
const InputName = styled.input`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  width: 39%;
  height: 40px;
  outline: none;
  border: 2px dotted #343a40;
  border-radius: 5px;
  :focus {
    border: 2px solid #343a40;
    border-radius: 5px;
  }
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

class GeneLibSlidingPane extends Component {
  constructor() {
    super();
    this.state = {
      genes: [],
      addGene: false,
      name: "",
      desc: "",
      dna: "",
      rna: ""
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddGeneButton = () => {
    this.setState({ addGene: true });
  };

  handleInputSubitButton = () => {
    this.setState({ addGene: false });
  };

  handleInputCancelButton = () => {
    this.setState({ addGene: false, name: "", desc: "", dna: "", rna: "" });
  };

  render() {
    return (
      <div>
        {!this.state.addGene ? (
          <AddGeneButton onClick={this.handleAddGeneButton}>
            Add Gene
          </AddGeneButton>
        ) : null}
        <br />
        <br />
        {!this.state.addGene ? null : (
          <div>
            <h4>
              <InputName
                type="text"
                name="name"
                placeholder="Enter Gene Name (required)"
              />
            </h4>
            <InputDesc
              type="text"
              name="desc"
              placeholder="Enter Gene Description (required"
            />
            <div>
              <InputDNA
                name="dna"
                placeholder="Enter DNA Sequence. Either DNA or RNA sequence is required."
              />
              <InputRNA
                name="rna"
                placeholder="Enter RNA Sequence. Either DNA or RNA sequence is required."
              />
            </div>
            <div>
              <InputButton onClick={this.handleInputSubitButton}>
                Submit
              </InputButton>
              <InputButton onClick={this.handleInputCancelButton}>
                Cancel
              </InputButton>
            </div>
            <br/>
            <hr/>
          </div>
        )}
        <br />
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
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId, username } = reduxState;
  return { userId, username };
}

export default connect(mapStateToProps)(GeneLibSlidingPane);

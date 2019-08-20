import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  AddGeneButton,
  ScrollBoxDNA,
  ScrollBoxRNA,
  ScrollBoxAA,
  ScrollBoxDesc,
  InputButton,
  InputDNA,
  InputRNA,
  InputDesc,
  InputName
} from "./GeneLibSlidingPaneSTYLE";

class GeneLibSlidingPane extends Component {
  constructor() {
    super();
    this.state = {
      genes: [],
      addGene: false,
      userId: 0,
      name: "",
      desc: "",
      dna: "",
      rna: ""
    };
  }

  componentDidMount() {
    this.getGenes();
    this.setState({ userId: this.props.userId });
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

  handleInputSubitButton = async () => {
    this.setState({ addGene: false });
    const { userId, name, desc, dna, rna } = this.state;
    await axios
      .post("/api/geneticmaterial/dnaOrRna", {
        userId,
        name,
        desc,
        dna,
        rna
      })
      .catch(() => {
        alert("Invalid Submission");
      });
    this.getGenes();
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
            <br />
            <hr />
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

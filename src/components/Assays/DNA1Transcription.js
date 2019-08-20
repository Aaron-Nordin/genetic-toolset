import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  InputStyle1,
  InputContainer,
  ButtonContainer,
  InputButtonStyle1,
  TestNameAndDescCont,
  TestDNA1Output
} from "./TestsStyle";

class DNA1Transcription extends Component {
  state = {
    dna: "",
    rna: "",
    submitted: false,
    genes: []
  };

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

  tScripFn = dna => {
    return dna
      .replace(/ /g, "")
      .replace(/T/gi, "U")
      .toUpperCase();
  };

  // handleDNA = val => {
  //   this.setState({ dna: val.toUpperCase() });
  // };

  handleTscriptClick = () => {
    this.setState({
      rna: this.tScripFn(this.state.dna),
      submitted: true
    });
  };

  handleCancelClick = () => {
    this.setState({ submitted: false });
  };

  handleSaveClick = async () => {
    await this.getGenes();
    const geneId = this.state.genes.select(g => g.dna === this.state.dna)
      .geneId;
    const { rna } = this.state.rna;
    await axios.put("/api/geneticmaterial/rna", { geneId, rna });
    this.setState({ submitted: false });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <TestNameAndDescCont className="test-name">
          <h2>Transcription</h2>
          <p>
            Transcription is the first step of DNA based gene expression, in
            which a particular segment of DNA is copied into RNA (especially
            mRNA) by the enzyme RNA polymerase. Both DNA and RNA are nucleic
            acids, which use base pairs of nucleotides as a complementary
            language. During transcription, a DNA sequence is read by an RNA
            polymerase, which produces a complementary, antiparallel RNA strand
            called a primary transcript.
            <a href="https://en.wikipedia.org/wiki/Transcription_(biology)">
              <sup>1</sup>
            </a>
          </p>
        </TestNameAndDescCont>
        <div className="test-desc" />
        <InputContainer>
          <InputStyle1
            name="dna"
            type="text"
            placeholder="Enter DNA Sequence. Whitespace in sequence will be removed upon submission."
            onChange={e => this.handleChange(e)}
          />
        </InputContainer>
        <ButtonContainer>
          <InputButtonStyle1 onClick={this.handleTscriptClick}>
            Transcribe
          </InputButtonStyle1>
        </ButtonContainer>
        {this.state.submitted ? (
          <>
            <InputContainer>
              <TestDNA1Output>{this.state.rna}</TestDNA1Output>
            </InputContainer>
            <ButtonContainer>
              <InputButtonStyle1 onClick={this.handleSaveClick}>
                Save
              </InputButtonStyle1>
              <InputButtonStyle1 onClick={this.handleCancelClick}>
                Cancel
              </InputButtonStyle1>
            </ButtonContainer>
          </>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId } = reduxState;
  return { userId };
}

export default connect(mapStateToProps)(DNA1Transcription);

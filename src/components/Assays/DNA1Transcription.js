import React, { Component } from "react";
import {
  InputStyle1,
  InputContainer,
  ButtonContainer,
  InputButtonStyle1
} from "./TestsStyle";

export default class DNA1Transcription extends Component {
  state = {
    dna: "",
    rna: ""
  };

  tScripFn = dna => {
    return dna.replace(/ /g, "").replace(/T/gi, "U");
  };

  handleDNA = val => {
    this.setState({ dna: val.toUpperCase() });
  };

  handleTscriptClick = () => {
    this.setState({
      rna: this.tScripFn(this.state.dna)
    });
  };

  render() {
    return (
      <div>
        <div className="test-name">
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
        </div>
        <div className="test-desc" />
        <InputContainer>
          <InputStyle1
            type="text"
            placeholder="Enter DNA Sequence. Whitespace in sequence will be removed upon submission."
            onChange={e => this.handleDNA(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <InputButtonStyle1 onClick={this.handleTscriptClick}>Transcribe</InputButtonStyle1>
        </ButtonContainer>
      </div>
    );
  }
}
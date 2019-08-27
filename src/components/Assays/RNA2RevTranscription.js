import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setSelectedGene } from "../../ducks/reducer";
import RevTScriptD3 from "../d3/RevTScriptD3";
import {
  InputStyleRNA,
  InputContainer,
  ButtonContainer,
  InputButtonStyle1,
  TestNameAndDescCont,
  TestOutputDNA
} from "./TestsStyle";

class RNA2RevTranscription extends Component {
  state = {
    dna: "",
    rna: "",
    submitted: false,
    genes: []
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

  revTScripFn = rna => {
    return rna
      .replace(/ /g, "")
      .replace(/U/gi, "T")
      .toUpperCase();
  };

  handleCancelClick = () => {
    this.setState({ submitted: false });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRevTScripClick = () => {
    this.setState({
      dna: this.revTScripFn(this.state.rna),
      submitted: true
    });
  };

  handleSaveClick = async () => {
    const { rna, dna } = this.state;
    const { userId } = this.props;
    await axios.put("/api/geneticmaterial/cdna", { userId, rna, dna });
    this.setState({ submitted: false });
    this.getGenes();
    await axios
      .get(`/api/metadata/genes/${this.props.selectedGene.geneId}`)
      .then(res => {
        this.props.setSelectedGene(res.data);
      });
  };

  render() {
    return (
      <div>
        <TestNameAndDescCont className="test-name">
          <h1>Reverse Transcription</h1>
          <hr style={{ borderColor: "#fafafa" }} />
          <p style={{ fontSize: "20px" }}>
            Reverse transcriptase enzymes create double-stranded DNA from RNA
            templates. In virus species with reverse transcriptase lacking
            DNA-dependent DNA polymerase activity, creation of double-stranded
            DNA can possibly be done by host-encoded DNA polymerase δ, mistaking
            the viral DNA-RNA for a primer and synthesizing a double-stranded
            DNA by similar mechanism as in primer removal, where the newly
            synthesized DNA displaces the original RNA template. The process of
            reverse transcription is extremely error-prone, and it is during
            this step that mutations may occur. Such mutations may cause drug
            resistance.
            <a href="https://en.wikipedia.org/wiki/Reverse_transcriptase#Process_of_reverse_transcription">
              <sup>1</sup>
            </a>
          </p>
        </TestNameAndDescCont>
        <div className="test-desc" />
        <InputContainer>
          <InputStyleRNA
            name="rna"
            type="text"
            placeholder="Enter RNA Sequence. Whitespace in sequence will be removed upon submission."
            onChange={e => this.handleChange(e)}
          />
        </InputContainer>
        <ButtonContainer>
          <InputButtonStyle1 onClick={this.handleRevTScripClick}>
            Reverse Transcribe
          </InputButtonStyle1>
        </ButtonContainer>
        {this.state.submitted ? (
          <>
            <InputContainer>
              <TestOutputDNA
                readOnly
                value={this.state.dna}
                id="RevTScriptOutputData"
              />
            </InputContainer>
            <ButtonContainer>
              <InputButtonStyle1 onClick={this.handleSaveClick}>
                Save
              </InputButtonStyle1>
              <InputButtonStyle1 onClick={this.handleCancelClick}>
                Cancel
              </InputButtonStyle1>
            </ButtonContainer>
            <RevTScriptD3 />
          </>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId, selectedGene } = reduxState;
  return { userId, selectedGene };
}

export default connect(
  mapStateToProps,
  { setSelectedGene }
)(RNA2RevTranscription);

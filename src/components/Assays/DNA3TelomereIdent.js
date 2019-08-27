import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { setSelectedGene } from "../../ducks/reducer";
import {
  InputStyleDNA,
  InputContainer,
  ButtonContainer,
  InputButtonStyle1,
  TestNameAndDescCont,
  TestDNA1Output
} from "./TestsStyle";

class DNA3TelomereIdent extends Component {
  state = {
    dna: "",
    telomereArr: [],
    telComplementArr: [],
    telOverhangArr: [],
    submitted: false,
    genes: []
  };

  telomereFn = dna => {
    dna.toUpper()
    const telomere = "AGGGTT",
      telComplement = "TCCCAA",
      telOverhang = "TTAGGG";
    let telomereArr = [],
      telComplementArr = [],
      telOverhangArr = [],
      i = -1;
    while ((i = dna.indexOf(telomere, i + 1)) !== -1) {
      telomereArr.push(i + 1);
    }
    while ((i = dna.indexOf(telComplement, i + 1)) !== -1) {
      telComplementArr.push(i + 1);
    }
    while ((i = dna.indexOf(telOverhang, i + 1)) !== -1) {
      telOverhangArr.push(i + 1);
    }
    this.setState({
      telomereArr: [...this.telomereArr],
      telComplementArr: [...this.telComplementArr],
      telOverhangArr: [...this.telOverhangArr]
    });
  };

  handleCancelClick = () => {
    this.setState({ submitted: false });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = () => {
    this.setState({
      submitted: true
    });
  };

  render() {
    return (
      <div>
        <TestNameAndDescCont className="test-name">
          <h1>Telomere Identification</h1>
          <hr style={{ borderColor: "#fafafa" }} />
          <p style={{ fontSize: "20px" }}>
            A telomere is a region of repetitive nucleotide sequences at each
            end of a chromosome, which protects the end of the chromosome from
            deterioration or from fusion with neighboring chromosomes. For
            vertebrates, the sequence of nucleotides in telomeres is AGGGTT,
            with the complementary DNA strand being TCCCAA, with a
            single-stranded TTAGGG overhang. During chromosome replication, the
            enzymes that duplicate DNA cannot continue their duplication all the
            way to the end of a chromosome, so in each duplication the end of
            the chromosome is shortened. The telomeres are disposable buffers at
            the ends of chromosomes which are truncated during cell division;
            their presence protects the genes before them on the chromosome from
            being truncated instead.
            <a href="https://en.wikipedia.org/wiki/Telomere">
              <sup>1</sup>
            </a>
          </p>
        </TestNameAndDescCont>
        <div className="test-desc" />
        <InputContainer>
          <InputStyleDNA
            name="dna"
            type="text"
            placeholder="Enter DNA Sequence. Whitespace in sequence will be removed upon submission."
            onChange={e => this.handleChange(e)}
          />
        </InputContainer>
        <ButtonContainer>
          <InputButtonStyle1 onClick={this.handleSubmit}>
            Submit
          </InputButtonStyle1>
        </ButtonContainer>
        {this.state.submitted ? (
          <>
            <InputContainer>
              <TestDNA1Output readOnly value="value" />
            </InputContainer>
            <ButtonContainer>
              {/* <InputButtonStyle1 onClick={this.handleSaveClick}>
                    Save
                  </InputButtonStyle1> */}
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
  const { userId, selectedGene } = reduxState;
  return { userId, selectedGene };
}

export default connect(
  mapStateToProps,
  { setSelectedGene }
)(DNA3TelomereIdent);

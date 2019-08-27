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

class DNA2gcContent extends Component {
  state = {
    dna: "",
    submitted: false,
    baseRatios: {},
    basePercentages: {},
    genes: []
  };

  gcFn = dna => {
    dna.toUpperCase();
    let A = 0,
      T = 0,
      G = 0,
      C = 0;
    for (let i = 0; i < dna.length; i++) {
      if ((dna[i] = "A")) {
        A++;
      } else if ((dna[i] = "T")) {
        T++;
      } else if ((dna[i] = "G")) {
        G++;
      } else if ((dna[i] = "C")) {
        C++;
      }
    }
    const totalBases = A + T + G + C;
    const aRatio = A / totalBases,
      tRatio = T / totalBases,
      gRatio = G / totalBases,
      cRatio = C / totalBases;
    const aPercent = aRatio * 100,
      tPercent = tRatio * 100,
      gPercent = gRatio * 100,
      cPercent = cRatio * 100;
    this.setState({
      baseRatios: { A: aRatio, T: tRatio, G: gRatio, C: cRatio },
      basePercentages: { A: aPercent, T: tPercent, G: gPercent, C: cPercent }
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
          <h1>DNA GC-Content</h1>
          <hr style={{ borderColor: "#343a40" }} />
          <p style={{ fontSize: "20px" }}>
            GC-content (or guanine-cytosine content) is the percentage of
            nitrogenous bases on a DNA or RNA molecule that are either guanine
            or cytosine. This may refer to a certain fragment of DNA or RNA, or
            that of the whole genome. When it refers to a fragment of the
            genetic material, it may denote the GC-content of section of a gene
            (domain), single gene, group of genes (or gene clusters), or even a
            non-coding region. GC pairs are bound by three hydrogen bonds,
            whereas AT pairs are bound by two hydrogen bonds. DNA with low
            GC-content is less stable than DNA with high GC-content; however,
            the hydrogen bonds themselves do not have a particularly significant
            impact on stabilization, the stabilization is due mainly to
            interactions of base stacking.
            <a href="https://en.wikipedia.org/wiki/GC-content">
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
)(DNA2gcContent);

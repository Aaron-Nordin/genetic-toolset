import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { codonDict } from "./CodonDict";
import {
  InputStyle1,
  InputContainer,
  ButtonContainer,
  InputButtonStyle1,
  TestNameAndDescCont,
  TestRNA1Output
} from "./TestsStyle";
class RNA1Translation extends Component {
  state = {
    aa: "",
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

  tLateFn = rna => {
    return rna
      .toUpperCase()
      .match(/.{1,3}/g)
      .map(c => codonDict[c])
      .join("");
  };

  handleCancelClick = () => {
    this.setState({ submitted: false });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSaveClick = async () => {
    const { rna, aa } = this.state;
    const { userId } = this.props;
    await axios.put("/api/geneticmaterial/aa", { userId, rna, aa });
    this.setState({ submitted: false });
    this.getGenes();
  };

  handleTlateClick = () => {
    this.setState({
      aa: this.tLateFn(this.state.rna),
      submitted: true
    });
  };

  render() {
    return (
      <div>
        <TestNameAndDescCont className="test-name">
          <h2>Translation</h2>
          <p>
            Translation is the process in which ribosomes in the cytoplasm or ER
            synthesize proteins after the process of transcription of DNA to RNA
            in the cell's nucleus. The entire process is called gene expression.
            In translation, messenger RNA (mRNA) is decoded in the ribosome
            decoding center to produce a specific amino acid chain, or
            polypeptide. The polypeptide later folds into an active protein and
            performs its functions in the cell. The ribosome facilitates
            decoding by inducing the binding of complementary tRNA anticodon
            sequences to mRNA codons. The tRNAs carry specific amino acids that
            are chained together into a polypeptide as the mRNA passes through
            and is read by the ribosome. Translation proceeds in three phases:
            Initiation: The ribosome assembles around the target mRNA. The first
            tRNA is attached at the start codon. Elongation: The tRNA transfers
            an amino acid to the tRNA corresponding to the next codon. The
            ribosome then moves (translocates) to the next mRNA codon to
            continue the process, creating an amino acid chain. Termination:
            When a peptidyl tRNA encounters a stop codon, then the ribosome
            folds the polypeptide into its final structure.{" "}
            <a href="https://en.wikipedia.org/wiki/Translation_(biology)">
              <sup>1</sup>
            </a>
          </p>
        </TestNameAndDescCont>
        <div className="test-desc" />
        <InputContainer>
          <InputStyle1
            name="rna"
            type="text"
            placeholder="Enter RNA Sequence. Whitespace in sequence will be removed upon submission."
            onChange={e => this.handleChange(e)}
          />
        </InputContainer>
        <ButtonContainer>
          <InputButtonStyle1 onClick={this.handleTlateClick}>
            Translate
          </InputButtonStyle1>
        </ButtonContainer>
        {this.state.submitted ? (
          <>
            <InputContainer>
              <TestRNA1Output readOnly value={this.state.aa} />
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

export default connect(mapStateToProps)(RNA1Translation);

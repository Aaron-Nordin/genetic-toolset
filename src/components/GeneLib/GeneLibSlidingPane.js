import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { setSelectedGene } from "../../ducks/reducer";
import fastaParser from "fasta-js";
import {
  DarkToLightButton,
  // DarkToLightInput,
  ScrollBoxDNA,
  ScrollBoxRNA,
  ScrollBoxAA,
  ScrollBoxDesc,
  InputButton,
  InputDNA,
  InputRNA,
  InputDesc,
  InputName,
  GeneContainer,
  DarkH4,
  HContainerStyle1,
  AddGeneContainer
} from "./GeneLibSlidingPaneSTYLE";

class GeneLibSlidingPane extends Component {
  constructor() {
    super();
    this.state = {
      genes: [],
      fasta: null,
      addGene: false,
      selectedGeneId: null,
      userId: null,
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
        .get(`/api/metadata/usergenes/${this.props.userId}`)
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

  handleDarkToLightButton = () => {
    this.setState({ addGene: true });
  };

  async handleDeleteGeneButton(geneId) {
    await axios
      .delete(`/api/metadata/genes/${geneId}`)
      .catch(() => alert("Unable to delete"));
    this.getGenes();
  }

  handleInputSubmitButton = async () => {
    const { userId, name, desc, dna, rna } = this.state;
    this.setState({ addGene: false });
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
    Swal.fire({
      position: "top-end",
      type: "success",
      title: "Gene added to your Library",
      showConfirmButton: false,
      timer: 1500,
      background: "#fafafa"
    });
  };

  handleInputCancelButton = () => {
    this.setState({ addGene: false, name: "", desc: "", dna: "", rna: "" });
  };

  handleSelectGeneButton = async geneId => {
    this.setState({
      selectedGeneId: geneId
    });
    await axios.get(`/api/metadata/genes/${geneId}`).then(res => {
      this.props.setSelectedGene(res.data);
    });
  };

  handleUpload = e => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    let fasta = new fastaParser()

    console.log(fasta.parse(file));
  };

  render() {
    return (
      <div>
        {!this.state.addGene ? (
          <DarkToLightButton onClick={this.handleDarkToLightButton}>
            Add Gene
          </DarkToLightButton>
        ) : null}
        <br />
        <br />
        {!this.state.addGene ? null : (
          <AddGeneContainer>
            <DarkToLightButton
              type="file"
              name="fasta"
              id="fasta"
              accept=".fasta"
              onChange={this.handleUpload.bind(this)}
            > Upload FASTA File</DarkToLightButton>
            <br />
            <br />
            <h4>
              <InputName
                type="text"
                name="name"
                placeholder="Enter Gene Name (required)"
                onChange={e => this.handleChange(e)}
              />
            </h4>
            <InputDesc
              type="text"
              name="desc"
              placeholder="Enter Gene Description (required)"
              onChange={e => this.handleChange(e)}
            />
            <div>
              <InputDNA
                name="dna"
                placeholder="Enter DNA Sequence. Either DNA or RNA sequence is required."
                onChange={e => this.handleChange(e)}
              />
              <InputRNA
                name="rna"
                placeholder="Enter RNA Sequence. Either DNA or RNA sequence is required."
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <InputButton onClick={this.handleInputSubmitButton}>
                Submit
              </InputButton>
              <InputButton onClick={this.handleInputCancelButton}>
                Cancel
              </InputButton>
            </div>
            <br />
            <hr />
          </AddGeneContainer>
        )}
        <br />
        <br />
        {this.state.genes.map(g => (
          <div key={g.geneId}>
            <GeneContainer
              // id={this.state.selectedGeneId === g.geneId ? "selected" : null}
              className="gene-info"
              style={{
                border: "2px solid #343a40",
                boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.5)",
                background:
                  this.state.selectedGeneId === g.geneId ? "#828A92" : null
              }}
            >
              <HContainerStyle1>
                <DarkH4>{g.geneName}</DarkH4>
              </HContainerStyle1>
              <br />
              <ScrollBoxDesc readOnly defaultValue={g.geneDesc} />
              <br />
              <br />
              <div>
                <ScrollBoxDNA readOnly defaultValue={g.dnaSeq} />
                <ScrollBoxRNA readOnly defaultValue={g.rnaSeq} />
                <ScrollBoxAA readOnly defaultValue={g.aaSeq} />
              </div>
              <br />
              <DarkToLightButton
                onClick={() => this.handleSelectGeneButton(g.geneId)}
              >
                Select Gene
              </DarkToLightButton>
              <DarkToLightButton
                onClick={() => this.handleDeleteGeneButton(g.geneId)}
              >
                Delete Gene
              </DarkToLightButton>
            </GeneContainer>
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

export default connect(
  mapStateToProps,
  { setSelectedGene }
)(GeneLibSlidingPane);

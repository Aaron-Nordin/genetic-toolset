import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setSelectedGene } from "../../ducks/reducer";
import {
  DarkToLightButton,
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
  HContainerStyle1
} from "./GeneLibSlidingPaneSTYLE";

class GeneLibSlidingPane extends Component {
  constructor() {
    super();
    this.state = {
      genes: [],
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

  handleInputSubitButton = async () => {
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
  };

  handleInputCancelButton = () => {
    this.setState({ addGene: false, name: "", desc: "", dna: "", rna: "" });
  };

  handleSelectGeneButton = async geneId => {
    this.setState({
      selectedGeneId: geneId,
    });
    await axios.get(`/api/metadata/genes/${geneId}`).then(res => {
      this.props.setSelectedGene(res.data);
    });
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
          <div>
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
              placeholder="Enter Gene Description (required"
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
            <GeneContainer
              // id={this.state.selectedGeneId === g.geneId ? "selected" : null}
              className="gene-info"
              style={{
                background:
                  this.state.selectedGeneId === g.geneId ? "#828A92" : null
              }}
            >
              <HContainerStyle1>
                <DarkH4>{g.geneName}</DarkH4>
              </HContainerStyle1>
              <ScrollBoxDesc readOnly defaultValue={g.geneDesc} />
              <div>
                <ScrollBoxDNA readOnly defaultValue={g.dnaSeq} />
                <ScrollBoxRNA readOnly defaultValue={g.rnaSeq} />
                <ScrollBoxAA readOnly defaultValue={g.aaSeq} />
              </div>
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
              <hr />
              <br />
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

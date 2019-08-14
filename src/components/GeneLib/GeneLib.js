import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class GeneLib extends Component {
  constructor() {
    super();
    this.state = {
      genes: []
    };
  }

  componentDidMount() {
    this.getGenes();
  }

  getGenes = () => {
    axios.get(`/api/metadata/genes/${this.props.userId}`).then(res => {
      this.setState({
        genes: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <hr />
        GeneLib
        <hr />
        {this.state.genes.map(g => (
          <div key={g.geneId}>
            <div className="gene-info">
              <hr />
              <h2>{g.geneName}</h2>
              <h5>{g.geneDesc}</h5>
              <h6>{g.dnaSeq}</h6>
              <h6>{g.rnaSeq}</h6>
              <h6>{g.aaSeq}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { userId } = reduxState;
  return { userId };
}

export default connect(mapStateToProps)(GeneLib);

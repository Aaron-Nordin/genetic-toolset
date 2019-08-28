import React, { Component } from "react";
import * as d3 from "d3";

export default class CircleWave extends Component {
  componentDidMount() {
    if (this.props.height > 500 && this.props.width > 500) {
      this.CircleWave();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.CircleWave();
  }

  CircleWave = () => {
    const node = d3.select(this.node);
    let width = +node.attr("width"),
      height = +node.attr("height"),
      angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

    // node
    //   .select("rect")
    //   .append("rect")
    //   .attr("width", "100%")
    //   .attr("height", "100%")
    //   .style("fill", "#444")
    //   .attr("fill", "black")
    //   .attr("zIndex", 0);

    var path = node
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("fill", "none")
      .attr("stroke-width", 10)
      .attr("stroke-linejoin", "round")

      .selectAll("path")
      .data(["#03fffb", "#FFF700"])
      .enter()
      .append("path")
      .attr("stroke", function(d) {
        return d;
      })
    //   .style("mix-blend-mode", "darken")
      .datum(function(d, i) {
        return d3
          .radialLine()
          .curve(d3.curveLinearClosed)
          .angle(function(a) {
            return a;
          })
          .radius(function(a) {
            var t = d3.now() / 1000;
            return (
              400 +
              Math.cos(a * 8 - (i * 2 * Math.PI) / 2 + t) *
                Math.pow((1 + Math.cos(a - t)) / 2, 3) *
                32
            );
          });
      });
    d3.timer(function() {
      path.attr("d", function(d) {
        return d(angles);
      });
    });
  };

  render() {
    return (
      <div>
        <svg
          id="circle-wave"
          ref={node => (this.node = node)}
          style={{ border: "2px solid #444", backgroundColor: "black" }}
          width={this.props.width}
          height={this.props.height}
        ></svg>
      </div>
    );
  }
}

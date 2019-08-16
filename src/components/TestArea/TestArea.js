import React, { Component } from "react";
import styled from "styled-components";

const OuterCont = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  padding: 40px 0;
  position: relative;
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: #333333;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  width: 60%;
`;

const Dark = styled.div`
  background: #333;
  color: white;
`;

export default class TestArea extends Component {
  render() {
    return (
      <OuterCont>
        <Dark title="DNA Assay 1" subtitle={"blah"} dark={true} id="dnaTest1">
          DNA Test 1
        </Dark>
        <div
          title=" DNA Assay 2"
          subtitle={"blahblah"}
          dark={false}
          id="dnaTest2"
        >
          DNA Test 2
        </div>
        <Dark
          title=" DNA Assay 3"
          subtitle={"blahblahblah"}
          dark={true}
          id="dnaTest3"
        >
          DNA Test 3
        </Dark>
        <div title="RNA Assay 1" subtitle={"blah"} dark={false} id="rnaTest1">
          RNA Test 1
        </div>
        <Dark
          title="RNA Assay 2"
          subtitle={"blahblah"}
          dark={true}
          id="rnaTest2"
        >
          RNA Test 2
        </Dark>
        <div
          title="RNA Assay 3"
          subtitle={"blahblahblah"}
          dark={false}
          id="rnaTest3"
        >
          RNA Test 3
        </div>
        <Dark title="AA Assay 1" subtitle={"blah"} dark={true} id="aaTest1">
          AA Test 1
        </Dark>
        <div title="AA Assay 2" subtitle={"blahblah"} dark={false} id="aaTest2">
          AA Test 2
        </div>
        <Dark
          title="AA Assay 3"
          subtitle={"blahblahblah"}
          dark={true}
          id="aaTest3"
        >
          AA Test 3
        </Dark>
      </OuterCont>
    );
  }
}

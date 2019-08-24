import React, { Component } from "react";
import styled from "styled-components";
import DNA1Transcription from "../Assays/DNA1Transcription";
import DNA2gcContent from "../Assays/DNA2gcContent";
import DNA3TelomereIdent from "../Assays/DNA3TelomereIdent";
import RNA1Translation from "../Assays/RNA1Translation";
import RNA2RevTranscription from "../Assays/RNA2RevTranscription";

const OuterCont = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  /* padding: 40px 0; */
  position: relative;
  display: block;
  /* overflow-y: scroll; */
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: #333333;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  width: 100%;
  max-height: 100%;

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1a97ba;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #1a97ba;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1a97ba;
  }
`;

const DarkTest = styled.div`
  background: rgb(130, 138, 146);
  color: #fafafa;
  /* border-left: 2px solid #343a40;
  border-bottom: 2px solid #343a40; */
  /* border-right: 2px solid #fafafa;
  border-top: 2px solid #fafafa; */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.7);
`;

const LightTest = styled(DarkTest)`
  background: #fafafa;
  color: #333;
  border: none;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.7);
`;

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at. Pellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu. Odio aenean sed adipiscing diam. Volutpat ac tincidunt vitae semper quis lectus. Tristique magna sit amet purus. Euismod in pellentesque massa placerat duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Orci sagittis eu volutpat odio. Purus faucibus ornare suspendisse sed nisi lacus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Habitant morbi tristique senectus et netus et. Porta non pulvinar neque laoreet suspendisse. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tellus integer feugiat scelerisque varius. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pharetra et ultrices neque ornare aenean euismod. Proin sagittis nisl rhoncus mattis rhoncus. Nisi quis eleifend quam adipiscing vitae. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Non arcu risus quis varius quam quisque id diam. Pharetra magna ac placerat vestibulum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sed id semper risus in hendrerit gravida. Ultrices eros in cursus turpis massa. Non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor neque vitae tempus quam. Varius quam quisque id diam vel.";

export default class TestArea extends Component {
  render() {
    return (
      <OuterCont>
        <DarkTest
          title="DNA Assay 1"
          subtitle={dummyText}
          DarkTest={true}
          id="dnaTest1"
        >
          <DNA1Transcription />
        </DarkTest>
        <LightTest
          title=" DNA Assay 2"
          subtitle={dummyText}
          LightTest={true}
          id="dnaTest2"
        >
          <DNA2gcContent />
        </LightTest>
        <DarkTest
          title=" DNA Assay 3"
          subtitle={dummyText}
          DarkTest={true}
          id="dnaTest3"
        >
          <DNA3TelomereIdent />
        </DarkTest>
        <LightTest
          title="RNA Assay 1"
          subtitle={dummyText}
          LightTest={true}
          id="rnaTest1"
        >
          <RNA1Translation />
        </LightTest>
        <DarkTest
          title="RNA Assay 2"
          subtitle={dummyText}
          DarkTest={true}
          id="rnaTest2"
        >
          <RNA2RevTranscription />
        </DarkTest>
        <LightTest
          title="RNA Assay 3"
          subtitle={dummyText}
          LightTest={true}
          id="rnaTest3"
        >
          <h1>RNA Test 3</h1>
          <p>{dummyText}</p>
        </LightTest>
        <DarkTest
          title="AA Assay 1"
          subtitle={dummyText}
          DarkTest={true}
          id="aaTest1"
        >
          <h1>AA Test 1</h1>
          <p>{dummyText}</p>
        </DarkTest>
        <LightTest
          title="AA Assay 2"
          subtitle={dummyText}
          LightTest={true}
          id="aaTest2"
        >
          <h1>AA Test 2</h1>
          <p>{dummyText}</p>
        </LightTest>
        <DarkTest
          title="AA Assay 3"
          subtitle={dummyText}
          DarkTest={true}
          id="aaTest3"
        >
          <h1>AA Test 3</h1>
          <p>{dummyText}</p>
        </DarkTest>
      </OuterCont>
    );
  }
}

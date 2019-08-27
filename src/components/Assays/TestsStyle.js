import styled from "styled-components";
import { mediaQuerySize } from "../../mediaQueries";

export const TestsCont = styled.div`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  display: list-item;
`;

export const SectionHeading = styled.label`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  color: #333333;
  margin: 0;
  padding: 12.5px 20px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  text-transform: none;
`;

export const HeadingText = styled.span`
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: inline-block;
  vertical-align: middle;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 24px;
  padding-top: 12px;

  /* @media ${mediaQuerySize[850]} {
    font-size: 14px;
  } */
`;

export const HideIcon = styled.svg`
  height: 1.5em;
  width: 1.5em;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  vertical-align: middle;
  float: right;
  transform: rotateZ(0deg);
  transition: transform 0.2s ease-out 0s;
  overflow: hidden;
`;

export const SubListCont = styled.ul`
  font-size: 0.9rem;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  margin: 0;
  padding: 0;
  list-style-type: circle;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 20px;
  padding-inline-end: 10px;

  /* @media ${mediaQuerySize[1000]} {
    padding-inline-end: 0px;
    padding-inline-start: 0px;
  } */
`;

export const SubListItemCont = styled.li`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  display: list-item;
  /* text-align: -webkit-match-parent; */
  font-size: 0.9em;
`;

export const SubListItem = styled.label`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  margin: 0;
  padding: 12.5px 20px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #333333;
  :hover {
    font-weight: bold;
    box-shadow: inset 0 0 8px rgba(52, 58, 64, 0.8);
  }

  /* @media ${mediaQuerySize[1000]} {
    padding: 0;
  } */
`;

export const Item = styled.span`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: inline-block;
  vertical-align: middle;
  width: calc(100% - 38px);
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 1px;
  font-size: 20px;
  /* @media ${mediaQuerySize[850]} {
    font-size: 12px;
  } */
`;

export const IconItem = styled.img`
  width: 42px;
  display: inline-block;
  height: 42px;
  line-height: 13px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;
  rotate: 90;
  transform: rotate(90deg);

  /* @media ${mediaQuerySize[850]} {
    width: 20px;
    height: 20px;
  } */
`;

//------------------------INPUTS/TXTAREAS----------------------------

export const InputStyleDNA = styled.textarea`
  width: 60vw;
  height: 20vh;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  outline: none;
  overflow-y: scroll;
  :focus {
    border: 2px solid #9f1829;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar {
    width: 18px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #9f1829;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #9f1829;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9f1829;
  }
`;

export const InputStyleRNA = styled(InputStyleDNA)`
  outline: none;
  :focus {
    border: 2px solid #1a97ba;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #1a97ba;
  }
  ::-webkit-scrollbar-thumb {
    background: #1a97ba;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1a97ba;
  }
`;

//------------------------------------------------------------------

//---------------------------CONTAINERS-----------------------------

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3% 0%;
`;

export const TestNameAndDescCont = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 3% 5%;
`;

//------------------------------------------------------------------

//-----------------------------BUTTONS------------------------------

export const InputButtonStyle1 = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  width: 15vw;
  height: 2em;
  margin-top: 10px;
  background: #343a40;
  color: #fafafa;
  transition: 0.5s;
  border: 2px solid #fafafa;
  :hover {
    background: #fafafa;
    color: #343a40;
    border: 2px solid #343a40;
  }
`;

export const InputButtonStyle3 = styled.button`
  width: 15vw;
  height: 2em;
`;

//------------------------------------------------------------------

//----------------------------DIVS----------------------------------

export const TestDNA1Output = styled.textarea`
  width: 60vw;
  height: 20vh;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  color: black;
  outline: none;
  background-color: #fafafa;
  overflow-y: scroll;
  :focus {
    border: 2px solid #1a97ba;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar {
    width: 18px;
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

export const TestOutputAA = styled.textarea`
  width: 60vw;
  height: 20vh;
  font-family: "Montserrat", sans-serif;
  color: black;
  outline: none;
  background-color: #fafafa;
  overflow-y: scroll;
  :focus {
    border: 2px solid #64ad37;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar {
    width: 18px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #64ad37;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #64ad37;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #64ad37;
  }
`;

export const TestOutputRNA = styled(TestOutputAA)`
  :focus {
    border: 2px solid #343a40;
  }
  ::-webkit-scrollbar {
    width: 18px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #343a40;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #343a40;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #343a40;
  }
`;

export const TestOutputDNA = styled(TestOutputAA)`
  :focus {
    border: 2px solid #9f1829;
  }
  ::-webkit-scrollbar {
    width: 18px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #9f1829;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #9f1829;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9f1829;
  }
`;

//------------------------------------------------------------------

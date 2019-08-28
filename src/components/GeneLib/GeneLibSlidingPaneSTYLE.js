import styled from "styled-components";
import { mediaQuerySize } from "../../mediaQueries";

//-----------------------------H'S--------------------------------------

export const DarkH4 = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: #333;
  ::selection {
    background-color: rgba(52, 58, 64, 0.2);
    color: #343a40;
  }

  /* @media ${mediaQuerySize[850]} {
    font-size: 18px;
  } */
`;

//----------------------------------------------------------------------

//--------------------------CONTAINERS----------------------------------

export const GeneContainer = styled.div`
  padding: 2em 2.5em;
  margin-bottom: 3vh;
  position: relative;
`;

export const AddGeneContainer = styled.div`
  padding: 2em 2.5em;
  margin-bottom: 3vh;
  position: relative;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  border: 2px dotted #343a40;
  border-radius: 5px;
`;

export const HContainerStyle1 = styled.div`
  width: 80%;
  height: 10%;
  white-space: normal;
  margin: 0;
  /* overflow-y: scroll; */
  :focus {
    border: 2px solid #343a40;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar {
    width: 12px;
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
  ::selection {
    background-color: rgba(52, 58, 64, 0.2);
    color: #343a40;
  }
`;

//----------------------------------------------------------------------

//---------------------------BUTTONS------------------------------------

export const DarkToLightButton = styled.button`
  width: 15vw;
  height: 2em;
  margin-top: 10px;
  background: #343a40;
  color: #fafafa;
  transition: 0.5s;
  border: 2px solid #fafafa;
  font-size: 24px;
  :hover {
    background: #fafafa;
    color: #343a40;
    border: 2px solid #343a40;
  }
  :focus {
    outline: none;
  }
  /* @media ${mediaQuerySize[850]} {
    font-size: 14px;
  } */
`;

export const InputButton = styled(DarkToLightButton)`
  width: 19.5%;
`;

//----------------------------------------------------------------------
//----------------------------INPUTS------------------------------------

export const InputName = styled.input`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  width: 39%;
  height: 48px;
  outline: none;
  border: 2px dotted #343a40;
  border-radius: 5px;
  
  :focus {
    border: 2px solid #343a40;
    border-radius: 5px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar {
    width: 12px;
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
  /* @media ${mediaQuerySize[850]} {
    font-size: 14px;
  } */
`;

export const DarkToLightInput = styled.input`
  width: 15vw;
  height: 2em;
  margin-top: 10px;
  background: #343a40;
  color: #fafafa;
  transition: 0.5s;
  border: 2px solid #fafafa;
  font-size: 24px;
  ::-webkit-file-upload-button{ visibility: hidden; }
  :hover::before {
    background: #fafafa;
    color: #343a40;
    border: 2px solid #343a40;
  }
  :focus {
    outline: none;
  }
  /* @media ${mediaQuerySize[850]} {
    font-size: 14px;
  } */
`;

//----------------------------------------------------------------------

//----------------------------TEXTAREAS---------------------------------

export const ScrollBoxDNA = styled.textarea`
  border: none;
  padding: 5px 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  color: #333;
  width: 26.6667%;
  height: 200px;
  outline: none;
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
  ::selection {
    background-color: rgba(159, 24, 41, 0.2);
    color: #9f1829;
  }

  /* @media ${mediaQuerySize[850]} {
    font-size: 12px;
  } */
`;
export const ScrollBoxRNA = styled(ScrollBoxDNA)`
  :focus {
    border: 2px solid #1a97ba;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
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
  ::selection {
    background-color: rgba(26, 151, 186, 0.2);
    color: #1a97ba;
  }
`;
export const ScrollBoxAA = styled(ScrollBoxDNA)`
  :focus {
    border: 2px solid #64ad37;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #64ad37;
  }
  ::-webkit-scrollbar-thumb {
    background: #64ad37;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #64ad37;
  }
  ::selection {
    background-color: rgba(100, 173, 55, 0.2);
    color: #64ad37;
  }
`;
export const ScrollBoxDesc = styled(ScrollBoxDNA)`
  width: 80%;
  :focus {
    border: 2px solid #343a40;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #343a40;
  }
  ::-webkit-scrollbar-thumb {
    background: #343a40;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #343a40;
  }
  ::selection {
    background-color: rgba(52, 58, 64, 0.2);
    color: #343a40;
  }
`;

export const InputDNA = styled.textarea`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  width: 39%;
  height: 200px;
  outline: none;
  border: 2px dotted #9f1829;
  border-radius: 5px;
  :focus {
    border: 2px solid #9f1829;
    border-radius: 5px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar {
    width: 12px;
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
  /* @media ${mediaQuerySize[850]} {
    font-size: 12px;
  } */
`;
export const InputRNA = styled(InputDNA)`
  border: 2px dotted #1a97ba;
  margin-left: 2%;
  :focus {
    border: 2px solid #1a97ba;
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
export const InputDesc = styled(InputDNA)`
  width: 80%;
  border: 2px dotted #343a40;
  :focus {
    border: 2px solid #343a40;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #343a40;
  }
  ::-webkit-scrollbar-thumb {
    background: #343a40;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #343a40;
  }
`;

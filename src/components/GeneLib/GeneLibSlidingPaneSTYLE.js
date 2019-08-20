import styled from "styled-components";
export const AddGeneButton = styled.button`
  width: 15vw;
  height: 2em;
  margin-top: 10px;
  background: #343a40;
  color: #fafafa;
  transition: 1s;
  border: 2px solid #fafafa;
  :hover {
    background: #fafafa;
    color: #343a40;
    border: 2px solid #343a40;
  }
`;
export const ScrollBoxDNA = styled.textarea`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  width: 26.6667%;
  height: 200px;
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
`;
export const ScrollBoxRNA = styled(ScrollBoxDNA)`
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
export const ScrollBoxAA = styled(ScrollBoxDNA)`
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #64ad37;
  }
  ::-webkit-scrollbar-thumb {
    background: #64ad37;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #64ad37;
  }
`;
export const ScrollBoxDesc = styled(ScrollBoxDNA)`
  width: 80%;
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
export const InputButton = styled.button`
  width: 19.5%;
  height: 2em;
  margin-top: 10px;
  background: #555;
  color: #fafafa;
  transition: 1sec;
  border: 2px solid #fafafa;
  :hover {
    background: #fafafa;
    color: #555;
    border: 2px solid #555;
  }
`;
export const InputDNA = styled.textarea`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  width: 39%;
  height: 200px;
  outline: none;
  border: 2px dotted #9f1829;
  border-radius: 5px;
  :focus {
    border: 2px solid #9f1829;
    border-radius: 5px;
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
export const InputName = styled.input`
  border: none;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  width: 39%;
  height: 40px;
  outline: none;
  border: 2px dotted #343a40;
  border-radius: 5px;
  :focus {
    border: 2px solid #343a40;
    border-radius: 5px;
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
`;

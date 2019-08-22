import styled from "styled-components";

export const DarkToLightButton = styled.button`
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

export const Input = styled.input`
  position: relative;
  padding: 10px 15px;
  background-color: rgba(52, 58, 64, 0.25);
  color: #333;
  outline: none;
  margin-top: 10px;
  width: 15vw;
  transition: 0.3s all;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  :hover {
    background-color: rgba(52, 58, 64, 0.25);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
  }
  :focus {
    border: 3px solid #555;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-around;
  justify-content: center;
  position: absolute;
  /* bottom: 5%; */
  width: 25%;
  height: 85%;
  /* padding-top: 20px; */
  color: #f1f1f1;
  border: 2px solid red;
  background: rgba(0, 0, 0, 0.9);
`;

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  bottom: 30%;
  border: 2px solid yellow;
  width: 100%;
  height: 45%;
`;

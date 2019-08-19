import styled from "styled-components";

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
  font-size: 1.3em;
  font-weight: bold;
  text-transform: none;
`;

export const HeadingText = styled.span`
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  display: inline-block;
  vertical-align: middle;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
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
  padding-inline-start: 40px;
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
  color: #333333;
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
`;

export const IconItem = styled.img`
  width: 32px;
  display: inline-block;
  height: 32px;
  line-height: 13px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;
  rotate: 90;
  transform: rotate(90deg);
`;

//------------------------INPUTS/TXTAREAS----------------------------

export const InputStyle1 = styled.textarea`
  width: 50vw;
  height: 20vh;
  font-family: "Montserrat", sans-serif;

  overflow-y: scroll;
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

//------------------------------------------------------------------

//---------------------------CONTAINERS-----------------------------

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

//------------------------------------------------------------------

//-----------------------------BUTTONS------------------------------

export const InputButtonStyle1 = styled.button`
  width: 15vw;
  height: 2em;
`

//------------------------------------------------------------------

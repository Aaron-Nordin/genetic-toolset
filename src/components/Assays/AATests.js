import React, { Component } from "react";
import {
  TestsCont,
  SectionHeading,
  HeadingText,
  HideIcon,
  SubListCont,
  SubListItemCont,
  SubListItem,
  IconItem,
  Item
} from "./TestsStyle.js";

export default class AATests extends Component {
  render() {
    return (
      <TestsCont>
        <SectionHeading>
          <HeadingText>AATests</HeadingText>
          <HideIcon>Later</HideIcon>
        </SectionHeading>
        <SubListCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/AAIcon.png"
                alt="DNA icon"
              />
              <Item>AA Test 1</Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/AAIcon.png"
                alt="DNA icon"
              />
              <Item>AA Test 2</Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/AAIcon.png"
                alt="DNA icon"
              />
              <Item>AA Test 3</Item>
            </SubListItem>
          </SubListItemCont>
        </SubListCont>
      </TestsCont>
    );
  }
}

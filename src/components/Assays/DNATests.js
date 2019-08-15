import React, { Component } from "react";
import styled from "styled-components";
import {
  DNATestsCont,
  SectionHeading,
  HeadingText,
  HideIcon,
  SubListCont,
  SubListItemCont,
  SubListItem,
  IconItem,
  Item
} from "./TestsStyle.js"



export default class DNATests extends Component {
  render() {
    return (
      <DNATestsCont>
        <SectionHeading>
          <HeadingText>DNATests</HeadingText>
          <HideIcon>Later</HideIcon>
        </SectionHeading>
        <SubListCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/DNAIcon.png"
                alt="DNA icon"
              />
              <Item>DNA Test 1</Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/DNAIcon.png"
                alt="DNA icon"
              />
              <Item>DNA Test 2</Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/DNAIcon.png"
                alt="DNA icon"
              />
              <Item>DNA Test 3</Item>
            </SubListItem>
          </SubListItemCont>
        </SubListCont>
      </DNATestsCont>
    );
  }
}

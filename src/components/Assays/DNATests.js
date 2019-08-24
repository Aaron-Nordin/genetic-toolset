import React, { Component } from "react";
import { Link } from "react-scroll";
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

export default class DNATests extends Component {
  render() {
    return (
      <TestsCont>
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
              <Item>
                <Link
                  activeClass="active"
                  to="dnaTest1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                Transcription
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/DNAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="dnaTest2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  GC Content
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/DNAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="dnaTest3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Telomere Identification
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
        </SubListCont>
      </TestsCont>
    );
  }
}

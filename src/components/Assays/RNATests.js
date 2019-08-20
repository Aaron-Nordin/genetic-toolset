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

export default class RNATests extends Component {
  render() {
    return (
      <TestsCont>
        <SectionHeading>
          <HeadingText>RNATests</HeadingText>
          <HideIcon>Later</HideIcon>
        </SectionHeading>
        <SubListCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/RNAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="rnaTest1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Translation
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/RNAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="rnaTest2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  RNA Test 2
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/RNAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="rnaTest3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  RNA Test 3
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
        </SubListCont>
      </TestsCont>
    );
  }
}

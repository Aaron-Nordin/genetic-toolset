import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
              <Item>
                <Link
                  activeClass="active"
                  to="aaTest1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  AA Test 1
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/AAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="aaTest2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  AA Test 2
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
          <SubListItemCont>
            <SubListItem>
              <IconItem
                src="http://localhost:5555/static/AAIcon.png"
                alt="DNA icon"
              />
              <Item>
                <Link
                  activeClass="active"
                  to="aaTest3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  AA Test 3
                </Link>
              </Item>
            </SubListItem>
          </SubListItemCont>
        </SubListCont>
      </TestsCont>
    );
  }
}

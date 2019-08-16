import React, { Component } from 'react';
import styled from "styled-components";

const OuterCont = styled.div`
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    padding: 40px 0;
    position: relative;
    display: block;
    font-family: Roboto,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
    color: #333333;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    width: 60%;
`

export default class TestArea extends Component {
    render() {
        return (
            <OuterCont>
                DNA Test 1
                DNA Test 2
                DNA Test 3
                RNA Test 1
                RNA Test 2
                RNA Test 3
                AA Test 1
                AA Test 2
                AA Test 3
            </OuterCont>
        )
    }
}

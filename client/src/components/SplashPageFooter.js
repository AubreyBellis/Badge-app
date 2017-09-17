import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterDiv = styled.div`
    width: 100vw;
    height: 7vh;
    background-color:rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    align-content:center;
    box-shadow: 0px 0px 15px black;
    font-family: 'Fjalla One', sans-serif;
    h3{
        color: white;
        font-size: 16px;
        font-weight: bold;
        margin: 3px 15px;
        text-decoration: none;
        align-content:center;
        align-items:center;
    }
`

class SplashPageFooter extends Component {
    render() {
        return (
            <FooterDiv>

<h3> &#x2661; &#x2661; &#x2661; Aubrey Ellis</h3>
            </FooterDiv>
        );
    }
}

export default SplashPageFooter;
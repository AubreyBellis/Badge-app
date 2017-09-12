import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';


const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("https://i.imgur.com/qgDxzSY.jpg");
background-size: stretch;
background-position: center;
background-filter: blur(2px);
h1,h3,div {
    
    text-align:center;
}`

class SplashPage extends Component {
    render() {
        return (
                <div>
                <HomePageContainer>
                <h1>Badge_of_Honor</h1>
                <h3> Description about App</h3>
                </HomePageContainer>
                </div>
        );
    }
}
export default SplashPage;
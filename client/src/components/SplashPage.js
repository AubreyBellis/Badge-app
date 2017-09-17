import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import SplashPageFooter from './SplashPageFooter';
import axios from 'axios';
const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("https://i.imgur.com/qgDxzSY.jpg");
background-size: stretch;
background-position: center;

h1{
    font-family: 'Barrio', cursive;
    text-align:center;
    font-size:85px;
}
h2, h3{
    font-size: 45px;
    text-align:center;
    align-content:center;
    font-family: 'Fjalla One', sans-serif;
}
`

class SplashPage extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
        }
    }

    componentWillMount() {
        this._getQuotes();  
    }

    _getQuotes = async () => {
        try {
            const res = await axios.get(`http://quotes.rest/qod.json`) 
            await this.setState({ quotes: res.data })
            return res.data
        }
        catch (error) {
            await this.setState({ error: error.message})
            return error.message
        }
    }
    render() {
        return (
                <div>
                <HomePageContainer>
                <h1>YEARBOOK_ON_RAILS</h1>

                <br />
                <br />
                <h3> Take your <strong>Glory Days</strong> with you anywhere!</h3>
            
                <br />
                </HomePageContainer>
                <SplashPageFooter></SplashPageFooter>
             
                </div>
        );
    }
}
export default SplashPage;
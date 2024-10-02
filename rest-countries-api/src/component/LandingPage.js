import React,  {useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';
import '../style/landingPageStyle.css';
import funCountry from '../functions/mainFunction.js'

const LandingPage = (props) => {


    return (
        <div className="container">
            <Header/>
            <Search/>
            <MainContent/>
        </div>
    )
}

export default LandingPage;
import React,  {useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';
import '../style/landingPageStyle.css';

const LandingPage = (props) => {


    return (
        <main>
            <Header/>
            <Search/>
            <MainContent/>
        </main>
    )
}

export default LandingPage;
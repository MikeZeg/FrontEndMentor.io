import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';
import '../style/landingPageStyle.css';
import { useGrabApi } from '../functions/mainFunction.js'

const LandingPage = (props) => {

    const [ countrys, setCountrys ] = useState(useGrabApi)

    console.log('Check: ', countrys)

    return (
        <div className="container">
            <Header/>
            <Search
            
            />
            <MainContent

            />
        </div>
    )
}

export default LandingPage;
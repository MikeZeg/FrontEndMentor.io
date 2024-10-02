import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';
import '../style/landingPageStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const LandingPage = (props) => {

    const [ countrys, setCountrys ] = grabApi('')

    useEffect((data)=>{
        // setCountrys(grabApi)   
    })
    

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
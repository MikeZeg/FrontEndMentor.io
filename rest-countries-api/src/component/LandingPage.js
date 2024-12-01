import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';

import '../style/landingPageStyle.css';
import { grabApi, openWindow } from '../functions/mainFunction.js'

const LandingPage = (props) => {
    const [ countrys, setCountrys ] = useState([])
    const [ dataSearch, setDataSearch ]  = useState([])
    
// receiving data from Search 
    function searchCallBack(data){
        // console.log('receiving data from Search.js')
        setDataSearch(data);
    }

// that change object to Array, can be use by MainContent.js
    useEffect(()=>{
        setCountrys([...dataSearch])
    },[dataSearch])

    return (
        <div className="container">
            <Header/>
            <Search
                //receiving data from Search.js
                changeData = {searchCallBack}
            />
            <MainContent
                data = {countrys}
            />
        </div>
    )
}
export default LandingPage;
import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';

import '../style/landingPageStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const LandingPage = (props) => {
    const [ countrys, setCountrys ] = useState([])
    const [ dataSearch, setDataSearch ]  = useState([])

    console.log('check data from Search.js: ', dataSearch)

//receiving data from Search 
    function searchCallBack(data){
        setDataSearch(data);
    }


//that change object to Array to can be used in MainContent.js
    useEffect(()=>{
        setCountrys([...dataSearch])
        // console.log('check data after ansing new data to country: -->>>>> ', countrys)
    },[dataSearch])


    return (
        <div className="container">
            <Header/>
            <Search
                //receiving data from Search.js short version
                changeData = {searchCallBack}
                
            />
            <MainContent
                data = {countrys}
            />
        </div>
    )
}
export default LandingPage;
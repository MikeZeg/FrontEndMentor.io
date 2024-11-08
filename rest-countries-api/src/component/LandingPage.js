import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';

import '../style/landingPageStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const LandingPage = (props) => {
    const [ countrys, setCountrys ] = useState([])
    const [ dataSearch, setDataSearch ]  = useState([])

    console.log('check data if saved: ', dataSearch)

//receiving data from Search 
    function searchCallBack(data){
        console.log('receiving data from Search.js')
        setDataSearch(data);
    }

//that change object to Array to can be used in MainContent.js
    useEffect(()=>{
        setCountrys([...dataSearch])
        console.log('set data in countrys variabel')
        // console.log('check data after ansing new data to country: -->>>>> ', countrys)
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
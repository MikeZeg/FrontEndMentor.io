import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';

import '../style/landingPageStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const LandingPage = (props) => {
    const [ countrys, setCountrys ] = useState([])
    const [ list, setList ] = useState([])
    
// waiting for data from mainFunction
    useEffect(()=>{
        // console.log('check array: ', countrys);
        const handelData = () => {
            grabApi().then((myData) => {
                setCountrys(myData)
                setList(myData)
            })
        }
        handelData()
    },[])

// data from Search.js - sorting by typing letters
    const lookingCountry = (data) => {
        setList(data)
    }

    return (
        <div className="container">
            <Header/>
            <Search
                changeData  = {list => lookingCountry}
                
            />
            <MainContent
                data = {countrys}
            />
            
        </div>
    )
}
export default LandingPage;
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
                // setList(myData)
            })
        }
        handelData()
    },[])

// data from Search.js - sorting by typing letters
    const handelData = (data) => {
        this.setList({data})
    }
    console.log('received data from Search.js: ', list)

    return (
        <div className="container">
            <Header/>
            <Search
                changeData  = {handelData}
                
            />
            <MainContent
                data = {countrys}
            />
            
        </div>
    )
}
export default LandingPage;
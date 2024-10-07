import React,  {useEffect, useState } from "react";
import Header from './Header.js';
import Search from './Search.js';
import MainContent from './MainContent.js';
import '../style/landingPageStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const LandingPage = (props) => {
    const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'

    const [ countrys, setCountrys ] = useState([])
    
// waiting for data from mainFunction
    useEffect(()=>{
        // setCountrys(grabApi())
        console.log('check array: ', countrys);
        const handelData = () => {
            grabApi().then((myData) => {
                setCountrys(myData)
            })
        }
        handelData()
    },[])
    
    console.log('data in landingPage: ',countrys)

    console.log('data received: ', countrys.length)

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
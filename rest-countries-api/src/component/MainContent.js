import React, { useEffect, useState } from "react";
import '../style/mainContent.css';
import '../style/variable.css';
import SelectedCountry from './SelectedCountry.js'
import { openWindow, goBack, darkModeSwap, selectedCountryVar  } from '../functions/mainFunction.js' 

const MainContent = (props) => {
    const [ country, setCountryArr] = useState([])
    const [ secondData, setSecondData ] = useState([])
    const [ selected, setSelected ] = useState('')
    
// set data from 
    useEffect(() => {
        setCountryArr(props.data);
    })
// callBack function to CountryWindow.js - received selected component
    function selectedElement(data) {
        setSelected(data)
    }
// ------ Component - display elements ---------
    const CountryWindow = ({data, index, select}) => {

    //callBack function return element to MainContent
        function elementSelected(e) {
            select(e)
            openWindow()
        }

        let name = data.name.common;
        let population = data.population;
        let region = data.region;
        let capital = data.capital;
        let countryImg = data.flags.png
        let keyData = {index}

        return (
            <div id={index} className="mainContentStyle" key={index} onClick={(e)=>{
                    elementSelected(e)
            }}>
                <figure className="mainContent_figure" >
                    <img 
                    src={countryImg}
                    alt={index} className="mainContent_figure_img">
                    </img>
                    <figcaption></figcaption>
                </figure>
                <div className="mainContent_countryBlock">
                    <h3 style={{marginLeft:'1rem', marginTop:'1rem'}}>{name}</h3>
                    <h4 style={{marginLeft:'1rem'}}>Population:<p> {population}</p></h4>
                    <h4 style={{marginLeft:'1rem'}}>Region:<p> {region}</p></h4>
                    <h4 style={{marginLeft:'1rem'}}>Capital:<p> {capital}</p></h4>
                </div>
            </div>
        )
    }
    
    return (
        <div style={{width:'100%'}}>
            <section className="main_style">
                {country.map((country, index) => (
                        <CountryWindow 
                            data={country}
                            index = {index}
                            select = {selectedElement}
                        />
                ))}
            </section>
            <SelectedCountry
                data = {country}
                details = {selected}
            />
        </div>
    )
}

export default MainContent;
import React, { useState } from "react";
import '../style/mainContent.css';
import '../style/variable.css';



const MainContent = (props) => {

    const CountryWindow = () =>{
        return (
            <div id="keyData" className="mainContentStyle">
                <figure className="mainContent_figure">
                    <img src="" alt="keyData" className="mainContent_figure_img"></img>
                    <figcaption></figcaption>
                </figure>
                <div className="mainContent_countryBlock">
                    <h3 style={{marginLeft:'1rem', marginTop:'1rem'}}>Country Name</h3>
                    <h4 style={{marginLeft:'1rem'}}>Population:<p> 81,770,900</p></h4>
                    <h4 style={{marginLeft:'1rem'}}>Region:<p> Europe</p></h4>
                    <h4 style={{marginLeft:'1rem'}}>Capital:<p> Berlin</p></h4>
                </div>
            </div>
        )
    }
    
    return (
        <div style={{width:'100%'}}>
            <section className="main_style">
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
                <CountryWindow/>
            </section>
        </div>
    )
}

export default MainContent;
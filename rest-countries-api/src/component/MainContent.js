import React, { useState } from "react";
import '../style/mainContent.css';
import '../style/variable.css'



const MainContent = (props) => {

    const CountryWindow = () =>{
        return (
            <div id="keyData" className="mainContentStyle">
                <figure className="mainContent_figure">
                    <img src="" alt="keyData" className="mainContent_figure_img"></img>
                    <figcaption></figcaption>
                </figure>
                <div className="mainContent_countryBlock">
                    <h3>Country Name</h3>
                    <h4 >Population: <p>81,770,900</p></h4>
                    <h4 >Region: <p>Europe</p></h4>
                    <h4 >Capital: <p>Berlin</p></h4>
                </div>
            </div>
        )
    }
    
    return (
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
    )
}

export default MainContent;
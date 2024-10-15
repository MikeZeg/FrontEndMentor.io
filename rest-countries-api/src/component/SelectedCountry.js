import React, {useState,useEffect} from "react";
import '../style/selectedCountryStyle.css'
import '../style/variable.css'
import Header from './Header.js'
import { goBack } from '../functions/mainFunction.js'

const SelectedCountry = (props) => {

    const countryName = 'Poland';
    const population = '36900000';
    const nativeName = 'Polska';
    const region = 'Europ';
    const subRegion = 'West Europ';
    const capital = 'Warsaw';
    const topLevelDomain = '.pl';
    const currencies = 'Zloty';
    const languages = 'Polish';
    const flagImg = 'https://flagcdn.com/af.svg';

    const borderArr = ['Germany','Czech','Slovakia','Ukrain','Litva']

    return (
        <div className="hidenSection">
            <div className="buttonPress">
                <button className="btn btnBack"
                    onChange={()=>{goBack()}}
                ><span></span>Back</button>
            </div>
            <article className="selectedCountry">
                <figure className="countryFlag">
                    <img src={flagImg} className="selectedCountryImage"></img>
                </figure>

                <div className="countryInfo">
                    <section className="countryName">
                        <h1>{countryName}</h1>
                    </section>

                    <section className="countryDetails">
                        <h2> <span>Native Name:</span> {nativeName}</h2>
                        <h2><span>Population:</span> {population}</h2>
                        <h2><span>Region:</span> {region}</h2>
                        <h2><span>Sub Region:</span> {subRegion}</h2>
                        <h2><span>Capital:</span> {capital}</h2>
                        <h2><span>Top Level Domain:</span> {topLevelDomain}</h2>
                        <h2><span>Currencies:</span> {currencies}</h2>
                        <h2><span>Languages: </span> {languages}</h2>
                    </section>

                    <section className="countryBorder">
                        <div className="flexCountryBorder">
                            <h3>Border Country:</h3>
                            {borderArr.map((border, index) => (
                                <p className="borderCountry">{border}</p>
                            ))}
                            
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default SelectedCountry;
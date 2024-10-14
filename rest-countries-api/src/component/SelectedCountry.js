import React, {useState,useEffect} from "react";
import '../style/selectedCountryStyle.css'
import '../style/variable.css'
import Header from './Header.js'

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

    return (
        <div className="hidenSection">
            <div>
                <button className="btn btnBack"><span></span>Back</button>
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
                        <h2>Native Name: <span>{nativeName}</span></h2>
                        <h2>Population: <span>{population}</span></h2>
                        <h2>Region<span>{region}</span></h2>
                        <h2>Sub Region:<span>{subRegion}</span></h2>
                        <h2>Capital: <span>{capital}</span></h2>
                        <h2>Top Level Domain: <span>{topLevelDomain}</span></h2>
                        <h2>Currencies: <span>{currencies}</span></h2>
                        <h2>Languages: <span>{languages}</span></h2>
                    </section>

                    <section className="countryBorder">
                        <h3>Border Country:</h3>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default SelectedCountry;
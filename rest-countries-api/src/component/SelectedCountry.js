import React, {useState,useEffect} from "react";
import '../style/selectedCountryStyle.css'
import '../style/variable.css'
import Header from './Header.js'
import { openWindow, goBack } from '../functions/mainFunction.js'

const SelectedCountry = (data) => {
    const [country, setCountry] = useState({
        countryName:'Poland',
        population:'36900000',
        nativeName: 'Polska',
        region:'Europ',
        subRegion:'West Europ',
        capital:'Warsaw',
        topLevelDomain: '.pl',
        currencies : 'Zloty',
        languages : 'Polish',
        flagImg :'https://flagcdn.com/af.svg',

        borderArr:['Germany','Czech','Slovakia','Ukrain','Litva']
    })

    useEffect(()=>{
        // setCountry()
    })
    // console.log('check data: ', data)
    // console.log(country.flagImg)

    

    return (
        <div className="hidenSection">
            <div className="buttonPress">
                <button 
                    className="btn btnBack"
                    id="back-btn"
                    onClick={()=>{goBack()}}
                ><span></span>Back</button>
            </div>
            <article className="selectedCountry">
                <figure className="countryFlag">
                    <img src={country.flagImg} className="selectedCountryImage"></img>
                </figure>

                <div className="countryInfo">
                    <section className="countryName">
                        <h1>{country.countryName}</h1>
                    </section>

                    <section className="countryDetails">
                        <h2> <span>Native Name:</span> {country.nativeName}</h2>
                        <h2><span>Population:</span> {country.population}</h2>
                        <h2><span>Region:</span> {country.region}</h2>
                        <h2><span>Sub Region:</span> {country.subRegion}</h2>
                        <h2><span>Capital:</span> {country.capital}</h2>
                        <h2><span>Top Level Domain:</span> {country.topLevelDomain}</h2>
                        <h2><span>Currencies:</span> {country.currencies}</h2>
                        <h2><span>Languages: </span> {country.languages}</h2>
                    </section>

                    <section className="countryBorder">
                        <div className="flexCountryBorder">
                            <h3>Border Country:</h3>
                            {country.borderArr.map((border, index) => (
                                <p className="borderCountry" key={index}>{border}</p>
                            ))}
                            
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default SelectedCountry;
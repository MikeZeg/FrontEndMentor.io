import React, {useState,useEffect} from "react";
import '../style/selectedCountryStyle.css'
import '../style/variable.css'
import Header from './Header.js'
import { goBack } from '../functions/mainFunction.js'

const SelectedCountry = ({data, details}) => {
    const [selected, setSelected ] = useState(0)
    const [country, setCountry] = useState({

        countryName: '',
        population:'',
        nativeName: '',
        region:'',
        subRegion:'',
        capital:'',
        topLevelDomain: '',
        currencies : '',
        languages : ['','',''],
        flagImg : '',
        borderArr: ['','','']
    })

    // console.log('props from mainContent --->>>' ,details.target.alt)
    console.log('check selected -->>', selected)
    // console.log('check data', data[0])

    useEffect(()=>{
        setSelected(details.target)
    })

// change selected data
    useEffect(()=> {
        console.log('SelectedCountry.js check data change --->>>> if coming')
        const emptyArr = []

        if(!selected){
            console.log('selected is empty')
        }else{
        // sign element to var 
                let elementDigit = details.target.alt
                console.log('element check ->:',elementDigit)
                
        // destru to array only values not keys
            let lang = Object.values(data[elementDigit].languages)
        // destru to array only key names not values
            let curr = Object.keys(data[elementDigit].currencies)

            let emptyArr = ['Nobody']
            let border = !data[elementDigit].borders ? emptyArr : data[elementDigit].borders
            
            console.log('ternery Condition -->', !data[elementDigit].borders ? emptyArr : data[elementDigit].borders)

            setCountry({
                countryName: data[elementDigit].name.common,
                population: data[elementDigit].population,
                nativeName: data[elementDigit].name.official,
                region: data[elementDigit].continents,
                subRegion: data[elementDigit].region,
                capital: data[elementDigit].capital,
                topLevelDomain: data[elementDigit].tld[0],
                currencies: curr,
                languages : lang,
                flagImg: data[elementDigit].flags.png,
                // borderArr: data[elementDigit].borders
                borderArr: border
            })
        }

    },[selected])

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
                        <h2 className="maxWidth"> <span>Native Name:</span> {country.nativeName}</h2>
                        <h2><span>Population:</span> {country.population}</h2>
                        <h2><span>Region:</span> {country.region}</h2>
                        <h2><span>Sub Region:</span> {country.subRegion}</h2>
                        <h2><span>Capital:</span> {country.capital}</h2>
                        <h2><span>Top Level Domain:</span> {country.topLevelDomain}</h2>
                        <h2><span>Currencies:</span> {country.currencies}</h2>
                        {/* <h2><span>Languages: </span> {country.languages}</h2> */}
                        <section className="inLine-languages">
                            <h2>Languages: </h2>
                                {country.languages.map((extra, index) => (
                                    <p className="lang-p" key={index} >{extra}</p>
                                ))}
                        
                        </section>
                    </section>

                    <section className="countryBorder">
                        <div className="flexCountryBorder">
                            <h3>Border Country:</h3>
                            <section className="countryBorder-element">
                                {/* check if map is zero */}
                                {country.borderArr.map((border, index) => (
                                    <p className="borderCountry" key={index}>{border}</p>
                                ))}
                            </section>
                            
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default SelectedCountry;
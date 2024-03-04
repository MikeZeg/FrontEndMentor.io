import { API_KEY }  from '../component/config'
import { useEffect, useState } from 'react';


// API url
const urlWeb = `https://ipapi.co/`;
const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;

const myURL = 'https://jsonplaceholder.typicode.com/todos/1';

export const myData = {
    ip:'111.11.1.1',
    location:{
        country_name:'USA',
        city:'NY',
        region:'New York',
        lat:'50',
        lng:'10',
        timezone:"+01:00",
    },
    asn:'Vodafone',
}

// API GEO
// const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// const response = await fetch(urlGeoApi)
// const myData = await response.json();

// -------------- Function Button  ------------------------
export const buttonAPI = (val,e) => {


    e.preventDefault();

    let link = `https://ipapi.co/${val}/json/`;
    
        fetch(link)
            .then((response)=> response.json())
            .then((res) => {
                const {
                    city,
                    country_name,
                    ip,
                    latitude,
                    longitude,
                    utc_offset,
                    region,
                    asn
                    
                } = res

                console.log('Button: ',res)
                myData.ip = ip
                myData.location.lat = latitude
                myData.location.lng = longitude
                myData.location.city = city;
                myData.location.country_name = country_name;
                myData.location.region = region;
                myData.location.timezone = utc_offset;

                // console.log('in function then: ',myData)
                
                if(asn) {
                    // console.log("ASN", asn)
                    myData.asn = asn
                }

                console.log('Data after fetch: ',myData)
                return myData

            })
            .catch((error)=>console.log("Connection Issues, please check require."))
}       

export default myData
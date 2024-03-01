import { API_KEY }  from '../component/config'
import { useEffect } from 'react';
import Main from '../component/Main.js';

// API url
const urlWeb = `https://ipapi.co/`;
const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;

const myURL = 'https://jsonplaceholder.typicode.com/todos/1';

export const myData = {
    ip:'123.12.1.1',
    location: {
        region:"NY",
        city:'NY',
        country_name:'USA',
        timezone:'+3',
        lat: '40',
        lng: '-76'
    },
    isp:'123'
}


// API GEO
// const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// const response = await fetch(urlGeoApi)
// const myData = await response.json();

// ----- Function Button  ------
export function buttonAPI(val,e) {

    e.preventDefault();
    console.log('Event: ',e)
    console.log('Button Pressed');
    console.log('Value send to GeoAPI: ',val);

    const main = `../component/Header.js`;

    console.log(main)

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
                    asn,
                } = res
                    myData.ip = ip
                    myData.location.lat = latitude
                    myData.location.lng = longitude
                    myData.location.city = city;
                    myData.location.country_name = country_name;
                    myData.location.region = region;
                    myData.location.timezone = utc_offset;

                if(asn) {
                    console.log('ASN: ',asn)
                }
                console.log("dziala: ",myData)

            })
            .catch((error)=>console.log("Connection Issues, please check require."))
}       


export default myData
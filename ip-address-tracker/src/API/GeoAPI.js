import { API_KEY }  from '../component/config'
import { useState , setState, useCallback } from 'react';



// API url
const urlWeb = `https://ipapi.co/`;
const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;

const myURL = 'https://jsonplaceholder.typicode.com/todos/1';

export const myData = {
    ip:'123.31.3.3',
    location: {
        region:"Warmia",
        city:'Elblag',
        country_name:'Poland',
        timezone:'+1',
        lat: '50',
        lng: '20'
    },
    isp:'3 mobile'
}


// API GEO
// const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// const response = await fetch(urlGeoApi)
// const myData = await response.json();

// ----- Function Button  ------
export const buttonAPI = (val,e) => {

    const startMyData = {
        ip:'',
        location: {
            region:"",
            city:'',
            country_name:'',
            timezone:'',
            lat: '',
            lng: ''
        },
        isp:''
    }

    const [newData, setNewData] = useState(startMyData)

    e.preventDefault();
    console.log('Button Pressed');
    console.log('Value send to GeoAPI: ',val);

    let link = `https://ipapi.co/${val}/json/`
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
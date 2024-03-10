import { API_KEY }  from '../component/config'
import { useEffect, useState } from 'react';
// import { ipAddress } from '../component/Header.js'

// API url
const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;
const myURL = 'https://jsonplaceholder.typicode.com/todos/1';

// console.log(ipAddress)

// API GEO
// const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// const response = await fetch(urlGeoApi)
// const myData = await response.json();

// -------------- Function BTN ------------------------
export const useButtonAPI = (val,e) => {

    let link = `https://ipapi.co/123.12.1.1/json/`;
    let link1 = `https://freeipapi.com/api/json/199.12.1.1`;

    const initData = {
        ipAddress:'',
        regionName:'',
        cityName:'',
        countryName:'',
        latitude:'',
        longitude:'',
        timezone:'',
        asn:'',
    }

    const [reload, reloadData] = useState()
    const [data , setData ] = useState(initData)

// ------- FIRST Start -------    
    useEffect((e)=>{
        console.log('First start: ', data)
        
        fetch(link1)
            .then(response => response.json())
            .then((res)=> {
                    console.log('Data after catch: ',res)
                    console.log('First data lat: ',res.latitude)
                    setData({...res})
                    // setData({...data,[e.target.name]:e.target.value})
                    
            })
            .catch((error)=> console.log(error))
    },[reload])

// ----- After Press -------
//     useEffect((e)=>{
// console.log('After press button: ', data)
//             fetch(link1)
//                 .then( response => response.json())
//                 .then((res)=>{
// console.log('Check IP: ', res.ip)
//                     const {
//                         city,
//                         country_name,
//                         ip,
//                         latitude,
//                         longitude,
//                         utc_offset,
//                         region,
//                         asn
//                     } = res

//                     console.log('After fetch: ', res.ip)
//                     console.log('Check data IP: ', data.ip)
//                     data.ip = ip
//                     data.latitude = latitude
//                     data.longitude = longitude
//                     data.city = city;
//                     data.country_name = country_name;
//                     data.region = region;
//                     data.timezone = utc_offset;

//                     if(asn) {
// console.log("ASN", asn)
//                         data.asn = asn
//                     }
//                 })
//                 .catch((error)=>console.log('Connecting Problem: ', error))
                
//     }, [reload])

    return [data, reloadData]
    
}
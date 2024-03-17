import { API_KEY }  from '../component/config'
import { useEffect, useState } from 'react';

// API url
const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;
const myURL = 'https://jsonplaceholder.typicode.com/todos/1';


// API GEO
// const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// const response = await fetch(urlGeoApi)
// const myData = await response.json();

// -------------- Function BTN ------------------------
export const useButtonAPI = (val) => {
    
    let checkLink;
    let link = `https://ipapi.co/123.12.2.1/json/`;
    let link1 = `https://freeipapi.com/api/json/155.12.1.1`;

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

    const [reload, reloadData] = useState('')
    const [data , setData ] = useState(initData)

// IF val false use urlGeoApi, if val true add val to link1
if(!val){
    console.log('App start no VALUE !! ')
    // checkLink = urlGeoApi;
    val = link1
    
} else {
    console.log('Value is add: ',val)
    checkLink = `https://freeipapi.com/api/json/${val}`
}
    

// ------- FIRST Start -------   
    useEffect(()=>{
        console.log('First start: ', data)
        console.log('Check value in Effect: ', val)
    
    const fetchData = async () => {

        let response = await fetch(val)
        response = await response.json();
        
        setData(response)
    }
        fetchData()
            .catch(console.error)
            
    },[])

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

    return [data]
    
}
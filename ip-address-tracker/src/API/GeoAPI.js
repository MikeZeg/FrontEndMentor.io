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


// let link2 = `https://freeipapi.com/api/json/${val}`;
// -------------- Function BTN ------------------------
export const useButtonAPI = (val,e) => {

    let link = `https://ipapi.co/123.12.1.1/json/`;
    let link1 = `https://ipapi.co/179.99.1.9/json/`;

    const [reload, reloadData] = useState()
    const [data , setData ] = useState({
        ip:'',
        region:'',
        city:'',
        country_name:'',
        latitude:'',
        longitude:'',
        timezone:'',
        asn:'',
    })

    useEffect((e)=>{
        console.log('First start: ',data)
        fetch(link)
            .then(response => response.json())
            .then((res)=> {
                    console.log('Data after catch: ',res)
                    setData(res)
            })
            .catch((error)=> console.log(error))
    },[])

    useEffect((e)=>{
console.log('After press button: ', data)
            fetch(link)
                .then( response => response.json())
                .then((res)=>{
console.log('Check IP: ', res.ip)
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

                    console.log('After fetch: ', res.ip)
                    console.log('Check data IP: ', data.ip)
                    data.ip = ip
                    data.latitude = latitude
                    data.longitude = longitude
                    data.city = city;
                    data.country_name = country_name;
                    data.region = region;
                    data.timezone = utc_offset;
                    if(asn) {
// console.log("ASN", asn)
                        data.asn = asn
                    }

                    console.log('Data after fetch: ',data)
                })
                .catch((error)=>console.log('Connecting Problem: ', error))
                
    }, [reload])
    
    return [data, reloadData]
    
}
import { API_KEY }  from '../component/config'
import { useEffect, useState } from 'react';


// API url
const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;
const myURL = 'https://jsonplaceholder.typicode.com/todos/1';



// -------------- Function BTN ------------------------
export const useButtonAPI = (val) => {
    console.log('BTN API val: ', val)
    
    let useLink ;
    let link = `https://ipapi.co/8.8.8.8/json/`;
    let link2 = `https://ipapi.co/${val}/json/`;
    // let link1 = `https://ipapi.co/${val}/json/`;
    let link11 = `https://freeipapi.com/api/json/`;


    const initData = {
        ipAddress:'',
        regionName:'',
        cityName:'',
        countryName:'',
        latitude:'',
        longitude:'',
        timeZone:'',
        asn:'',
        org:'',
    }
    const [data , setData ] = useState(initData)

// --------------- Fetch Data -------------
    const fetchData = async (link) => {
        console.log('Show link: ',link)
        const res = await fetch(link);
        const data = await res.json();
        console.log('Response: ', data)
        
        setData(data)
        
    }

// ------ USE Effect -----------
    if(!val){
        console.log('false',val)
        useLink = `https://freeipapi.com/api/json/192.12.1.1`
    }if(val){
        console.log('True',val)
        useLink = `https://freeipapi.com/api/json/${val}`
    }
        console.log('before effect', val)
    useEffect((val)=>{

        fetchData(useLink)
            .catch(console.error)

    },[val])

    console.log('Return Data from function: ', data)
    return [ data, fetchData ]
}
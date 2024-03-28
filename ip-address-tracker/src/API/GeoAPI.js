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

// ToDo list -> Check initData for first start
    const initData = {
        ipAddress:'',
        regionName:'',
        cityName:'',
        countryName:'',
        latitude:'',
        longitude:'',
        timeZone:'',
        asn:'unknow',
        org:'',
    }
    const [data, setData ] = useState(initData)

// That part send forward Value to component/s
    const [ip, setIP] = useState()


// ------ If statment ----------- ToDo -> change first link to correct
    if(!ip){
        console.log('false', ip)
        useLink = `https://freeipapi.com/api/json/192.12.1.1`
    }if(ip){
        console.log('True', ip)
        useLink = `https://freeipapi.com/api/json/${ip}`
    }
// -------- Use Effect -----------
        console.log('before effect', ip)
        
    useEffect((ip)=>{

        console.log('After effect:', useLink)

        const fetchData = async (link) => {
            console.log('Show link: ',link)
            const res = await fetch(link);
            const data = await res.json();
            console.log('Response: ', data)
            
            setData(data)
        }

        fetchData(useLink)
            .catch(console.error)

//when IP change UseEffect working agian
    },[ip])

    console.log('Return Data from function: ', data)

    return [data, val, setIP] 
}
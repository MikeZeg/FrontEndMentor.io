import { API_KEY }  from '../component/config'

// API url
// const urlWeb = `https://ipapi.co/`;


const urlGeoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}`
const urlCountry = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;

const myURL = 'https://jsonplaceholder.typicode.com/todos/1';

// API GEO

// const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
// const response = await fetch(urlGeoApi)
const myData = await response.json();


export default myData
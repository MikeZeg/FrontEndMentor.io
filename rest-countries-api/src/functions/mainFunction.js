import { useEffect, useState } from "react"

console.log('Hello world !!!')
// ----- links ---------
const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'

// ---------- Fetch API ----------- //

export const grabApi = async () => {
    // console.log('function start ->>>')
    const myData = [];

    const response = await fetch(apiCountrys);
    const data = await response.json();
    // console.log('function data after response: ',data)
    data.forEach(element => {
        myData.push(element)
    })
    // console.log('data from function: ', myData);
    return myData;
}

// ------- Choose  -----------
const countrys = document.querySelectorAll('.mainContentStyle')
console.log(countrys)

countrys.forEach((country) => {
    country.addEventListener('click', ()=>{
        console.log('Country: ', country)
    })
})
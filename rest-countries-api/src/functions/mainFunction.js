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
const hidenSection = document.querySelector('.hidenSection')
const mainContent = document.querySelector('.main_style')
const btnBack = document.querySelector('.btnBack')

console.log('asd: ', hidenSection, mainContent);

export const openWindow = () => {

    const countrys = document.querySelectorAll('.mainContentStyle');
    console.log('check: ', countrys)

    countrys.forEach((window)=>{
        window.addEventListener('click',(e)=>{
            console.log('event: ',e)
        })
})
}

export const goBack = () => {
    console.log(btnBack, 'asdasdas', hidenSection)
    console.log('work')
    btnBack.addEventListener('click',()=>{
        console.log('Working');
    })
}

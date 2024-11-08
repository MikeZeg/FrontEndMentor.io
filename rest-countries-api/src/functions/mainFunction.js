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

// Functions
    // 1 Choose function - actived when user pressed country window and move to component with details
    // 2 Back function - back to LandingPage.js when pressed
    // 3 Dark Mode Function - change page colors


// ------- Choose  Function -----------
    export const openWindow = (data, index) => {
        const hidenSection = document.querySelector('.hidenSection')
        const mainContent = document.querySelector('.main_style')
        const countrys = document.querySelectorAll('.mainContentStyle');
        const searchBar = document.querySelector('#searching')

        // console.log('check: ', countrys)

        // console.log('openWindow check: ',data)

        countrys.forEach((window)=>{
            window.addEventListener('click',(e)=>{
                mainContent.style.display = 'none';
                searchBar.style.display = 'none';
                hidenSection.style.display = 'grid';
            })
        })
    }
// -------- Back Function ----------------
    export const goBack = () => {
        const hidenSection = document.querySelector('.hidenSection')
        const mainContent = document.querySelector('.main_style')
        // const btnBack = document.querySelector('#back-btn')
        const searchBar = document.querySelector('#searching')
        
        // console.log('Working?? ->: ',btnBack, hidenSection)

        mainContent.style.display = 'grid'
        searchBar.style.display = 'flex';
        hidenSection.style.display = 'none';
    }
// -------- Dark Mode -----------
    export const darkModeSwap = () => {
        const swapMode = document.querySelector('#mode-btn');

        console.log('presed')

    }
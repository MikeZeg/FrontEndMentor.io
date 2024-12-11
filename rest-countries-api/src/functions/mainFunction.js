import { useEffect, useState } from "react"

// console.log('Hello world !!!')
// --------- links ---------
const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'

// -------- global variable ----------
export let selectedCountryVar = 'new value';

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
        // console.log('clicked in mainFunction')
        
        const hidenSection = document.querySelector('.hidenSection')
        const mainContent = document.querySelector('.main_style')
        const countrys = document.querySelectorAll('.mainContentStyle');
        const searchBar = document.querySelector('#searching')
        
        mainContent.style.display = 'none';
        searchBar.style.display = 'none';
        hidenSection.style.display = 'grid';
    }

// -------- Back Function ----------------
    export const goBack = () => {
        const hidenSection = document.querySelector('.hidenSection')
        const mainContent = document.querySelector('.main_style')
        // const btnBack = document.querySelector('#back-btn')
        const searchBar = document.querySelector('#searching')
        
        // console.log('Working?? ->: ',btnBack, hidenSection)

        mainContent.style.display = 'grid'
        searchBar.style.display = '';
        hidenSection.style.display = 'none';
    }
// -------- Dark Mode -----------
    let darkModeFlag = 0;
    export const darkModeSwap = () => {
        const swapMode = document.querySelector('#mode-btn');
        const root = document.documentElement;

        if(!darkModeFlag){
            root.style.setProperty('--elements-color', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--background-color', 'hsl(0, 0%, 89%)');
            root.style.setProperty('--input-color', 'hsl(0, 0%, 52%)');
            root.style.setProperty('--font-color-darkMode', 'hsl(200, 15%, 8%)');
            darkModeFlag = 1;

        }else{
            root.style.setProperty('--elements-color', 'hsl(209, 23%, 22%)');
            root.style.setProperty('--background-color', 'hsl(207, 26%, 17%)');
            root.style.setProperty('--input-color', 'hsl(165, 2%, 54%)');
            root.style.setProperty('--font-color-darkMode', 'hsl(0, 0%, 100%)');
            darkModeFlag = 0
        }

        console.log('presed')
    }
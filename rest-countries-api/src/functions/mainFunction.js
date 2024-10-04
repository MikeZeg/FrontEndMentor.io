import { useEffect, useState } from "react"

console.log('Hello world !!!')
// ----- links ---------
const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'

// ---------- Fetch API ----------- //

// const myArr = [];

export const useGrabApi = async (props) => {
    console.log('function start ->>>')
    // const [myData, setMyData] = useState('')

    const myData = []

    try {
        const response = await fetch(apiCountrys);
        const data = await response.json();
        !response.ok ? console.log('error!!') : console.log('data received')

        data.forEach((element,index) => {
                myData.push(element);
        });

    }catch(err){
        console.error('Issue: ', err)
    }

    console.log(myData);

    return myData;
}
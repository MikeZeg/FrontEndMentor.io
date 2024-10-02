import { useEffect, useState } from "react"

console.log('Hello world !!!')
// ----- links ---------
const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'


// ---------- Fetch API ----------- //
export const grabApi = async ( getData ) => {
    console.log('function start')
    const myArr = [];

    if(myArr.length <= 0) {
        console.log('Array empty')
        const response = await fetch(apiCountrys)
                        .catch(console.error)

        const myData = await response.json();
        getData = [...myData]

        console.log('data received', getData)
        return getData;
    }else {
        console.log('Working')
    }
}

// grabApi();
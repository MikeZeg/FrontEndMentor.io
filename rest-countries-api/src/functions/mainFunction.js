import { useEffect, useState } from "react"

console.log('Hello world !!!')
// ----- links ---------
const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'

// ---------- Fetch API ----------- //

const myArr = [];

// console.log(myArr)

export const useGrabApi = (  ) => {
    console.log('function start ->>>')
    
    const [data, setData] = useState([]);

    console.log(data.length)

    if(data.length >= 1){
        return data;
    }else {
        const response = fetch(apiCountrys)
                        .then((response) => response.json())
                        // .then((data) => console.log(data))
                        .then((data) => myArr.push(data))
        console.log(data)
        setData(myArr)
        return data
    }
}


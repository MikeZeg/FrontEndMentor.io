import { useEffect, useState } from "react"

console.log('Hello world !!!')
// ----- links ---------
const apiCountrys = 'https://restcountries.com/v3.1/independent?status=true'

// ---------- Fetch API ----------- //

// const myArr = [];

export const useGrabApi = (props) => {
    console.log('function start ->>>')
    
    const [data, setData] = useState('');

    const res = fetch(apiCountrys)
                .then((res) => res.json())
                .then((res) => console.log(res) )
                // .then((res)=> setData(res))
                // .then((data) => myArr.push([...data]))
                // .then((res) => console.log(res))
                // .then(()=> {return myArr})

    return data;
}
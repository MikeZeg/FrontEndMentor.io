import React, {useEffect, useState} from "react";
import '../style/searchStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const Search = (props) => {
    const [list, setList ] = useState('');
    const [looking, setLooking] = useState('');
    const [typing, setTyping] = useState('')

    // console.log('check data List: ', list)

    const arr = [
        {
            country:'Poland1',
            population:11111111,
            region:'western Europeasdasdas',
            capital:'Warsow',
            flags:{png:"https://flagcdn.com/w320/gd.png",svg:"https://flagcdn.com/gd.svg"},
        },
        {
            country:'Poland2',
            population:2222222222,
            region:'western Europeeeeeeeee',
            capital:'Warsow',
            flags:{png:"https://flagcdn.com/w320/gd.png",svg:"https://flagcdn.com/gd.svg"},
        },
        {
            country:'Poland3',
            population:33333333333,
            region:'western Europe',
            capital:'Warsow',
            flags:{png:"https://flagcdn.com/w320/gd.png",svg:"https://flagcdn.com/gd.svg"},
        },
        
    ]

    // Data receiving from mainFunction - use try ?
    const dataReceived = () => {
        grabApi().then((myData) => {
            setList(myData)
            console.log('Received from grabApi Sreach.js: ', myData)
        })
    }

    // Filter array by typing
    const filterData = (list, typing) =>{
        const myList = [...list]

        const newArr = myList.filter((item)=>{
            // console.log('check item',item)
           return item.name.common.includes(typing)
        })

        console.log('check value: ', newArr)
        return setLooking(newArr);
    }

    //Send data to LandingPage    
    function dataSend(data){
        props.changeData(data)
    }
    
    //init download data from MainFunction/grabAPI
    useEffect(()=>{
        dataReceived()
        console.log('From LandingPage: ', props.changeData)
        dataSend(list);
    },[!list])

    useEffect(()=>{
        filterData(list, typing)
        dataSend(looking)
    },[typing])

    // console.log('check After code data List: ', list)

    return (
        <div id="searching">

                <label id="looking-label" for='looking-input'>
                    <input
                        type="text"
                        id="looking-input"
                        placeholder="Search for a country..."
                        // value={typing}
                        onChange={(e) => {
                            setTyping(e.target.value)
                            console.log(e.target.value)
                        }}
                    >
                    </input>
                </label>

            <div id="choose-region">
                <form id="choose-region-form">
                    <label for="region"></label>
                    <select name="region" id="region">
                        <option value="" selected> -- Filter by Region -- </option>
                        <option value={'Africa'}>Africa</option>
                        <option value={'America'}>America</option>
                        <option value={'Asia'}>Asia</option>
                        <option value={'Europa'}>Europe</option>
                        <option value={'Oceania'}>Oceania</option>
                    </select>
                </form>
            </div>

        </div>
    )
}

export default Search;
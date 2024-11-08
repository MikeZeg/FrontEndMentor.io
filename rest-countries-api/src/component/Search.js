import React, {useEffect, useState} from "react";
import '../style/searchStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const Search = (props) => {
    const [list, setList ] = useState('');
    const [looking, setLooking] = useState('');
    const [typing, setTyping] = useState('')

// Data receiving from mainFunction
    const dataReceived = () => {
        grabApi().then((myData) => {
            setList(myData)
            // console.log('Received from grabApi Sreach.js: ', myData)
        })
    }
// Send data to LandingPage    
    function dataSend(data){
        console.log('sendData function to LandingPage <<--')
        props.changeData(data)
    }
// Filter array by typing
    const filterData = async (list, typing) =>{
        const myList = [...list]
        console.log('filter Data function')

        const newArr = myList.filter((item)=>{
            // console.log('check item',item)
           return item.name.common.includes(typing)
        })
        console.log('check value: ', newArr)
        
        return typing.length <= 0 ? setLooking(myList) : setLooking(newArr)
        // return setLooking(newArr);
    }

// init download data from MainFunction/grabAPI
    useEffect(()=>{
        console.log('Init download data from function <<<----')
        dataReceived()
        dataSend(list);
    },[!list])
// Refresh looking when user typing 
    useEffect(() => {        
        filterData(list, typing)
    },[typing])
// Send data to LandingPage.js
    useEffect(()=>{
        console.log('looking change !!!')
        dataSend(looking)
    },[looking])


    return (
        <div id="searching">

                <label id="looking-label" for='looking-input'>
                    <input
                        type="text"
                        id="looking-input"
                        placeholder="Search for a country..."
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
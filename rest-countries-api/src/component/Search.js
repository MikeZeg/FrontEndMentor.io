import React, {useEffect, useState} from "react";
import '../style/searchStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const Search = (props) => {
    const [list, setList ] = useState('');
    const [looking, setLooking] = useState('');
    const [typing, setTyping] = useState('')
    const [selectRegion, setRegion] = useState('')
    
//check selected region
    // console.log('check region: ', selectRegion)

// Data receiving from mainFunction
    const dataReceived = () => {
        grabApi().then((myData) => {
            setList(myData)
        })
    }
// Send data to LandingPage    
    function dataSend(data){
        props.changeData(data)
    }
// Filter array by typing
    const filterData = async (list, typing) =>{
        const myList = [...list]
        const newArr = myList.filter((item)=>{
           return item.name.common.includes(typing)
        })
        console.log('check value: ', newArr)
        return typing.length <= 0 ? setLooking(myList) : setLooking(newArr)
    }
// Filter array by Region
    const filterByRegion = async (list, selectRegion) => {
        const myList = [...list]
        const newArr = myList.filter((item) => {
            return item.region.includes(selectRegion)
        })
        console.log('--->> check filter by region->> ',newArr)
        return setLooking(newArr)
    }
// init download data from MainFunction/grabAPI
    useEffect(()=>{
        dataReceived()
        dataSend(list);
    },[!list])
// Refresh looking when user typing 
    useEffect(() => {        
        filterData(list, typing)
    },[typing])
// Filer by Region
    useEffect(()=>{
        filterByRegion(list, selectRegion)
    },[selectRegion])
// Send data to LandingPage.js
    useEffect(()=>{
        dataSend(looking)
    },[looking, selectRegion])

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
                    <select name="region" id="region" value={selectRegion} onChange={ e => setRegion(e.target.value)}>
                        <option value="" selected> -- Filter by Region -- </option>
                        <option value={''}>All</option>
                        <option value={'Africa'}>Africa</option>
                        <option value={'Americas'}>America</option>
                        <option value={'Asia'}>Asia</option>
                        <option value={'Europe'}>Europe</option>
                        <option value={'Oceania'}>Oceania</option>
                    </select>
                </form>
            </div>

        </div>
    )
}

export default Search;
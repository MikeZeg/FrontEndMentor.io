import React, {useEffect, useState} from "react";
import '../style/searchStyle.css';
import { grabApi } from '../functions/mainFunction.js'

const Search = (props) => {
    const [list, setList ] = useState([]);
    const [looking, setLooking] = useState('');
    const [typing, setTyping] = useState('')
    // console.log('check: ',typing)

    const asd = [
        {aaa:'aaa'},
        {bbb:'bbb'},
    ]

    useEffect(()=>{
        const dataReceived = () => {
            grabApi().then((myData) => {
                setLooking(myData)
                // console.log('Received from grabApi Sreach.js: ', myData)
            })
        }
        dataReceived();
    })

    const sendDataToApp = () => {
        props.changeData(looking)
        console.log('data sent to App.js')
    }

    useEffect(()=>{
        // console.log('change')
        // sendDataToApp()

    },[typing])

//Searching country and display if match to looking/ typing data
    // console.log('data from LandignPage: ', props.changeData)

    const filtrData = () => {
        // let data = ;

    }
    

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
import React, {useEffect, useState} from "react";
import '../style/searchStyle.css'

const Search = (props) => {
    const [list, setList ] = useState([]);
    const [looking, setLooking] = useState('');
    const [typing, setTyping] = useState('')

    console.log('check data in Search',props)
    console.log('check: ',typing)

//Searching country and display if match to looking/ typing data
    const handelData = (e) => {
        

        setList()
    }

    useEffect(()=>{
        props.changeData([{asd:'a'},{aq:'b'}])
    },[typing])

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
                            handelData(e)
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
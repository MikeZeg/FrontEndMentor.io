import React, {useState} from "react";
import '../style/searchStyle.css'


const Search = () => {
    
    return (
        <div id="searching">

                <label id="looking-label" for='looking-input'>
                    <input
                        type="text"
                        id="looking-input"
                        placeholder="Search for a country..."
                        // onChange={}
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
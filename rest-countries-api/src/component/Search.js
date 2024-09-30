import React, {useState} from "react";
import '../style/searchStyle.css'


const Search = () => {
    
    return (
        <div id="searching">
            <div id="looking">
                <p>asd</p>
                <input id="looking-input"></input>
            </div>
            {/* that component on middel */}
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
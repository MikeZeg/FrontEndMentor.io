import React, {useState} from "react";


const Search = () => {
    
    return (
        <div>
            <div id="searching">
                <input></input>
            </div>
            {/* that component on middel */}
            <div>
                <form>
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
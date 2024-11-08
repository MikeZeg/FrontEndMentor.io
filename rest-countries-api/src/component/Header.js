import React, {useState} from "react";
import '../style/headerStyle.css';
import { darkModeSwap } from "../functions/mainFunction";

const Header = () => {
    
    return (
        <header>
            <div id="top-header">
                <h1>Where in the world ?</h1>
                <button id="mode-btn" onClick={()=>darkModeSwap()}><span className="marginRightSmall svgAdd"></span>Dark Mode</button>
            </div>
        </header>
    )
}

export default Header;
import React, { useState } from "react";
import MapComponent from '../API/MapAPI'
import '../styles/mainStyle.css'
import {useButtonAPI} from '../API/GeoAPI.js' 


const Main = (props) =>{
 
        return(
        <main className="mainStyle">
            <MapComponent
            className='mainStyle'/>
        </main>
    )}

export default Main;
import React, { useState } from "react";
import MapComponent from '../API/MapAPI'
import '../styles/mainStyle.css'
import { myData } from '../API/GeoAPI'


const Main = (props) =>{
    console.log('My data from props',props)

    const {lat,lng} = props
    
        return(
        <main className="mainStyle">
            <MapComponent 
                lat = {lat}
                lng = {lng}
            className='mainStyle'/>
        </main>
    )}

export default Main;
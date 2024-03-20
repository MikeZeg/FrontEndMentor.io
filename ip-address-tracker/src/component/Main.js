import React, { useState } from "react";
import MapComponent from '../API/MapAPI'
import '../styles/mainStyle.css'

const Main = (props) =>{

    return(
        <main className="mainStyle">
            <MapComponent
                latitude = {props.latitude}
                longitude = {props.longitude}
                ip = {props.ip}
                cityName = {props.cityName}
            className='mainStyle'/>
        </main>
    )}

export default Main;
import React, { useState } from "react";
import MapComponent from '../API/MapAPI'
import '../styles/mainStyle.css'
import {useButtonAPI} from '../API/GeoAPI.js' 


const Main = () =>{

    const  [data, setData] = useButtonAPI();
    console.log('Data from Main: ',data)

    console.log('Main lat', data.latitude)
    // console.log('Main lng', data.longitude)
    return(
        <main className="mainStyle">
            <MapComponent
                latitude = {data.latitude}
                longitude = {data.longitude}
                ip = {data.ip}
                cityName = {data.cityName}
            className='mainStyle'/>
        </main>
    )}
export default Main;
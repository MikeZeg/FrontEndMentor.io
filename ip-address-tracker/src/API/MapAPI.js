import React, {useRef, useState} from 'react'
import '../styles/mainStyle.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import myData from "./GeoAPI";


const MapComponent = (props) => {

    // console.log(" Data from Main: ",props)
    // lat1 = props
    // lng1 = props

    return (
        <MapContainer 
        center={[
            myData.location.lat,
            myData.location.lng
            // lat1,lng1

            ]} zoom={13} scrollWheelZoom={false} className='mapStyle'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[
                myData.location.lat,
                myData.location.lng
                // lat1,lng1
                ]}>
                <Popup>
                    User Location. <br /> User IP Location.
                </Popup>
            </Marker>
        </MapContainer>
    )}
    
export default MapComponent
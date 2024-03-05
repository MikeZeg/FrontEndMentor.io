import React, {useRef, useState} from 'react'
import '../styles/mainStyle.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import myData from "./GeoAPI";


const MapComponent = (props) => {
    
    const {lat, lng} = props

    return (
        <MapContainer 
        center={[lat,lng]} zoom={13} scrollWheelZoom={false} className='mapStyle'>
            <TileLayer

                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng ]}>
                <Popup>
                    User Location. <br /> User IP Location.
                </Popup>
            </Marker>
        </MapContainer>
    )}
    
export default MapComponent
import React, {useRef, useState} from 'react'
import '../styles/mainStyle.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useButtonAPI } from './GeoAPI'


const MapComponent = (props) => {
    
    const [myData, reload] = useButtonAPI();
    console.log('Map Api: ', myData.latitude, myData.longitude)

    return (
        <MapContainer 
        center={[myData.latitude,myData.longitude]} zoom={13} scrollWheelZoom={false} className='mapStyle'>
            <TileLayer

                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[myData.latitude, myData.longitude ]}>
                <Popup>
                    User Location. <br /> User IP Location.
                </Popup>
            </Marker>
        </MapContainer>
    )}
    
export default MapComponent
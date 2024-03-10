import React, { useState} from 'react'
import '../styles/mainStyle.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useButtonAPI } from './GeoAPI'


const MapComponent = () => {

    const [data, setData] = useButtonAPI();

    console.log('Map Api: ', data.ipAddress)
    console.log('Map Api: ', data.latitude, data.longitude)

    const ip = data.ipAddress;
    const lat = data.latitude
    const lng = data.longitude


    return (
        <MapContainer 
            center={[lat,lng]} zoom={10} scrollWheelZoom={false} className='mapStyle'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                <Popup>
                    User Location: {data.cityName}. <br /> User IP Location {ip}.
                </Popup>
            </Marker>
        </MapContainer>
    )}

export default MapComponent
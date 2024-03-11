import React, { useEffect, useState} from 'react'
import '../styles/mainStyle.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useButtonAPI } from './GeoAPI'
import { latLng } from 'leaflet'



const MapComponent = (props) => {

    console.log('MapApi: ',props.latitude)

    const [data, setData] = useButtonAPI();
    const lat1 = props.latitude;
    const lng1 = props.longitude;
    const lat = 52.505;
    const lng = -3.1;
    const position = [lat1,lng1]

    useEffect(()=> {
        console.log('Current position: ',position)
    })




    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className='mapStyle'>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={position}>
                <Popup>
                    User Location: {props.cityName}. <br /> User IP Location {props.ip}.
                </Popup>
            </Marker>
        </MapContainer>
    )}

export default MapComponent
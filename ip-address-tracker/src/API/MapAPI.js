import React, { useEffect, useState} from 'react'
import '../styles/mainStyle.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

// import { latLng } from 'leaflet'

const MapComponent = (props) => {

    let position = [props.latitude,props.longitude]

const MyFun = () => {
    const map = useMap()
    useEffect(()=>{
        map.setView(position)
    },[position])
}
    return (
        <MapContainer
            center = {position}
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
           <MyFun></MyFun>
        </MapContainer>
    )}

export default MapComponent
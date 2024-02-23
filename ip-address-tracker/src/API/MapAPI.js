import React, {useRef} from 'react'
import '../styles/mainStyle.css'
import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

import myData from "./GeoAPI";

const MapComponent = () => {
    return (
        <MapContainer center={[myData.location.lat, myData.location.lng]} zoom={12} scrollWheelZoom={false} className='mapStyle'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[myData.location.lat, myData.location.lng]}>
                <Popup>
                    User Location. <br /> User IP Location.
                </Popup>
            </Marker>
        </MapContainer>
    )}

export default MapComponent
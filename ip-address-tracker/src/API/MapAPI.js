import React, {useRef} from 'react'
import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

import myData from "./GeoAPI";

const MapComponent = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: "55vh", minWidth: "100vh"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    User Location. <br /> User IP Location.
                </Popup>
            </Marker>
        </MapContainer>
    )}

export default MapComponent
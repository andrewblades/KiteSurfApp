import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../../App.css'


function Themap() {
    return (
        <div className='mapContainer'>
            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                 </Popup>
                </Marker>
            </MapContainer>
        </div>

    )
}

export default Themap

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../../App.css'


function Themap({ data }) {



    return (
        <div className='mapContainer'>
            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((data) => (
                    <Marker position={[data.lat, data.long]}></Marker>
                ))}

            </MapContainer>
        </div>

    )
}

export default Themap

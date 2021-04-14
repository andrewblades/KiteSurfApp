import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



function Themap({ data }) {



    return (
        <div className='mapContainer'>
            <div className='theMap'>
                <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {data.map((data) => (
                        <Marker position={[data.lat, data.long]}>
                            <Popup>
                                <h3>{data.name}</h3>
                                <p>{data.country}</p>
                                <br />
                                <h4>Wind probability</h4>
                                <p>{data.probability}%</p>
                                <h4>Latitude</h4>
                                <p>{data.lat}*N</p>
                                <h4>Longitude</h4>
                                <p>{data.long}*W</p>
                                <h4>When to go</h4>
                                <p>{data.month}</p>
                            </Popup>
                        </Marker>
                    ))}

                </MapContainer>
            </div>
        </div>

    )
}

export default Themap

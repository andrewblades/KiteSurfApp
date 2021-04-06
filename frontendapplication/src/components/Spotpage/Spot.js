import React from 'react'
import { Link } from 'react-router-dom'
function User({ data }) {
    return (
        <div className='Card'>

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

            <p>Was created in:
            <br />
                {data.createdAt}
            </p>
            <br />
            <br />
        </div>
    )
}

export default User

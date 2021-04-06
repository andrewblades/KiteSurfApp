import React from 'react'
import { Link } from 'react-router-dom'
function User({ data }) {
    return (
        <div className='Card'>
            <img src={data.avatar} alt="" />
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>Has joined in: <br />{data.createdAt}</p>

        </div>
    )
}

export default User

import React from 'react'
import '../../Stylesheet/App.css'

function User({ data }) {
    return (
        <div >
            <div className='Card'>
                <img src={data.avatar} alt="" />
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <p>Has joined in: </p>
                <p>{data.createdAt}</p>
            </div>
        </div>
    )
}

export default User

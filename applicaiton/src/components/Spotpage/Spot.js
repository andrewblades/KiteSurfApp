import React from 'react'

function User({ data }) {
    return (
        <div className='SpotCard'>
            <div className='title'>
                <h3>{data.name}</h3>
                <p className='subTitle'>{data.country}</p>
            </div>


            <br />
            <br />
            <div className='title'>
                <h4>Wind probability</h4>

                <p>{data.probability}%</p>
            </div>
            <br />
            <div className='title'>
                <h4>Latitude</h4>
                <p>{data.lat}*N</p>
            </div>
            <br />
            <div className='title'>
                <h4>Longitude</h4>

                <p>{data.long}*W</p>
            </div>
            <br />
            <div className='title'>
                <h4>When to go</h4>

                <p>{data.month}</p>
            </div>
            <br />
            <div className='title'>
                <p>Was created in:
            <br />
                    {data.createdAt}
                </p>
            </div>

        </div>
    )
}

export default User

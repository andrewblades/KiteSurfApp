import React from 'react'
import Table from './Tabel'
import '../../Stylesheet/App.css'
function LocationTabel({ location }) {

    const data = location

    return (

        <div className='Locations'>
            <div className='locationsTitle'>
                <h2 className='locationHeader'>Locations</h2>
            </div>
            <Table data={data} />
        </div >
    )
}

export default LocationTabel

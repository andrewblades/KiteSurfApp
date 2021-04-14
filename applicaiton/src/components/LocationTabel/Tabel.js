import React from 'react'
import { Link } from 'react-router-dom'
import '../../Stylesheet/App.css'
function Table({ data }) {






    return (
        <div className='ContainerList'>
            <div className='theList'>
                {data.slice(0, 6).map((Loc) => (
                    <div className='Element'>
                        <h3 className='locH3'>{Loc.name}</h3>

                        <p className='locP'>{Loc.country}</p>

                        <p className='locP'>Best month: {Loc.month}</p>

                        <p className='locP'>Wind probability: {Loc.probability}</p>
                    </div>
                ))}

            </div>
            <div className='ShowLink'>
                <Link to='/spot' className='showMoreLink'>Show more ?</Link>
            </div>
        </div >
    )
}

export default Table

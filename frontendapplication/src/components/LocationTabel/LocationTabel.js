import React, { useState } from 'react'
import Table from './Tabel'
import '../../Stylesheet/App.css'
function LocationTabel({ location }) {

    const data = location

    const [q, setQ] = useState('')
    const [searchColumns, setSearchColumns] = useState(['country', 'probability'])

    const [showFilters, setShowFilters] = useState(false)


    function search(rows) {

        return rows.filter(
            (row) =>
                searchColumns.some(
                    (column) =>
                        row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                )
        )
    }



    const columns = data[0] && Object.keys(data[0])

    return (

        <div >
            <div className='searchContainer'>


                <h2>Locations</h2>
                <input className='search' type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                {!showFilters ?
                    <button className='filterBtn' onClick={() => setShowFilters(true)}>Filters</button>
                    :
                    <button className='filterBtn' onClick={() => setShowFilters(false)}>Hide Filters</button>
                }
                <div className='filterItemsContainer'>
                    {showFilters ?
                        columns && columns.map(column =>
                            <div>
                                <label>

                                    <input type='checkbox' checked={searchColumns.includes(column)}
                                        onChange={() => {
                                            const checked = searchColumns.includes(column)
                                            setSearchColumns(prev => checked ? prev.filter(sc => sc !== column) : [...prev, column])
                                        }} />
                                    {column}


                                </label>
                            </div>

                        ) : null
                    }
                </div>
            </div>
            <div><Table data={search(data)} /></div>
        </div>
    )
}

export default LocationTabel

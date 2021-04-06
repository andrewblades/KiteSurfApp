import React, { useState } from 'react'
import Table from './Tabel'

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

        <div>
            <div>


                <h2>Locations</h2>
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                {!showFilters ?
                    <button onClick={() => setShowFilters(true)}>Filters</button>
                    :
                    <button onClick={() => setShowFilters(false)}>Hide Filters</button>
                }

                {showFilters ?
                    columns && columns.map(column => <label>
                        <input type='checkbox' checked={searchColumns.includes(column)}
                            onChange={() => {
                                const checked = searchColumns.includes(column)
                                setSearchColumns(prev => checked ? prev.filter(sc => sc !== column) : [...prev, column])
                            }} />
                        {column}

                    </label>
                    ) : null
                }

            </div>
            <div><Table data={search(data)} /></div>
        </div>
    )
}

export default LocationTabel

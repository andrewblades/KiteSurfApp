import React, { useState } from 'react'
import Table from './Tabel'

function LocationTabel({ location }) {

    const data = location

    const [q, setQ] = useState('')
    const [searchColumns, setSearchColumns] = useState(['country', 'probability'])




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
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                {

                    columns && columns.map(column => <label>

                        <input type='checkbox' checked={searchColumns.includes(column)}
                            onChange={(e) => {
                                const checked = searchColumns.includes(column)
                                setSearchColumns(prev =>
                                    checked ? prev.filter(sc => sc !== column) : [...prev, column])
                            }}
                        />

                        {column}

                    </label>

                    )}
            </div>
            <div><Table data={search(data)} /></div>
        </div>
    )
}

export default LocationTabel

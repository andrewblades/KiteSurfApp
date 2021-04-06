import React from 'react'

function Table({ data }) {

    const columns = data[0] && Object.keys(data[0])

    return (
        <div>
            <table cellPadding={20} cellSpacing={15} >
                <thead>
                    <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
                </thead>
                <tbody>
                    {data.map(row => <tr>
                        {

                            columns.map(column => <td key={data.id}>{row[column]}</td>)

                        }
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table

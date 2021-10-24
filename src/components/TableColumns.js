import React from 'react'

export default function TableColumns({columns}) {
    const tableColumns = columns.map((col, index) => {
        return <th scope="col" key={index}>{col}</th>
    });

    return (
        <thead>
            <tr>
            {tableColumns}
            </tr>
        </thead>
    )
}

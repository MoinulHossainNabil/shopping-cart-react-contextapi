import React from 'react'
import TableColumns from './TableColumns';
import TableRows from './TableRows';

export default function Table({columns, data}) {

    return (
        <table className="table">
        <TableColumns columns={columns}/>
        <TableRows data={data} />
        </table>
    )
}

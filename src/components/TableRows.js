import React from 'react'
import RowAction from './RowAction'

export default function TableRows({data}) {
    return (
        <tbody>
            {
                data.map((item, index) =>
                <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <RowAction data={item}/>
                </tr>
                )
            }
        </tbody>
    )
}

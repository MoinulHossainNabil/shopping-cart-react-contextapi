import {useContext} from 'react'
import {Context} from '../ContextApi';

export default function RowAction({data}) {
    const context = useContext(Context);
    return (
        <td className="d-flex flex-row">
            <button className="mx-1" onClick={() => context.updateCart(data, 1)}>+</button>
            <button className="mx-1" onClick={() => context.updateCart(data, -1)}>-</button>
            <button className="mx-1" onClick={() => context.updateCart(data, -1 * data.quantity)}>X</button>
        </td>

    )
}

import {useContext} from 'react';
import {Context} from '../ContextApi';
import Table from '../components/Table';

export default function Cart() {
    const context = useContext(Context);
    const tableColumns = ["#", "Product Name", "Price", "Quantity", "Action"]

    return (
        context.cart.length > 0 ?<div className="container">
            <div className="row py-4">
                <Table columns={tableColumns} data={context.cart} />
            </div>
            <hr></hr>
            <div className="row">
                <p className="text-center"><strong>Total: </strong>{context.cartTotal}</p>
            </div>
            </div>
    : <div className="container">
        <div className="row py-4">
            <p className="text-center"><strong>No items in the cart</strong></p>
        </div>
    </div>
    )
}

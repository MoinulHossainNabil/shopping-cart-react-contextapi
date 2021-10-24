import {useContext} from 'react'
import {Context} from '../ContextApi';

export default function Card({item}) {
    const context = useContext(Context);
    
    return (
        <div className="col-md-3 py-2">
            <div className="card">
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Price: </strong>${item.price}</p>
                <button type="button" className="btn btn-primary" onClick={() => context.updateCart(item, 1)}>Add to cart</button>
            </div>
            </div>
        </div>
    )
}

import {useContext} from 'react'
import {Context} from '../ContextApi';
import Card from './Card';

export default function ProductList() {
    const context = useContext(Context);

    return (
        context.products.map(product => (
            <Card key={product.id} item={product} />
        ))
    )
}

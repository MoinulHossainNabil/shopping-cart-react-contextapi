import React, {useState, useEffect} from 'react'
import Data from './Data';

export const Context = React.createContext();

export const ContextApi = (props) => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    
    const calculateCartTotal = (arr, prop) => {
        return arr.reduce((item, current) => item + current[prop] * current.quantity, 0);
    }

    const updateCart = (item, quantity) => {
        let currentCart = [...cart];
        const product = cart.find(i => i.id === item.id);
        if(product) {
            const newCart = [];
            for(let i of cart) {
                    if(i.id === item.id) {
                        i.quantity += parseInt(quantity);
                        if(i.quantity === 0) {
                            continue;
                        }
                    }
                    newCart.push(i);
            }
            setCart(newCart);
            setCartTotal(calculateCartTotal(newCart, 'price'));
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
        else {
            currentCart.push({...item, quantity: 1});
            setCart(currentCart);
            setCartTotal(calculateCartTotal(currentCart, 'price'));
            localStorage.setItem('cart', JSON.stringify(currentCart));
        }
    }

    const setProductData = async () => {
        const data = await setProducts(Data);
        return data;
    }

    useEffect(() => {
        const myCart = localStorage.getItem('cart');
        
        setProductData();
        
        if(!myCart){
            localStorage.setItem('cart', []);
        }
        else {
            if(myCart !=='') {
                setCart(JSON.parse(myCart));
                setCartTotal(calculateCartTotal(JSON.parse(myCart), 'price'));
            }
        }
    }, [])
        return (
            <Context.Provider value={
                {
                    products: products,
                    cart: cart,
                    cartTotal: cartTotal,
                    updateCart: updateCart
                }
            }>
                {props.children}
            </Context.Provider>
        )
    }

export default ContextApi

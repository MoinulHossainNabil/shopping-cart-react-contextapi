import React, { Component } from 'react'
import Data from './Data';

export const Context = React.createContext();

export class ContextApi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            cart: [],
            cartTotal: 0,
            message: ""
        }
    }

    calculateSumFromArrayOfObjects = (arr, prop) => {
        return arr.reduce((item, current) => item + current[prop] * current.quantity, 0);
    }

    updateCart = (item, quantity) => {
        let currentCart = [...this.state.cart];
        const product = this.state.cart.find(i => i.id === item.id);
        if(product) {
            const newCart = [];
            for(let i of this.state.cart) {
                    if(i.id === item.id) {
                        i.quantity += parseInt(quantity);
                        if(i.quantity === 0) {
                            continue;
                        }
                    }
                    newCart.push(i);
            }
            this.setState(
                {cart: newCart, cartTotal: this.calculateSumFromArrayOfObjects(newCart, 'price')}
            )
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
        else {
            currentCart.push({...item, quantity: 1});
            this.setState(
                {cart: currentCart, cartTotal: this.calculateSumFromArrayOfObjects(currentCart, 'price')}
            ) 
            localStorage.setItem('cart', JSON.stringify(currentCart));
        }
    }

    componentDidMount() {
        const myCart = localStorage.getItem('cart');
        
        this.setState({
            products: Data
        });
        
        if(!myCart){
            localStorage.setItem('cart', []);
        }
        else {
            if(myCart !=='') {
                this.setState({
                    cart: JSON.parse(myCart),
                    cartTotal: this.calculateSumFromArrayOfObjects(JSON.parse(myCart), 'price')
                })
            }
        }
    }
    
    render() {
        return (
            <Context.Provider value={
                {
                    ...this.state,
                    updateCart: this.updateCart
                }
            }>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ContextApi

import React from 'react'
import CartContext from './cart-context'

export default function CartProvider(props) {

    const addItemToCartHandler = (item) => {};

    const removeItemFromCartHnadler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHnadler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

import React from 'react'
import { useReducer } from 'react';
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD'){
    // const updatedItems = state.items.concat(action.item);
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem){
      updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else{
      updatedItem = {...action.item.item};
      updatedItems = state.items.concat(updatedItem);
    }

    // const updateTotalAmount = state.totalAmount + action.item.price*action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount
    };
  }
  return defaultCartState;
}


export default function CartProvider(props) {

    const [cartState, dispathCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
      dispathCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHnadler = (id) => {
      dispathCartAction({type: 'REMOVE', id: id})
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHnadler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

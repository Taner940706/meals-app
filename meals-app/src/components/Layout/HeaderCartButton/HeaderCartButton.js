import React from 'react'
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import {useContext} from 'react'
import CartContext from '../../../store/cart-context'


export default function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  return (
    <button>
        <span className={classes.button} onClick={props.onClick}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
  )
}

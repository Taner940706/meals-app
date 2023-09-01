import React from 'react'
import classes from './Cart.module.css'

export default function Cart(props) {
    const cartItems = (
        <ul className={classes['cart-items']}>
            <li>{item.name}</li>
        </ul>
    )
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}

import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

export default function Cart(props) {
    const cartItems = (
        <ul className={classes['cart-items']}>
            <li>{item.name}</li>
        </ul>
    )
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>25.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

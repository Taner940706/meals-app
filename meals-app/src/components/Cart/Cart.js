import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';

export default function Cart(props) {

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length >0;

    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = od => {};
    const catrItemAddHandler = item => {};
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => 
          (
            <CartItem ket={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={catrItemAddHandler.bind(null, item)} />
          ))}
        </ul>
    )
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

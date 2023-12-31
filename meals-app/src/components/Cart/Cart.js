import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';
import Checkout from './Checkout'

export default function Cart(props) {

    const [isCheckout, SetIsCheckout] = useState(false);
    const [isSubmitting , setIsSubmitting] = useState(false);
    const [didSubmitting , setDidSubmitting] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length >0;

    const cartCtx = useContext(CartContext);

    const orderHandler = () => {
      SetIsCheckout(true);
    }

    const submitOrderHandler = async (userData) => {
      setIsSubmitting(true);
      await fetch("https://meals-app-bc976-default-rtdb.europe-west1.firebasedatabase.app/.orders.json", {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items

        })
      });

      setIsSubmitting(false);
      setDidSubmitting(true);
    };

    const cartItemRemoveHandler = id => {
      cartCtx.removeItem(id)
    };
    const catrItemAddHandler = item => {
      cartCtx.addItem({...item, amount: 1})
    };
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => 
          (
            <CartItem ket={item.id} name={item.name} amount={item.amount} price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null,item.id)} 
            onAdd={catrItemAddHandler.bind(null, item)} />
          ))}
        </ul>
    )

    const cartModalContent = <>{cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />}
    {!isCheckout && <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>}</>

    const isSubmittingModalContent = <p>Sending order data...</p>;
    const didSubmitModalContent = <p>Succesfully sent the order!</p>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmitting && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmitting && didSubmitModalContent}
    </Modal>
  )
}

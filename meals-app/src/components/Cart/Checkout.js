import classes from './Chechout.module.css'

const Checkout = (props) => {

    const confirmHandler = (event) => {
        event.PreventDefault()
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your name: </label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street: </label>
                <input type="text" id="street" />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City: </label>
                <input type="text" id="city" />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal code: </label>
                <input type="text" id="postal" />
            </div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    )

}

import React, {useEffect} from 'react';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import {loadStripe} from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//******************* REDUX CONTENT
import { useSelector, useDispatch } from 'react-redux';
import { clear_cart } from '../redux/features/cartSlice';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

//custom styles that can be set in JS for Material-UI
const useStyles = makeStyles({
  backgroundPurple: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #800080 90%)',
      padding: 10,
      marginBottom: 10
  }
});

const Cart = () => {

  const classes = useStyles();

  //define redux state management
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cartState);

  const [getCheckout, {data, loading}] = useLazyQuery(QUERY_CHECKOUT);

  //called when the clear cart button is clicked
  function clearCart(){
    return dispatch(clear_cart());
  }

  //calculate the subtotal of the cart array
  function calculateSubtotal(cartArray){
    return cartArray.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  function submitCheckout(){
    const productIds = [];

    cart.forEach(item => {
        productIds.push(item._id);
    })

    getCheckout({variables: {products: productIds}});
  }

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  if(loading){
    return <h2>Taking you to checkout!</h2>
  }

  return (
    <>
      <h1 className={`cart-user ${classes.backgroundPurple}`}>Welcome to your Cart {Auth.getProfile().data.username}</h1>
      <div className="cart-buttons">
        {cart.length ? (
          <>
            <span className={classes.backgroundPurple}><h2>Subtotal: ${calculateSubtotal(cart)}</h2></span>
            <Button variant="contained" onClick={submitCheckout}>Checkout</Button>
            <button onClick={submitCheckout}>Checkout</button>
            <Button variant="contained" onClick={clearCart}>Clear Cart</Button>
          </>
          ) : (
            <h2 className={classes.backgroundPurple}>There are no items in your cart!</h2>
          )}
      </div>
      <ul className="cart-list">
        {
          cart.map( item => <CartItem item={item} key={item._id}/> )
        }
      </ul>
    </>
  );
};
export default Cart;
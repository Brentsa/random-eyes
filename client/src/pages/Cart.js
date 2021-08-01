import React, {useEffect} from 'react';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import {loadStripe} from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';

//Material UI imports
import Button from '@material-ui/core/Button';

//******************* REDUX CONTENT
import { useSelector, useDispatch } from 'react-redux';
import { clear_cart } from '../redux/features/cartSlice';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  //define redux state management
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cartState);

  //lazy query used to generate a stripe session ID based on the items in the cart
  const [getCheckout, {data, loading}] = useLazyQuery(QUERY_CHECKOUT);

  //called when the clear cart button is clicked
  function clearCart(){
    return dispatch(clear_cart());
  }

  //calculate the subtotal of the cart array
  function calculateSubtotal(cartArray){
    return cartArray.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  //called when the checkout button is clicked
  function submitCheckout(){
    const productIds = [];

    cart.forEach(item => {
        productIds.push(item._id);
    })

    //feed productIds into the get checkout lazy query to generate an stripe session ID
    getCheckout({variables: {products: productIds}});
  }

  //used to check if there is checkout data from the getCheckout lazy query, once session data is returned we go to stripe.
  useEffect(() => {
    if (data) {
      stripePromise.then(res => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  //Once checkout is clicked and we query for the order, then inform the user we are loading checkout
  if(loading || data){
    return <h2>Loading your order, taking you to checkout momentarily...</h2>
  }

  return (
    <>
    {
      Auth.loggedIn() ? (
      <>
        <h1 className="cart-user dashboard-title">Welcome to your Cart {Auth.getProfile().data.username}</h1>
        <div className="cart-buttons">
          {cart.length ? (
            <>
              <span className="cart-element" style={{margin: "10px 0"}}><h2>Subtotal: <span>${calculateSubtotal(cart)}</span></h2></span>
              <Button variant="contained" style={{margin: "10px 0"}} onClick={submitCheckout}>Checkout</Button>
              <Button variant="contained" style={{margin: "10px 0"}} onClick={clearCart}>Clear Cart</Button>
            </>
            ) : (
              <h2 className="cart-element">There are no items in your cart!</h2>
            )}
        </div>
        <ul className="cart-list">
          {
            cart.map( item => <CartItem item={item} key={item._id}/> )
          }
        </ul>
      </>
      ) : (
        <>
        <h1>Please log in to view your cart!</h1>
        </>
      )
    }
    </>
  );
};
export default Cart;
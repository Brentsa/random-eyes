import React, {useEffect} from 'react';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import {loadStripe} from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';

//******************* REDUX CONTENT
import { useSelector, useDispatch } from 'react-redux';
import { clear_cart } from '../redux/features/cartSlice';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  // const stripe = useStripe();
  // const elements = useElements();

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
        // for(let i = 0; i < item.purchaseQuantity; i++){
        //     productIds.push(item._id);
        // }
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
      <div className="cart-user">Hello {Auth.getProfile().data.username}</div>
      <div className="cart-buttons">
        {cart.length ? (
          <>
            <span>Subtotal: ${calculateSubtotal(cart)}</span>
            <button onClick={submitCheckout}>Checkout</button>
            <button onClick={clearCart}>Clear Cart</button> 
          </>
          ) : (
            <h2>There are no items in your cart!</h2>
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
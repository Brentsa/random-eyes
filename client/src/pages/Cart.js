import React from 'react';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
//******************* REDUX CONTENT
import { useSelector, useDispatch } from 'react-redux';
import { clear_cart } from '../redux/features/cartSlice';

const Cart = () => {

  //define redux state management
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cartState);

  //called when the clear cart button is clicked
  function clearCart(){
    return dispatch(clear_cart());
  }

  //calculate the subtotal of the cart array
  function calculateSubtotal(cartArray){
    return cartArray.reduce((total, item) => total + item.price, 0);
  }

  return (
    <>
      <div className="cart-user">Hello {Auth.getProfile().data.username}</div>
      <div className="cart-buttons">
        {cart.length ? (
          <>
            <span>Subtotal: ${calculateSubtotal(cart)}</span>
            <button>Checkout</button>
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
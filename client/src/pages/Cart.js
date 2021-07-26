import React from 'react';
import CartItem from '../components/CartItem';
const Cart = () => {
  const cartItems = [
    { picture: 'https://picsum.photos/200', title: 'test title 1', description: 'test desc 1', cost: 123 },
    { picture: 'https://picsum.photos/201', title: 'test title 2', description: 'test desc 2', cost: 123 },
    { picture: 'https://picsum.photos/202', title: 'test title 3', description: 'test desc 3', cost: 123 },
    { picture: 'https://picsum.photos/203', title: 'test title 4', description: 'test desc 4', cost: 123 },
    { picture: 'https://picsum.photos/204', title: 'test title 5', description: 'test desc 5', cost: 123 }
  ]
  return (
    <>
    <div className="cart-user">Hello User</div>
    <div className="cart-buttons">
      <span>Subtotal</span>
      <span>Checkout</span>
    </div>
    <ul className="cart-list">
    {
      cartItems.map( item => <CartItem item={ item }/> )
    }
    </ul>
    </>
  );
};
export default Cart;
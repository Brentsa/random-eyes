import React from 'react';
//******************* REDUX CONTENT
import { useDispatch } from 'react-redux';
import {remove_from_cart} from '../../redux/features/cartSlice'

function CartItem({ item }){

  //define redux state management
  const dispatch = useDispatch();

  //called when the remove from cart button is clicked, delete the product from cart state
  function removeFromCart(){
    dispatch(remove_from_cart({_id: item._id}));
  }

  return (
    <li className="cart-item">
        <div className="img-container">
            <img src={ require(`../../assets/images/Product Images/${item.image}`).default} alt={item.name} />
        </div>
        <div className="item-desc">
            <span>{ item.name }</span>
            <span>{ item.description }</span>
        </div>
        <div className="item-price">${ item.price }</div>
        <button onClick={removeFromCart}>Remove</button>
    </li>
  );
};

export default CartItem;
import React from 'react';

//Material UI imports
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        <div className="cart-title">
            <span>{ item.name }</span>
        </div>
        <div className="img-container">
            <img src={`/images/${item.image}`} alt={item.name} />
        </div>
        <div className="item-desc">
            { item.description }  
        </div>
        <div className="item-price">
          ${ item.price }
          <Button variant="contained" onClick={removeFromCart}>Remove</Button>
        </div>
    </li>
  );
};

export default CartItem;
import React from 'react';
const CartItem = ( { item }) => {
  return (
    <>
    <li className="cart-item">
        <div className="img-container">
            <img src={ item.picture} alt="random" />
        </div>
        <div className="item-desc">
            <span>{ item.title }</span>
            <span>{ item.description }</span>
        </div>
        <div className="item-price">${ item.cost.toFixed(2) }</div>
    </li>
    </>
  );
};
export default CartItem;
import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { FiLogOut, } from 'react-icons/fi'
import { FaEye } from "react-icons/fa"


const AuthButtons = () => {
  const {cart} = useSelector(state => state.cartState);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav >
        {Auth.loggedIn() ? (
          <>
            <Link to="/dashboard"><FaEye/></Link>
            <Link to="/cart" className='cart-icon'><FaShoppingCart  />{cart.length > 0 && <div className='cart-count'>{ cart.length}</div>}</Link>
            <Link to="/" onClick={logout}><FiLogOut /></Link>
          </>
        ) : (
          <div className="sign-up-button">
          <>
            <Link to="/signup" id="create-account"><FaUserPlus/>Signup</Link>
          </>
          </div>
        )}
    </nav>
  );
};
export default AuthButtons;
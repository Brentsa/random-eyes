import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FaShoppingCart } from 'react-icons/fa'
import { FiLogOut, } from 'react-icons/fi'
import { FaEye } from "react-icons/fa"


const AuthButtons = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav >
        
        {Auth.loggedIn() ? (
          <>
            <Link to="/dashboard"><FaEye/></Link>
            <Link to="/cart"><FaShoppingCart /></Link>
            <Link to="/" onClick={logout}><FiLogOut /></Link>
          </>
        ) : (
          <div className="welcome">
          <>
            <Link to="/signup" id="create-account">Create an account</Link>
          </>
          </div>
        )}
    </nav>
  );
};
export default AuthButtons;
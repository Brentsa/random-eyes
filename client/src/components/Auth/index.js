import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FaShoppingCart } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
const AuthButtons = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav>
        {Auth.loggedIn() ? (
          <>
            <Link to="/cart"><FaShoppingCart /></Link>
            <Link to="/" onClick={logout}>
              <FiLogOut />
            </Link>
          </>
        ) : (
          <>
            {/* <Link to="/login">Login</Link> */}
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
  );
};
export default AuthButtons;
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
const AuthButtons = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav>
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile">Profile</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
      </nav>
  );
};
export default AuthButtons;
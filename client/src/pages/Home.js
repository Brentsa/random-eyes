import React from 'react';
import Login from '../components/Login';
import Auth from '../utils/auth';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
    {Auth.loggedIn() ? (
      <Gallery/>
      ) : (
      <Login />
    )}
    </>
  );
};
export default Home;
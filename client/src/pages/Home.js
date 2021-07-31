import React from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'
import { GiBoltEye } from "react-icons/gi"

function Home(){
  return (
    <>
      <div id="home-info">
        <div className="welcome">
          <h2 className="welcome-to">Welcome to Randomeyes.</h2>
          {Auth.loggedIn() ? (<p>Click the eye below to start shopping!</p>):(<p>Create an account or log in below to start shopping!</p>)}
        </div>
        <div className="login-home">
          {Auth.loggedIn() ? (<Link to="/dashboard" style={{fontSize: 120}}><GiBoltEye/></Link>):(<Login/>)}
        </div>
        
        <h3 className="welcome1">
          Randomeyes is a modern e-commerce application with a novel twist on purchasing. 
        </h3>
        <div className="welcome-info">
        <p>
          Consumers are faced with an infinite amount of product choices in 2021. Searching for the simplest of items online can yield hundreds of results. 
          Astronomical variation between prices, aggregate reviews that are biased, and product knock-offs all plague the modern online shopping experience. 
          The insane amount of choice can leave shoppers feeling paralysed when trying to decide what to buy. If you've felt this way before then Randomeyes is the shop for you!
        </p>
        <p>
          Randomeyes brings back the good old days of walking into a shop and not knowing what you might come out with. Our team hand picks top of the line products from reputable suppliers.
          These products are then presented to you in single file with a random order. If you like a product you can add it to your cart and purchase it later on. 
          If you don't have an interest in the product then you can pass on it and move to the next product in line. 
          You never know what hidden gems you might find on Randomeyes but your enjoyment will always be guaranteed. 
        </p>
      </div>
      </div>
      
      
    </>
  );
};
export default Home;
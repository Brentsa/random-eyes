import React from 'react';
import Login from '../components/Login';

function Home(){
  return (
    <>
      <div>
        <h2>Welcome to Randomeyes.</h2>
        <p>Log in below to start shopping!</p>
      </div>
      <Login/>
      <div>
        <h3>
          Randomeyes is a modern e-commerce application with a novel twist on purchasing products. 
        </h3>
        <p>
          Consumers are faced with an infinite amount of product choices in 2021. Searching for the simplest of items online can yield hundreds of results. 
          Astronomical variation between prices, aggregate reviews that are biased, and product knock-offs all plague the modern online shopping experience. 
          The insane amount of choice can leave shoppers feeling paralysed when trying to decide what to buy. If you've felt this way before then Randomeyes is the shop for you!
        </p>
        <p>
          Randomeyes brings back the good old days of walking into a shop and not knowing what you might come out with. Our team hand picks top of the line products from reputable suppliers.
          These products are then presented to you in single file with a randome order. If you like a product you can add it to your cart and purchase it later on. 
          If you don't have an interest in the product then you can pass on it and move to the next product in line. 
          You never know what hidden gems you might find on Randomeyes but your enjoyment will always be guaranteed. 
        </p>
      </div>
    </>
  );
};
export default Home;
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  const { productid: userParam } = useParams();
  console.log( { productid: userParam } )

  // here you will do a useQuery to get data about a specific product to display
  return (
    <h2>Product Page</h2>
  );
};

export default Product;
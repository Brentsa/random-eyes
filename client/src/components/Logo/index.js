import React from 'react';
import eyes from '../../assets/images/AdobeStock_314558730.png@1.png'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <Link to="/"><img src={eyes} alt="logo"/></Link>
    </div>
  );
};
export default Logo;
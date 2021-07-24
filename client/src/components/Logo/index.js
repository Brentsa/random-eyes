import React from 'react';
import eyes from '../../assets/images/randomeyes.JPG'


const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <a href="/"><img src={eyes} alt="test"/></a>
    </div>
  );
};
export default Logo;
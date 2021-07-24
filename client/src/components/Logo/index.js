import React from 'react';
import eyes from '../../assets/images/AdobeStock_300838298 (1).jpg'


const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <a href="/"><img src={eyes} alt="test"/></a>
    </div>
  );
};
export default Logo;
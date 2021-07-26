import React from 'react';
import AuthButtons from '../Auth';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <Logo/>
          <div className="menu-item">
            <AuthButtons />  
          </div>   
      </div>
    </header>
  );
};
export default Header;
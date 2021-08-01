import React from 'react';
import AuthButtons from '../Auth';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="header-title">
        <Logo/>
        <div className="menu-item">
          <AuthButtons />  
        </div> 
    </header>
  );
};
export default Header;
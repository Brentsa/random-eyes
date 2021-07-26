import React from 'react';
import Nav from '../Nav';
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
       {/* <Nav /> */}
       
    </header>
  );
};
export default Header;
import React from 'react';
import Nav from '../Nav';
import AuthButtons from '../Auth';
import Logo from '../Logo';
//import {FaSearch} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <Logo/>
          <div className="menu-item">
          {/*<FaSearch/>*/}
          <AuthButtons />  
          </div>
                  
      </div>
       <Nav />
       
    </header>
  );
};
export default Header;
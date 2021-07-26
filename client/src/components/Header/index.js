import React from 'react';
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
    </header>
  );
};
export default Header;
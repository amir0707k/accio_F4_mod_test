import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <p>Shopping Cart</p>
        </Link>
      </div>
      <div className="right">
        <Link to="/">
          <p>Home Page</p>
        </Link>
        <Link to="/cart">
          <p>Cart Page</p>
        </Link>
      </div>
    </div>
  );
}



export default Header
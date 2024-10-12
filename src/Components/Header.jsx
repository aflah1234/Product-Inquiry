import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';  // Importing the styles for the header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My E-commerce</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inquiry">Inquiry</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;

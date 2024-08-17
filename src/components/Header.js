import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css'; // Make sure to create this CSS file
export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__brand">
          {/* <img src="path/to/logo.png" alt="Brand Logo" className="header__logo" /> */}
          <span className="header__brand-name">Shree Shyam Properties</span>
        </div>
      </div>

      <div className="header__center">
        <div className="header__search">
          <input type="text" placeholder="Search" className="header__search-input" />
          <FaSearch className="header__search-icon" />
        </div>
      </div>

      <div className="header__right">
        <Link to="/" className="header__link">Home</Link>
        <Link to="/about" className="header__link">About</Link>
        <Link to="/sign-in" className="header__link">Sign In</Link>
      </div>
    </header>
  )
}

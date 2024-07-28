import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">VISIONARY</div>
      <ul className="nav-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/shop">SHOP</a></li>
        <li><a href="/blog">BLOG</a></li>
        <li><a href="/contact">CONTACT US</a></li>
      </ul>
      <div className="nav-icons">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
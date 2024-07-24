import React, { useState } from 'react';
import './navbar.css'; // CSS file for styling

const Navbar = () => {
  const [active, setActive] = useState('home'); // State to manage active link

  const handleClick = (section) => {
    setActive(section); // Update active state based on clicked link
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-left">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="nav-menu">
        <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => handleClick('home')}>
            Home
          </a>
        </li>
        <li className={`nav-item ${active === 'about' ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => handleClick('about')}>
            About
          </a>
        </li>
        <li className={`nav-item ${active === 'products' ? 'active' : ''}`}>
          <a href="#products" className="nav-link" onClick={() => handleClick('products')}>
            Products
          </a>
        </li>
      </ul>

      {/* Right side: Login and Sign Up */}
      <div className="navbar-right">
        <a href="#login" className="nav-link">
          Login
        </a>
        <a href="#signup" className="nav-link">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

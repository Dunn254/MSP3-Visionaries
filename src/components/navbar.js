import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure you have the correct path to your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-left">
        <img src="/src/images/MainLogo.png" alt="Logo" className="logo" />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
      </ul>

      {/* Right side: Login and Sign Up */}
      <div className="navbar-right">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
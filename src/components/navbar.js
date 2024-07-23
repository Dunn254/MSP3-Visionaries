import React, { useState } from 'react';
import './navbar.css'; // CSS file for styling

const Navbar = () => {
  const [active, setActive] = useState('home'); // State to manage active link

  const handleClick = (section) => {
    setActive(section); // Update active state based on clicked link
  };

  return (
    <nav className="navbar">
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
        <li className={`nav-item ${active === 'services' ? 'active' : ''}`}>
          <a href="#services" className="nav-link" onClick={() => handleClick('services')}>
            Services
          </a>
        </li>
        <li className={`nav-item ${active === 'contact' ? 'active' : ''}`}>
          <a href="#contact" className="nav-link" onClick={() => handleClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

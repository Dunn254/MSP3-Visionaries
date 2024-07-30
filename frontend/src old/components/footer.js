import React from 'react';
import './footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-right">
        <ul className="footer-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

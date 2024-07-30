import React from 'react';
import './MainSection.css';
import image1 from '../images/AI-1.jpg';
import image2 from '../images/AI-2.jpg';

const MainSection = () => {
  return (
    <div className="features-section py-5 bg-light">
      <div className="container">
        
        <div className="row text-section">
          <div className="col-md-4 mb-4">
            <img src={image1} alt="AI-1" className="img-fluid mb-3" />
          </div>
          <div className="col-md-8">
            <h2>Best Glasses</h2>
            <p>Discover the finest glasses with superior quality and trendy designs. Our collection offers unparalleled comfort and style, ensuring you see and look your best every day. Elevate your eyewear game with our premium selection.</p>
            <p>Shop our best glasses for ultimate clarity and style. Experience unmatched comfort and elegant designs tailored for you.</p>
          </div>
        </div>
        <div className="row text-section">
          <div className="col-md-8">
            <h2>New Arrivals</h2>
            <p>Explore our new arrival glasses with trendy styles and superior comfort. Stay ahead of the fashion curve with the latest designs crafted just for you.</p>
            <p>Discover our new arrival glasses collection, blending modern style with exceptional comfort. Perfect for updating your look.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src={image2} alt="AI-2" className="img-fluid mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

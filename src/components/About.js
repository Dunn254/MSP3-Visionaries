import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section py-5">
      <div className="container">
        <h1 className="text-center mb-4">About Us</h1>
        <p className="lead text-center mb-5">Learn more about us and our mission to provide the best shopping experience.</p>
        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="img-fluid mb-3" />
            <h2>Our Mission</h2>
            <p>Our mission is to offer high-quality products at affordable prices. We believe in customer satisfaction and strive to meet the needs of our customers through exceptional service and a wide range of products.</p>
          </div>
          <div className="col-md-6 mb-4">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="img-fluid mb-3" />
            <h2>Our Story</h2>
            <p>Founded in 2020, our company has grown from a small startup to a leading player in the e-commerce industry. Our journey is marked by our commitment to innovation, quality, and customer-centricity.</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 mb-4">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="img-fluid mb-3" />
            <h2>Why Choose Us?</h2>
            <p>We offer a diverse selection of products to meet all your needs. Our dedicated team works tirelessly to ensure that you have the best shopping experience. We are constantly expanding our product range to bring you the latest trends and best deals.</p>
          </div>
          <div className="col-md-6 mb-4">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="img-fluid mb-3" />
            <h2>Customer Testimonials</h2>
            <p>Our customers love us! Here's what they have to say: "Great quality products and fantastic customer service." "I always find what I need at great prices." "Fast shipping and easy returns make shopping here a breeze."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
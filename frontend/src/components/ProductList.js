import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from './product'
import './ProductList.css';
import image3 from '../images/HUD-1.jpg';
import image4 from '../images/HUD-2.jpg';
import image5 from '../images/image1.jpg';
import image6 from '../images/image2.jpg';
import image7 from '../images/image3.jpg';
import image8 from '../images/HoverGlasses1.jpg';

const ProductList = () => {
  const products = [
    { id: 1, title: 'Aviator Glasses', price: '$10', image: image3 },
    { id: 2, title: 'Round Glasses', price: '$20', image: image4 },
    { id: 3, title: 'Wayfarer Glasses', price: '$30', image: image5 },
    { id: 4, title: 'Cat-eye Glasses', price: '$40', image: image6 },
    { id: 5, title: 'Square Glasses', price: '$50', image: image7 },
    { id: 6, title: 'Rimless Glasses', price: '$60', image: image8 },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col lg={8}>
          <h2 className="text-center mb-4">Our Products</h2>
          <Row>
            {products.map(product => (
              <Col key={product.id} sm={12} md={6} className="mb-4">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <div className="text-block">
            <h3>About Our Products</h3>
            <p>Our products are carefully curated to meet the highest standards of quality and style. Whether you're looking for the latest trends or classic staples, we have something for everyone.</p>
            <p>Each product is crafted with attention to detail and a commitment to excellence. We believe in providing our customers with the best possible shopping experience, from browsing to purchase and beyond.</p>
            <p>Browse our selection and find the perfect products to enhance your lifestyle. We are dedicated to bringing you the best in fashion, function, and value.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './ProductList.css'; // Ensure this file exists for custom styles

const ProductList = () => {
  const products = [
    { id: 1, title: 'Product 1', price: '$10', image: '/path/to/image1.jpg' },
    { id: 2, title: 'Product 2', price: '$20', image: '/path/to/image2.jpg' },
    { id: 3, title: 'Product 3', price: '$30', image: '/path/to/image3.jpg' },
    { id: 4, title: 'Product 4', price: '$40', image: '/path/to/image4.jpg' },
    { id: 5, title: 'Product 5', price: '$50', image: '/path/to/image5.jpg' },
    { id: 6, title: 'Product 6', price: '$60', image: '/path/to/image6.jpg' },
  ];

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
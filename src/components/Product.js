import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PurchaseForm from './PurchaseForm';

const Product = ({ product }) => {
    const [showForm, setShowForm] = useState(false);

    const handleBuyNow = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            <Card className="product-card h-100">
                <Card.Img variant="top" src={product.image} className="product-image" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="text-muted">{product.price}</Card.Text>
                    <Button variant="primary" className="mt-auto" onClick={handleBuyNow}>Buy Now</Button>
                </Card.Body>
            </Card>
            {showForm && <PurchaseForm product={product} onClose={handleCloseForm} />}
        </div>
    );
};

export default Product;

import React from 'react';
import Product from './Product';


const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 300, image: 'image3.jpg' }
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;

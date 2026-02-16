import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Replace with your actual Product Service URL
        axios.get('http://ProductService-env.eba-dpjkpmpr.eu-north-1.elasticbeanstalk.com/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container">
            <h2 className="section-title">Available Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <div className="card-body">
                            <div className="product-icon">📦</div>
                            <h3>{product.name}</h3>
                            <p className="price">${product.price}</p>
                            <button className="buy-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
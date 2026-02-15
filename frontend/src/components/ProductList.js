import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Package, RefreshCcw } from 'lucide-react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = () => {
        setLoading(true);
        // This points to your Spring Boot ProductController
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Package color="#2563eb" /> Product Catalog
                </h2>
                <button
                    onClick={fetchProducts}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Refresh Data"
                >
                    <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
                </button>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Connecting to Microservice...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition-shadow">
                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Package size={24} color="#2563eb" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                            <p className="text-2xl font-semibold text-blue-600 mt-2">${product.price}</p>
                            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 font-medium">
                                <ShoppingCart size={18} /> Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
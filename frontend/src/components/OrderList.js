import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Replace with your actual Order Service URL
        axios.get('http://orderservice-env.eba-fhvmpez2.eu-north-1.elasticbeanstalk.com/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    return (
        <div className="container" style={{ marginTop: '40px' }}>
            <h2 className="section-title">Recent Orders</h2>
            <div className="table-container card">
                <table className="order-table">
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.productName || 'Smart Watch'}</td>
                            <td>{order.quantity}</td>
                            <td><span className="badge">Processing</span></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;
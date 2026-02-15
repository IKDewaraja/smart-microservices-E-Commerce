import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipboardList } from 'lucide-react';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://orderservice-env.eba-fhvmpez2.eu-north-1.elasticbeanstalk.com/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error("Error fetching orders:", error));
    }, []);

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                <ClipboardList color="#059669" /> Recent Orders
            </h2>
            <table className="w-full text-left">
                <thead>
                <tr className="border-b text-gray-500 uppercase text-xs">
                    <th className="py-2">Order ID</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Qty</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                    <tr key={order.orderId} className="border-b hover:bg-gray-50">
                        <td className="py-3 font-mono text-sm">#{order.orderId}</td>
                        <td className="py-3">{order.productName}</td>
                        <td className="py-3">{order.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
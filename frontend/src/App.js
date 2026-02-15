import React from 'react';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import './App.css';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-extrabold text-blue-800 tracking-tight">
              AWS <span className="text-gray-900">CloudShop</span>
            </h1>
            <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Microservices Demo
            </div>
          </div>
        </nav>

        <main className="container mx-auto py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <ProductList />
          <OrderList/>
          </div>
        </main>

        <footer className="text-center py-8 text-gray-400 text-sm">
          Built with Spring Boot & React • Deployed on AWS
        </footer>
      </div>
  );
}

export default App;
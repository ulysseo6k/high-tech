import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ id, name, price, image, description }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative h-64">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/product/${id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4 h-20">{description}</p>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">{price}€</span>
          <button 
            onClick={() => addToCart({ id, name, price, image })}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
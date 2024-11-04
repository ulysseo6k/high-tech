import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">High Tech Shop</Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Produits</Link>
            <Link to="/avis" className="text-gray-600 hover:text-indigo-600">Avis</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
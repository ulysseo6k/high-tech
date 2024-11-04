import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Votre panier est vide</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">
          Retourner aux produits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Votre Panier</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center py-4 border-b">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price}€</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
        <div className="mt-8">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>{total}€</span>
          </div>
          <Link
            to="/checkout"
            className="mt-4 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
          >
            Procéder au paiement
          </Link>
        </div>
      </div>
    </div>
  );
}
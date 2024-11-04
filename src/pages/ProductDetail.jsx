import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-contain md:w-96"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
            <p className="mt-4 text-xl text-gray-600">{product.price}€</p>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-8">
              <button
                onClick={() => addToCart(product)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
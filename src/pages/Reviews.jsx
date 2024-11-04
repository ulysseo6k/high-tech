import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const [reviews] = useState([
    {
      id: 1,
      name: 'Sophie Martin',
      rating: 5,
      date: '2023-11-15',
      comment: 'Excellent service client et produits de qualité. La livraison était rapide et bien emballée.',
      product: 'Casque Audio Pro'
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      rating: 4,
      date: '2023-11-10',
      comment: 'Très satisfait de mon achat. Le rapport qualité-prix est excellent.',
      product: 'Montre Connectée'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    product: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre avis !');
    setNewReview({
      name: '',
      rating: 5,
      comment: '',
      product: ''
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Avis Clients</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Derniers avis</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.product}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Laissez votre avis</h3>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Produit</label>
                <select
                  required
                  value={newReview.product}
                  onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Sélectionnez un produit</option>
                  <option value="Casque Audio Pro">Casque Audio Pro</option>
                  <option value="Montre Connectée">Montre Connectée</option>
                  <option value="Enceinte Portable">Enceinte Portable</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Note</label>
                <div className="flex space-x-1 mt-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          rating <= newReview.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Commentaire</label>
                <textarea
                  required
                  rows={4}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
              >
                Publier l'avis
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
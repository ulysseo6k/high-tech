import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6">Nos Coordonnées</h3>
          <div className="space-y-4">
            <p>
              <strong>Adresse:</strong><br />
              42 Avenue des Champs-Élysées<br />
              75008 Paris, France
            </p>
            <p>
              <strong>Téléphone:</strong><br />
              01 23 45 67 89
            </p>
            <p>
              <strong>Email:</strong><br />
              contact@hightechshop.fr
            </p>
            <p>
              <strong>Horaires:</strong><br />
              Lundi - Samedi: 10h00 - 20h00<br />
              Dimanche: Fermé
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sujet</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
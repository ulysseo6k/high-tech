import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    promoCode: ''
  });
  const [discount, setDiscount] = useState(0);

  const promoCodes = {
    'SOLDES30': 30,
    'HIVER20': 20,
    'BIENVENUE10': 10
  };

  const validateCard = (number) => {
    // Algorithme de Luhn pour la validation de carte
    let sum = 0;
    let isEven = false;
    
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      isEven = !isEven;
    }
    
    return sum % 10 === 0;
  };

  const handlePromoCode = () => {
    const discountPercent = promoCodes[formData.promoCode];
    if (discountPercent) {
      setDiscount(discountPercent);
      alert(`Code promo appliqué ! -${discountPercent}% sur votre commande`);
    } else {
      alert('Code promo invalide');
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const finalTotal = total * (1 - discount / 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateCard(formData.cardNumber.replace(/\s/g, ''))) {
      alert('Numéro de carte invalide');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      alert('Date d\'expiration invalide');
      return;
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      alert('CVV invalide');
      return;
    }

    alert('Paiement validé ! Merci de votre achat.');
    clearCart();
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Paiement</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Code Promo</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              name="promoCode"
              placeholder="Entrez votre code promo"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handlePromoCode}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Appliquer
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Adresse</label>
              <textarea
                name="address"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Informations de paiement</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Numéro de carte</label>
              <input
                type="text"
                name="cardNumber"
                required
                maxLength="19"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.cardNumber}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date d'expiration</label>
                <input
                  type="text"
                  name="expiry"
                  required
                  placeholder="MM/YY"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  required
                  maxLength="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <div className="text-right">
              {discount > 0 && (
                <div className="text-sm text-gray-500 line-through">{total}€</div>
              )}
              <span className="text-indigo-600">{finalTotal.toFixed(2)}€</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700"
        >
          Payer {finalTotal.toFixed(2)}€
        </button>
      </form>
    </div>
  );
}
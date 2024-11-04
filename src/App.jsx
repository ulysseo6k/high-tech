import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import { CartProvider } from './context/CartContext';

function App() {
  const products = [
    {
      id: '1',
      name: "Casque Audio Pro",
      price: 299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      description: "Casque audio sans fil avec réduction de bruit active. Profitez d'une qualité sonore exceptionnelle et d'un confort optimal pendant des heures d'écoute."
    },
    {
      id: '2',
      name: "Montre Connectée",
      price: 199,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      description: "Montre intelligente avec suivi d'activité, notifications et mesure de la fréquence cardiaque. Design élégant et autonomie exceptionnelle."
    },
    {
      id: '3',
      name: "Enceinte Portable",
      price: 149,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      description: "Enceinte Bluetooth étanche avec son immersif à 360 degrés. Parfaite pour vos activités en extérieur et vos soirées entre amis."
    }
  ];

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={
              <main className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Nos Produits High Tech
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </div>
              </main>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/avis" element={<Reviews />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
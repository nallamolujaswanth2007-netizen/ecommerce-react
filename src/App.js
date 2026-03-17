import React, { useState } from 'react';
import './index.css';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const [page, setPage] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'shop': return <ShopPage onViewProduct={setSelectedProduct} />;
      case 'collections': return <CollectionsPage onNavigate={navigate} />;
      case 'about': return <AboutPage />;
      case 'login': return <LoginPage onNavigate={navigate} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="page" style={{ backgroundColor: '#faf8f4', minHeight: '100vh', color: '#1a1814' }}>
      <Navbar onCartOpen={() => setCartOpen(true)} currentPage={page} onNavigate={navigate} />
      {renderPage()}
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

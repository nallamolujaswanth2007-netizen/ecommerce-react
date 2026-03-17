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

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#faf8f4',
          minHeight: '100vh',
          color: '#1a1814'
        }}>
          <h1>Something went wrong</h1>
          <p>Please refresh the page or try again later.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1a1814',
              color: '#faf8f4',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ErrorBoundary>
  );
}

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartOpen, currentPage, onNavigate }) {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 2.5rem',
    height: scrolled ? '60px' : '80px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: scrolled ? 'rgba(250,248,244,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--cream3)' : '1px solid transparent',
    transition: 'all 0.4s var(--ease)',
  };

  const logoStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '1.6rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: 'var(--ink)',
    cursor: 'pointer',
  };

  const links = [
    { label: 'Shop', page: 'shop' },
    { label: 'Collections', page: 'collections' },
    { label: 'About', page: 'about' },
  ];

  return (
    <nav style={navStyle}>
      <div style={logoStyle} onClick={() => onNavigate('home')}>LUXE</div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map(l => (
          <span
            key={l.label}
            onClick={() => onNavigate(l.page)}
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: currentPage === l.page ? 'var(--ink)' : 'var(--ink2)',
              cursor: 'pointer',
              paddingBottom: '2px',
              borderBottom: currentPage === l.page ? '1px solid var(--ink)' : '1px solid transparent',
              transition: 'all 0.2s',
            }}
          >
            {l.label}
          </span>
        ))}
      </div>

      {/* Right icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
        <button
          onClick={() => onNavigate('login')}
          style={{ color: 'var(--ink2)', fontSize: '0.9rem', padding: '4px 8px', border: '1px solid var(--cream3)', borderRadius: '4px', background: 'transparent', cursor: 'pointer' }}
          title="Login"
        >
          Login
        </button>
        <button
          onClick={() => onNavigate('shop')}
          style={{ color: 'var(--ink2)', fontSize: '1.1rem', lineHeight: 1, padding: '4px' }}
          title="Search"
        >
          ⌕
        </button>
        <button
          onClick={onCartOpen}
          style={{ position: 'relative', color: 'var(--ink)', fontSize: '1rem', lineHeight: 1, padding: '4px' }}
          title="Cart"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {count > 0 && (
            <span style={{
              position: 'absolute', top: '-4px', right: '-4px',
              background: 'var(--ink)', color: 'var(--cream)',
              width: '16px', height: '16px', borderRadius: '50%',
              fontSize: '9px', fontWeight: 500,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'pulse 0.3s ease',
            }}>
              {count}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

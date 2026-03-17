import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onView, index }) {
  const { dispatch } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeColors = {
    'New': { bg: '#e8f0ec', color: '#085041' },
    'Sale': { bg: '#faeeda', color: '#633806' },
    'Best Seller': { bg: '#ece8f0', color: '#3C3489' },
  };

  return (
    <div
      onClick={() => onView(product)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        animation: `fadeUp 0.5s ease both`,
        animationDelay: `${index * 0.07}s`,
      }}
    >
      {/* Image area */}
      <div style={{
        position: 'relative',
        background: product.bg,
        borderRadius: '8px',
        overflow: 'hidden',
        paddingBottom: '115%',
        marginBottom: '1rem',
        transition: 'transform 0.4s var(--ease)',
        transform: hovered ? 'scale(1.01)' : 'scale(1)',
      }}>
        {/* Emoji product image */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '5rem',
          transition: 'transform 0.4s var(--ease)',
          transform: hovered ? 'scale(1.08) translateY(-4px)' : 'scale(1)',
        }}>
          {product.image}
        </div>

        {/* Badge */}
        {product.badge && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            padding: '3px 10px',
            borderRadius: '3px',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            ...badgeColors[product.badge],
          }}>
            {product.badge}
          </div>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          style={{
            position: 'absolute', bottom: '12px', left: '50%',
            transform: hovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(120%)',
            padding: '0.55rem 1.4rem',
            background: added ? '#1a5c3a' : 'var(--ink)',
            color: 'var(--cream)',
            fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            borderRadius: '3px', fontWeight: 500,
            transition: 'all 0.35s var(--ease)',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          {added ? '✓ Added' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div>
        <p style={{ fontSize: '0.72rem', color: 'var(--ink3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
          {product.category}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '6px' }}>
          {product.name}
        </h3>

        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', gap: '1px' }}>
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill={s <= Math.round(product.rating) ? 'var(--ink)' : 'none'} stroke="var(--ink)" strokeWidth="1">
                <polygon points="5,1 6.2,3.8 9.1,4.1 7,6.1 7.6,9 5,7.5 2.4,9 3,6.1 0.9,4.1 3.8,3.8"/>
              </svg>
            ))}
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--ink3)' }}>({product.reviews})</span>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>${product.price}</span>
          {product.originalPrice && (
            <span style={{ fontSize: '0.82rem', color: 'var(--ink3)', textDecoration: 'line-through' }}>
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color dots */}
        <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
          {product.colors.map((c, i) => (
            <div key={i} style={{
              width: '12px', height: '12px', borderRadius: '50%',
              background: c,
              border: '1.5px solid rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer',
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

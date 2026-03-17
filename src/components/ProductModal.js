import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductModal({ product, onClose }) {
  const { dispatch } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) dispatch({ type: 'ADD_ITEM', product });
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); }, 1200);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 300,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.25s ease',
    }}>
      {/* Overlay */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26,24,20,0.6)',
        backdropFilter: 'blur(6px)',
      }} />

      {/* Modal */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'var(--cream)',
        borderRadius: '12px',
        width: '100%', maxWidth: '800px',
        maxHeight: '90vh', overflowY: 'auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        animation: 'fadeUp 0.35s var(--ease)',
        boxShadow: '0 40px 120px rgba(0,0,0,0.25)',
      }}>
        {/* Image */}
        <div style={{
          background: product.bg,
          borderRadius: '12px 0 0 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '420px', fontSize: '7rem',
          position: 'sticky', top: 0,
        }}>
          {product.image}
          {discount && (
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              background: 'var(--ink)', color: 'var(--cream)',
              padding: '4px 10px', borderRadius: '3px',
              fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em',
            }}>
              −{discount}%
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '2.5rem 2rem' }}>
          <button onClick={onClose} style={{
            position: 'absolute', top: '16px', right: '16px',
            color: 'var(--ink3)', fontSize: '1.2rem', padding: '4px 8px',
          }}>✕</button>

          <p style={{ fontSize: '0.72rem', color: 'var(--ink3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '8px' }}>
            {product.category}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.75rem' }}>
            {product.name}
          </h2>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="12" height="12" viewBox="0 0 10 10" fill={s <= Math.round(product.rating) ? 'var(--ink)' : 'none'} stroke="var(--ink)" strokeWidth="1">
                  <polygon points="5,1 6.2,3.8 9.1,4.1 7,6.1 7.6,9 5,7.5 2.4,9 3,6.1 0.9,4.1 3.8,3.8"/>
                </svg>
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--ink3)' }}>{product.rating} · {product.reviews} reviews</span>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300 }}>${product.price}</span>
            {product.originalPrice && (
              <span style={{ fontSize: '1rem', color: 'var(--ink3)', textDecoration: 'line-through' }}>${product.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.88rem', color: 'var(--ink2)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {product.description}
          </p>

          {/* Colors */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '8px' }}>Color</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {product.colors.map((c, i) => (
                <button key={i} onClick={() => setSelectedColor(i)} style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: c,
                  border: selectedColor === i ? '2px solid var(--ink)' : '1.5px solid rgba(0,0,0,0.12)',
                  outline: selectedColor === i ? '2px solid var(--cream)' : 'none',
                  outlineOffset: '-4px',
                  cursor: 'pointer', transition: 'all 0.2s',
                }} />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '8px' }}>Quantity</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--cream3)', borderRadius: '6px', overflow: 'hidden' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ padding: '8px 16px', background: 'var(--cream2)', fontSize: '1.1rem', color: 'var(--ink2)' }}>−</button>
              <span style={{ padding: '8px 20px', fontSize: '0.9rem', minWidth: '48px', textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ padding: '8px 16px', background: 'var(--cream2)', fontSize: '1.1rem', color: 'var(--ink2)' }}>+</button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            style={{
              width: '100%', padding: '1rem',
              background: added ? '#1a5c3a' : 'var(--ink)',
              color: 'var(--cream)',
              fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              borderRadius: '5px', fontWeight: 500,
              transition: 'background 0.3s',
            }}
          >
            {added ? '✓ Added to Cart' : `Add to Cart — $${(product.price * qty).toFixed(2)}`}
          </button>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--cream3)' }}>
            {['Free shipping over $200', 'Free returns', 'Secure checkout'].map(text => (
              <p key={text} style={{ fontSize: '0.7rem', color: 'var(--ink3)', flex: 1, lineHeight: 1.3 }}>✓ {text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

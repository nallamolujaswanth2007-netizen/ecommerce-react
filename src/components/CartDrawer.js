import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, total, count, dispatch } = useCart();

  const overlayStyle = {
    position: 'fixed', inset: 0, zIndex: 200,
    background: 'rgba(26,24,20,0.5)',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'all' : 'none',
    transition: 'opacity 0.35s var(--ease)',
  };

  const drawerStyle = {
    position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
    width: '420px', maxWidth: '95vw',
    background: 'var(--cream)',
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s var(--ease)',
    display: 'flex', flexDirection: 'column',
    boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={drawerStyle}>
        {/* Header */}
        <div style={{ padding: '2rem 2rem 1.5rem', borderBottom: '1px solid var(--cream3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400 }}>Your Cart</h2>
            <p style={{ fontSize: '0.78rem', color: 'var(--ink3)', letterSpacing: '0.08em', marginTop: '2px' }}>
              {count} {count === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button onClick={onClose} style={{ color: 'var(--ink3)', fontSize: '1.4rem', lineHeight: 1, padding: '4px 8px', borderRadius: '4px', transition: 'color 0.2s' }}>
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ink3)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>∅</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 300 }}>Your cart is empty</p>
              <p style={{ fontSize: '0.82rem', marginTop: '0.5rem', color: 'var(--ink3)' }}>Explore our collection</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1.2rem 0', borderBottom: '1px solid var(--cream3)', animation: 'fadeUp 0.3s ease' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '8px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
                  {item.image}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <p style={{ fontWeight: 500, fontSize: '0.9rem', lineHeight: 1.3 }}>{item.name}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })} style={{ color: 'var(--ink3)', fontSize: '0.85rem', flexShrink: 0, padding: '0 4px' }}>✕</button>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink3)', marginTop: '2px' }}>{item.category}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--cream3)', borderRadius: '6px', overflow: 'hidden' }}>
                      <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, qty: item.qty - 1 })} style={{ padding: '4px 10px', fontSize: '1rem', color: 'var(--ink2)', background: 'var(--cream2)', transition: 'background 0.15s' }}>−</button>
                      <span style={{ padding: '4px 8px', fontSize: '0.85rem', minWidth: '24px', textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, qty: item.qty + 1 })} style={{ padding: '4px 10px', fontSize: '1rem', color: 'var(--ink2)', background: 'var(--cream2)', transition: 'background 0.15s' }}>+</button>
                    </div>
                    <span style={{ fontWeight: 500, fontSize: '0.92rem' }}>${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--cream3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--ink3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Subtotal</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400 }}>${total.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--ink3)', marginBottom: '1.25rem' }}>Shipping and taxes calculated at checkout</p>
            <button
              style={{
                width: '100%', padding: '0.9rem',
                background: 'var(--ink)', color: 'var(--cream)',
                fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                borderRadius: '4px', fontWeight: 500,
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--ink2)'}
              onMouseLeave={e => e.target.style.background = 'var(--ink)'}
              onClick={() => alert('Checkout flow — integrate your payment processor here!')}
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => dispatch({ type: 'CLEAR' })}
              style={{ width: '100%', marginTop: '0.75rem', padding: '0.6rem', fontSize: '0.75rem', color: 'var(--ink3)', letterSpacing: '0.08em' }}
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

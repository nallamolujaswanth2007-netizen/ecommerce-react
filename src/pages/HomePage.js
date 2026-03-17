import React from 'react';

export default function HomePage({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 2.5rem',
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream)',
      }}>
        {/* Background text */}
        <div style={{
          position: 'absolute', right: '-2rem', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 600,
          color: 'var(--cream3)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          LUXE
        </div>

        <div style={{ maxWidth: '660px', position: 'relative', zIndex: 1, animation: 'fadeUp 0.8s ease both' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '1.5rem' }}>
            New Collection 2025
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '2rem',
          }}>
            Objects of<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>enduring</em><br />
            quality.
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ink2)', maxWidth: '420px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Each piece is thoughtfully selected for its craftsmanship, materials, and the story it carries.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('shop')}
              style={{
                padding: '0.9rem 2.5rem',
                background: 'var(--ink)', color: 'var(--cream)',
                fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                borderRadius: '3px', fontWeight: 500,
                transition: 'transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              Shop Now
            </button>
            <button
              onClick={() => onNavigate('collections')}
              style={{
                padding: '0.9rem 2.5rem',
                background: 'transparent', color: 'var(--ink)',
                fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                borderRadius: '3px', fontWeight: 500,
                border: '1px solid var(--cream3)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.target.style.borderColor = 'var(--ink)'}
              onMouseLeave={e => e.target.style.borderColor = 'var(--cream3)'}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', display: 'flex', alignItems: 'center', gap: '10px', animation: 'fadeUp 1s ease 0.5s both' }}>
          <div style={{ width: '1px', height: '40px', background: 'var(--cream3)' }} />
          <span style={{ fontSize: '0.68rem', color: 'var(--ink3)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '6rem 2.5rem', background: 'var(--cream2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.5rem' }}>Explore</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '3rem' }}>Shop by Category</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { label: 'Clothing', emoji: '🧥', bg: '#ece8f0', desc: 'Premium fabrics, enduring cuts' },
              { label: 'Accessories', emoji: '⌚', bg: '#f0ece8', desc: 'Considered details, refined craft' },
              { label: 'Home', emoji: '💡', bg: '#e8f0ec', desc: 'Objects that transform spaces' },
            ].map((cat, i) => (
              <div
                key={cat.label}
                onClick={() => onNavigate('shop')}
                style={{
                  background: cat.bg,
                  borderRadius: '10px',
                  padding: '2.5rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s var(--ease)',
                  animation: `fadeUp 0.6s ease ${i * 0.1}s both`,
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{cat.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '6px' }}>{cat.label}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--ink3)' }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section style={{ padding: '8rem 2.5rem', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '1.5rem' }}>Our Philosophy</p>
        <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, lineHeight: 1.4, fontStyle: 'italic', color: 'var(--ink)', marginBottom: '2rem' }}>
          "Buy less, choose well, make it last."
        </blockquote>
        <p style={{ fontSize: '0.85rem', color: 'var(--ink3)', lineHeight: 1.8 }}>
          We curate products that are made to be repaired, not replaced — objects that develop character over time and belong in a world with less waste.
        </p>
      </section>
    </div>
  );
}

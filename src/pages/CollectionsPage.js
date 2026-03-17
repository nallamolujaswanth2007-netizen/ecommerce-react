import React from 'react';

const collections = [
  { title: 'The Minimal Living Edit', season: 'Spring 2025', items: 12, emoji: '🏠', bg: '#e8f0ec', description: 'Pare back to what matters. Objects that earn their place.' },
  { title: 'The Traveller\'s Kit', season: 'All Season', items: 8, emoji: '✈️', bg: '#f0ece8', description: 'Considered companions for life in motion.' },
  { title: 'Slow Fashion', season: 'Winter 2025', items: 16, emoji: '🧵', bg: '#ece8f0', description: 'Garments designed to outlast every trend.' },
  { title: 'The Working Wardrobe', season: 'Year-Round', items: 10, emoji: '👔', bg: '#f0e8e8', description: 'Refined pieces that take you from desk to dinner.' },
  { title: 'Artisan Craft', season: 'Limited', items: 6, emoji: '🏺', bg: '#f0f0e8', description: 'One-of-a-kind objects from independent makers.' },
  { title: 'The Weekend Edit', season: 'Summer 2025', items: 14, emoji: '🌿', bg: '#e8ece8', description: 'Relaxed, unhurried. Made for time well spent.' },
];

export default function CollectionsPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div style={{ padding: '4rem 2.5rem 3rem', background: 'var(--cream2)', borderBottom: '1px solid var(--cream3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.5rem' }}>Curated</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 400 }}>Collections</h1>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {collections.map((col, i) => (
            <div
              key={col.title}
              onClick={() => onNavigate('shop')}
              style={{
                background: col.bg,
                borderRadius: '10px',
                padding: '2.5rem',
                cursor: 'pointer',
                transition: 'transform 0.3s var(--ease)',
                animation: `fadeUp 0.5s ease ${i * 0.08}s both`,
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '2.8rem', marginBottom: '1.25rem' }}>{col.emoji}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, lineHeight: 1.3, flex: 1, paddingRight: '1rem' }}>
                  {col.title}
                </h2>
                <span style={{ fontSize: '0.7rem', background: 'rgba(0,0,0,0.06)', padding: '3px 8px', borderRadius: '3px', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                  {col.season}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink2)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{col.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink3)' }}>{col.items} pieces</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink)', letterSpacing: '0.1em', fontWeight: 500 }}>Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

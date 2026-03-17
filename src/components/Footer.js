import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '5rem 2.5rem 3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem' }}>LUXE</h2>
            <p style={{ fontSize: '0.85rem', color: 'rgba(250,248,244,0.55)', lineHeight: 1.8, maxWidth: '260px' }}>
              Curated premium goods for those who value craft, quality, and enduring design over fleeting trends.
            </p>
          </div>
          {[
            { title: 'Shop', links: ['All Products', 'Clothing', 'Accessories', 'Home & Living', 'New Arrivals'] },
            { title: 'Help', links: ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'] },
            { title: 'Company', links: ['Our Story', 'Sustainability', 'Artisans', 'Press', 'Careers'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'rgba(250,248,244,0.5)' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(250,248,244,0.75)', cursor: 'pointer', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#faf8f4'}
                      onMouseLeave={e => e.target.style.color = 'rgba(250,248,244,0.75)'}
                    >{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(250,248,244,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(250,248,244,0.4)' }}>© 2025 LUXE. All rights reserved.</p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(250,248,244,0.4)' }}>Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}

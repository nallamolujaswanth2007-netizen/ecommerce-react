import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ padding: '6rem 2.5rem', background: 'var(--ink)', color: 'var(--cream)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,248,244,0.5)', marginBottom: '1rem', animation: 'fadeUp 0.6s ease' }}>Est. 2020</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '700px', margin: '0 auto 1.5rem', animation: 'fadeUp 0.7s ease' }}>
          We believe in the quiet power of <em>good objects</em>.
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(250,248,244,0.65)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8, animation: 'fadeUp 0.8s ease' }}>
          LUXE was founded on the conviction that thoughtful design and honest materials are never in excess.
        </p>
      </div>

      {/* Values */}
      <div style={{ padding: '6rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          {[
            { title: 'Craft First', desc: 'Every piece is chosen for how it was made — by hand when possible, by specialists always. We visit makers to understand their process.', n: '01' },
            { title: 'Honest Materials', desc: 'No synthetics masquerading as natural. No shortcuts hidden beneath beautiful surfaces. What you see is what it is.', n: '02' },
            { title: 'Made to Last', desc: 'We refuse to sell anything we wouldn\'t be proud to own a decade from now. Longevity is the highest form of sustainability.', n: '03' },
          ].map((v, i) => (
            <div key={v.title} style={{ animation: `fadeUp 0.6s ease ${i * 0.12}s both` }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--cream3)', marginBottom: '1rem', lineHeight: 1 }}>{v.n}</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '0.75rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--ink2)', lineHeight: 1.8 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--cream2)', padding: '4rem 2.5rem', borderTop: '1px solid var(--cream3)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { n: '200+', label: 'Products curated' },
            { n: '85+', label: 'Maker partners' },
            { n: '40k+', label: 'Happy customers' },
            { n: '4.8★', label: 'Average rating' },
          ].map(stat => (
            <div key={stat.label}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400, color: 'var(--ink)' }}>{stat.n}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--ink3)', letterSpacing: '0.08em', marginTop: '4px' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

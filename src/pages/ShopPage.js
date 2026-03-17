import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage({ onViewProduct }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'All') list = list.filter(p => p.category === activeCategory);
    if (search.trim()) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, sortBy, search]);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '4rem 2.5rem 3rem', background: 'var(--cream2)', borderBottom: '1px solid var(--cream3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.5rem' }}>Discover</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 400, marginBottom: '2rem' }}>All Products</h1>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '400px', marginBottom: '1.5rem' }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              style={{
                width: '100%', padding: '0.7rem 1rem 0.7rem 2.5rem',
                border: '1px solid var(--cream3)', borderRadius: '6px',
                background: 'var(--white)', fontSize: '0.88rem',
                outline: 'none', color: 'var(--ink)',
              }}
            />
            <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ink3)', fontSize: '1rem' }}>⌕</span>
          </div>

          {/* Filters row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '999px',
                    fontSize: '0.78rem', letterSpacing: '0.06em',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--ink)' : 'var(--cream3)',
                    background: activeCategory === cat ? 'var(--ink)' : 'transparent',
                    color: activeCategory === cat ? 'var(--cream)' : 'var(--ink2)',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                padding: '0.45rem 0.9rem',
                border: '1px solid var(--cream3)', borderRadius: '6px',
                background: 'var(--white)', fontSize: '0.82rem', color: 'var(--ink2)',
                outline: 'none', cursor: 'pointer',
              }}
            >
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2.5rem' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--ink3)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300 }}>No products found</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Try a different search term or category</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '0.78rem', color: 'var(--ink3)', marginBottom: '2rem' }}>{filtered.length} products</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2.5rem' }}>
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} onView={onViewProduct} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

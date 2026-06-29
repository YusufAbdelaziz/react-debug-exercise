import { useState, useEffect } from 'react';
import { getProducts, addToCart as apiAddToCart } from '../api/mockApi';

// ──────────────────────────────────────────────────────────────────────────
// Candidate: treat this like a teammate's PR. It "works" in the happy path
// but has several issues. See the README for your task. Do NOT assume the
// bugs are only the obvious ones.
// ──────────────────────────────────────────────────────────────────────────

export default function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getProducts(category).then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const addToCart = async (product) => {
    product.added = true;
    await apiAddToCart(product);
    setProducts(products);
  };

  return (
    <section className="panel">
      <h2>Products — {category}</h2>
      <input
        className="control"
        placeholder="Filter products…"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid">
        {filtered.map((p, i) => (
          <div className="card" key={i} onClick={() => addToCart(p)}>
            <img src={p.image} />
            <div className="name">{p.name}</div>
            <div className="price">${p.price}</div>
            {p.added && <span className="badge">Added ✓</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

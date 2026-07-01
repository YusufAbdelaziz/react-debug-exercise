import { useState, useEffect } from 'react';

// ── CONCEPT: useEffect dependencies ──────────────────────────────────────
// BUG: the name should update whenever you pick a different user, but the
//      effect has an empty dependency array so it only runs once.
// GOAL: make the name follow the selected user id.
// 👉 TODO: fix the dependency array.

const NAMES: Record<number, string> = { 1: 'Ada', 2: 'Grace', 3: 'Linus' };

export default function Challenge() {
  const [id, setId] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(NAMES[id]);
  }, []);

  return (
    <div>
      <div className="row">
        {[1, 2, 3].map((n) => (
          <button key={n} onClick={() => setId(n)}>User {n}</button>
        ))}
      </div>
      <p>Selected id: <strong>{id}</strong> — Name: <strong>{name || '—'}</strong></p>
    </div>
  );
}

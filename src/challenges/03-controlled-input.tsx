import { useState } from 'react';

// ── CONCEPT: Controlled inputs (two-way binding) ─────────────────────────
// BUG: the input's value is bound to state, but nothing updates that state,
//      so typing does nothing — the box is frozen.
// GOAL: make typing work and update the greeting live.
// 👉 TODO: wire up the input so it updates `name`.

export default function Challenge() {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} placeholder="type your name" />
      <p>Hello, <strong>{name || 'stranger'}</strong>!</p>
    </div>
  );
}

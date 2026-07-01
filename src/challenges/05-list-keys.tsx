import { useState } from 'react';

// ── CONCEPT: List identity via `key` ─────────────────────────────────────
// BUG: type a note next to a fruit, then click "Shuffle". Your note stays with
//      the ROW POSITION, not the fruit, because the key is the array index.
// GOAL: make each row's input stay attached to its fruit when the list reorders.
// 👉 TODO: give each row a stable key.

const initial = [
  { id: 'a', label: 'Apple' },
  { id: 'b', label: 'Banana' },
  { id: 'c', label: 'Cherry' },
];

export default function Challenge() {
  const [rows, setRows] = useState(initial);
  const shuffle = () => setRows((r) => [...r.slice(1), r[0]]);

  return (
    <div>
      {rows.map((row, index) => (
        <div className="row" key={index}>
          <span style={{ width: 64 }}>{row.label}</span>
          <input defaultValue="" placeholder="note…" />
        </div>
      ))}
      <button onClick={shuffle}>Shuffle (move first to end)</button>
    </div>
  );
}

import { useState } from 'react';

// ── CONCEPT: Conditional rendering & falsy values in JSX ─────────────────
// BUG: when the cart is empty a stray "0" appears, because `items.length &&`
//      evaluates to the number 0, and React renders 0.
// GOAL: show the list when there are items, and nothing (no "0") when empty.
// 👉 TODO: fix the condition.

export default function Challenge() {
  const [items, setItems] = useState<string[]>([]);

  return (
    <div>
      <div className="row">
        <button onClick={() => setItems((i) => [...i, `Item ${i.length + 1}`])}>Add</button>
        <button onClick={() => setItems([])}>Clear</button>
      </div>
      <div>
        Cart: {items.length && (
          <ul>
            {items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

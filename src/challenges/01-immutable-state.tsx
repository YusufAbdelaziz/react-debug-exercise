import { useState } from 'react';

// ── CONCEPT: Immutable state updates ─────────────────────────────────────
// BUG: clicking "Add item" mutates the array and passes the SAME reference
//      back to setItems, so React sees no change and never re-renders.
// GOAL: make the list actually grow on screen.
// 👉 TODO: fix `addItem` so it produces a NEW array.

export default function Challenge() {
  const [items, setItems] = useState<string[]>(['Apple', 'Banana']);

  const addItem = () => {
    items.push(`Item ${items.length + 1}`);
    setItems(items);
  };

  return (
    <div>
      <p>Items ({items.length}): {items.join(', ')}</p>
      <button onClick={addItem}>Add item</button>
    </div>
  );
}

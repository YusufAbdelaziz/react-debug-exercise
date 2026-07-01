import { useState } from 'react';

// TASK — Build an Autocomplete from scratch.
// A fake API `searchFruit(query)` is provided below (variable latency). Build a
// working autocomplete that meets the requirements shown on the card.
// This starter only renders a plain input. Edit only this file.

const FRUITS = [
  'apple', 'apricot', 'avocado', 'banana', 'blueberry', 'cherry', 'date', 'fig',
  'grape', 'kiwi', 'lemon', 'lime', 'mango', 'melon', 'orange', 'peach', 'pear', 'plum',
];

export function searchFruit(query: string): Promise<string[]> {
  const delay = 120 + Math.floor(Math.random() * 600);
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(query ? FRUITS.filter((f) => f.includes(query.toLowerCase())) : []),
      delay
    )
  );
}

export default function Build1() {
  const [query, setQuery] = useState('');

  // TODO: debounce the query, fetch results (cancel stale requests), render a
  //       results dropdown, support keyboard nav (↑/↓/Enter/Esc), and ARIA.

  return (
    <div>
      <input value={query} placeholder="search fruit…" onChange={(e) => setQuery(e.target.value)} />
      <p className="muted small">Starter — nothing is wired yet. Build it.</p>
    </div>
  );
}

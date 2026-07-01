import { useState } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Filterable list (multi-component)
// Expected: typing in the toolbar filters the results below.
// Actual:   typing updates the box, but the results never change.
// The parent and a child disagree about where the query "lives". Edit only this file.

const DATA = ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'grape'];

function Toolbar({ query, onChange }: { query: string; onChange: (v: string) => void }) {
  return (
    <div>
      <RenderBadge name="Toolbar" />
      <div><input value={query} placeholder="filter fruit…" onChange={(e) => onChange(e.target.value)} /></div>
    </div>
  );
}

function Results({ query }: { query: string }) {
  const [localQuery] = useState(query);
  const results = DATA.filter((d) => d.includes(localQuery));
  return (
    <div>
      <RenderBadge name="Results" />
      <ul>
        {results.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </div>
  );
}

export default function Composed3() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <RenderBadge name="Page" />
      <Toolbar query={query} onChange={setQuery} />
      <Results query={query} />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { search } from '../api/mockApi';

// ──────────────────────────────────────────────────────────────────────────
// Candidate: this is a PR adding an Autocomplete to our shared component
// library. Review it with a reusable-library bar in mind. See the README.
// ──────────────────────────────────────────────────────────────────────────

export function Autocomplete({ onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    search(query).then((data) => setResults(data));
  }, [query]);

  const select = (opt) => {
    opt.selected = true;
    onSelect(opt);
    setOpen(false);
  };

  return (
    <section className="panel">
      <h2>Autocomplete (shared library)</h2>
      <input
        className="control"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        style={{ border: '1px solid #ccc', padding: 8 }}
        placeholder="Try typing fast: r → re → rea → react"
      />
      {open && (
        <div className="menu">
          {results.length === 0 && <div className="option muted">No results</div>}
          {results.map((opt, i) => (
            <div className="option" key={i} onClick={() => select(opt)}>
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

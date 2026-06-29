import { useState } from 'react';
import ProductList from './components/ProductList';
import { Autocomplete } from './components/Autocomplete';

const CATEGORIES = ['coffee', 'bakery'];

export default function App() {
  const [category, setCategory] = useState('coffee');
  const [lastSelected, setLastSelected] = useState<string | null>(null);

  return (
    <main className="app">
      <header className="app-header">
        <h1>Frontend Interview — Live Exercise</h1>
        <p className="hint">
          Two components from a teammate's PR. They run, but have issues. Try
          switching the category, filtering, clicking a product to add it, and
          typing quickly in the autocomplete — then review &amp; fix.
        </p>
      </header>

      <div className="cats">
        <span className="cats-label">Category:</span>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={c === category ? 'cat active' : 'cat'}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns">
        <ProductList category={category} />
        <Autocomplete onSelect={(o) => setLastSelected(o.label)} />
      </div>

      {lastSelected && (
        <p className="selected">Last selected: <strong>{lastSelected}</strong></p>
      )}
    </main>
  );
}

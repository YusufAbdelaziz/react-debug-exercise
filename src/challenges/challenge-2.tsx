import { useState, useEffect } from 'react';

// TICKET — User search
// Expected: the results always match the text currently in the box.
// Actual:   when you type quickly, stale results sometimes appear (results for
//           an earlier keystroke replace the newer ones).
// Fix this component so it behaves as expected. Edit only this file.

const ALL = ['Ada', 'Alan', 'Grace', 'Linus', 'Margaret', 'Katherine', 'Barbara', 'Dennis'];

// Fake network call with variable latency (do not change this).
function fakeSearch(q: string): Promise<string[]> {
  const delay = 100 + Math.floor(Math.random() * 700);
  return new Promise((resolve) =>
    setTimeout(() => resolve(ALL.filter((n) => n.toLowerCase().includes(q.toLowerCase()))), delay)
  );
}

export default function Challenge2() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>(ALL);

  useEffect(() => {
    fakeSearch(query).then((r) => setResults(r));
  }, [query]);

  return (
    <div>
      <input value={query} placeholder="search names…" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {results.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </div>
  );
}

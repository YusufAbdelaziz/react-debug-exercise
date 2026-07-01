import { useState } from 'react';

// TICKET — Directory
// Expected: after filtering, clicking "Select" highlights the person on that row.
// Actual:   with a filter typed in, "Select" highlights the WRONG person.
//           (With no filter it happens to work.)
// Fix this component so it behaves as expected. Edit only this file.

const PEOPLE = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Alan Turing' },
  { id: 3, name: 'Grace Hopper' },
  { id: 4, name: 'Linus Torvalds' },
  { id: 5, name: 'Margaret Hamilton' },
];

export default function Challenge4() {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visible = PEOPLE.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  const selectedName = selectedIndex != null ? PEOPLE[selectedIndex].name : '—';

  return (
    <div>
      <input value={query} placeholder="filter…" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {visible.map((p, i) => (
          <li key={i}>
            {p.name} <button onClick={() => setSelectedIndex(i)}>Select</button>
          </li>
        ))}
      </ul>
      <p>Selected: <strong>{selectedName}</strong></p>
    </div>
  );
}

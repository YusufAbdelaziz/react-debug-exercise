import { useState, useEffect } from 'react';

// TASK — Refactor this "god component". It WORKS as-is; do not change its
// behaviour. Improve the structure per the requirements on the card.
// Edit only this file.

type Member = { id: number; name: string; team: string };

function fakeFetch(): Promise<Member[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 1, name: 'Ada', team: 'Core' },
          { id: 2, name: 'Alan', team: 'Core' },
          { id: 3, name: 'Grace', team: 'Platform' },
          { id: 4, name: 'Linus', team: 'Platform' },
          { id: 5, name: 'Margaret', team: 'Data' },
        ]),
      200
    )
  );
}

export default function Build3() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fakeFetch().then((m) => {
      setMembers(m);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <input value={query} placeholder="search…" onChange={(e) => setQuery(e.target.value)} />
      <p className="muted small">
        Showing {members.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())).length} of{' '}
        {members.length}
      </p>
      <ul>
        {members
          .filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
          .map((m) => (
            <li key={m.id}>
              <button onClick={() => setSelectedId(m.id)}>
                {m.name} — {m.team}
              </button>
            </li>
          ))}
      </ul>
      {selectedId != null && (
        <div style={{ border: '1px solid #ccc', padding: 8, marginTop: 8 }}>
          Selected: {members.find((m) => m.id === selectedId)?.name} (
          {members.find((m) => m.id === selectedId)?.team})
        </div>
      )}
    </div>
  );
}

import { memo, useState } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Picker (multi-component)
// Expected: typing in the (unrelated) note field should NOT re-render the List —
//           its data never changes. Watch the List's "renders" badge.
// Actual:   every keystroke re-renders List, even though it's wrapped in React.memo.
// Edit only this file.

const ITEMS = ['Ada', 'Alan', 'Grace', 'Linus', 'Margaret'];

type ListProps = { items: string[]; onSelect: (name: string) => void };

const List = memo(function List({ items, onSelect }: ListProps) {
  return (
    <div>
      <RenderBadge name="List (memo)" />
      <div className="row">
        {items.map((i) => (
          <button key={i} onClick={() => onSelect(i)}>{i}</button>
        ))}
      </div>
    </div>
  );
});

export default function Composed2() {
  const [note, setNote] = useState('');
  const [picked, setPicked] = useState('—');

  return (
    <div>
      <RenderBadge name="Parent" />
      <div><input value={note} placeholder="unrelated note…" onChange={(e) => setNote(e.target.value)} /></div>
      <List items={ITEMS} onSelect={(name) => setPicked(name)} />
      <p>Picked: <strong>{picked}</strong></p>
    </div>
  );
}

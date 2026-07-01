import { useState } from 'react';

// TASK — Make this type-safe. `getColumn` and <DataList> are typed with `any`,
// so incorrect usage compiles silently. Add proper generics/types so invalid
// keys/props become COMPILE errors.
// Verify in the editor's TypeScript problems panel: the `@ts-expect-error` line
// below marks usage that SHOULD error — once your types are correct, that error
// is "expected" and the panel goes green. Edit only this file.

type Row = { id: number; name: string; age: number };

const ROWS: Row[] = [
  { id: 1, name: 'Ada', age: 36 },
  { id: 2, name: 'Grace', age: 52 },
  { id: 3, name: 'Linus', age: 33 },
];

// TODO: make this generic so `key` must be a real key of the row type, and the
// return type is the value type (not any[]).
export function getColumn(rows: any[], key: any): any[] {
  return rows.map((r) => r[key]);
}

// TODO: type these props (generic over the item type).
function DataList(props: any) {
  return (
    <ul>
      {props.items.map((it: any, i: number) => (
        <li key={i}>{props.render(it)}</li>
      ))}
    </ul>
  );
}

export default function Build4() {
  const [key] = useState<'name' | 'age'>('name');
  const names = getColumn(ROWS, key); // should be typed, not any[]

  // @ts-expect-error — 'nope' is not a key of Row, so this must be a type error
  const _bad = getColumn(ROWS, 'nope');

  return (
    <div>
      <p>Column “{key}”: {names.join(', ')}</p>
      <DataList items={ROWS} render={(r: Row) => `${r.name} (${r.age})`} />
    </div>
  );
}

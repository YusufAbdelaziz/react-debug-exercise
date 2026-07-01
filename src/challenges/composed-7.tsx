import { useState } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Two independent widgets (multi-component)
// Expected: the Likes counter and the Follows counter are completely independent.
// Actual:   clicking one also changes the other, and a click doesn't always
//           update the widget you clicked until the other one re-renders.
// Both widgets share one small helper. Edit only this file.

let sharedCount = 0;

function useCounter() {
  const [, forceRender] = useState(0);
  const value = sharedCount;
  const increment = () => {
    sharedCount += 1;
    forceRender((x) => x + 1);
  };
  return [value, increment] as const;
}

function Likes() {
  const [count, inc] = useCounter();
  return (
    <div>
      <RenderBadge name="Likes" />
      <button onClick={inc}>👍 Likes: {count}</button>
    </div>
  );
}

function Follows() {
  const [count, inc] = useCounter();
  return (
    <div>
      <RenderBadge name="Follows" />
      <button onClick={inc}>➕ Follows: {count}</button>
    </div>
  );
}

export default function Composed7() {
  return (
    <div>
      <Likes />
      <Follows />
    </div>
  );
}

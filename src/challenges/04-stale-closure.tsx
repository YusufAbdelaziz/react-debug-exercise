import { useState, useEffect } from 'react';

// ── CONCEPT: Stale closures / functional updates ─────────────────────────
// BUG: the counter should tick up every second, but it's stuck at 1. The
//      interval was created once and captured the initial `count` (0), so it
//      always sets 0 + 1.
// GOAL: make it count up forever.
// 👉 TODO: use the functional updater so it doesn't read a stale value.

export default function Challenge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Seconds elapsed: <strong>{count}</strong></p>;
}

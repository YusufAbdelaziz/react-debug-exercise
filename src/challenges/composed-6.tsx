import { useState, useEffect } from 'react';
import { RenderBadge } from './_shared';

// TICKET — User + posts (multi-component)
// Expected: the posts should only be re-fetched when you switch users.
//           (Watch the "fetches" counter — it should stay put between switches.)
// Actual:   the posts re-fetch constantly (every ~1.5s) even when the user
//           hasn't changed.
// The child fetches based on something the parent hands it. Edit only this file.

const NAMES: Record<number, string> = { 1: 'Ada', 2: 'Grace', 3: 'Linus' };

function fakeFetchPosts(userId: number): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve([`Post by ${NAMES[userId]} #1`, `Post by ${NAMES[userId]} #2`]), 300)
  );
}

function Posts({ user }: { user: { id: number; name: string } }) {
  const [posts, setPosts] = useState<string[]>([]);
  const [fetches, setFetches] = useState(0);

  useEffect(() => {
    let active = true;
    fakeFetchPosts(user.id).then((p) => {
      if (active) {
        setPosts(p);
        setFetches((f) => f + 1);
      }
    });
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <div>
      <RenderBadge name="Posts" />
      <p>Posts for {user.name} — <strong>fetches: {fetches}</strong></p>
      <ul>{posts.map((p) => <li key={p}>{p}</li>)}</ul>
    </div>
  );
}

export default function Composed6() {
  const [userId, setUserId] = useState(1);
  const [, force] = useState(0);

  // Simulates unrelated state elsewhere on the page updating periodically.
  useEffect(() => {
    const t = setInterval(() => force((x) => x + 1), 1500);
    return () => clearInterval(t);
  }, []);

  const user = { id: userId, name: NAMES[userId] };

  return (
    <div>
      <RenderBadge name="UserPage" />
      <button onClick={() => setUserId((id) => (id % 3) + 1)}>Next user</button>
      <p>Current user: <strong>{user.name}</strong></p>
      <Posts user={user} />
    </div>
  );
}

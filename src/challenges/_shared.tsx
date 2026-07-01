import { useRef } from 'react';

// A tiny badge that shows how many times the component rendering it has
// rendered. Drop <RenderBadge name="X" /> at the top of a component to make its
// re-renders visible. (No React.StrictMode in this app, so the count is exact.)
export function RenderBadge({ name }: { name: string }) {
  const n = useRef(0);
  n.current += 1;
  return <span className="rb">{name} · renders: {n.current}</span>;
}

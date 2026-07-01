import { useState, useCallback } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Dashboard (multi-component, handler drilled 3 levels down)
// Expected: clicking "Bump" increases the count by 1 every click.
// Actual:   no matter how many times you click, the count only ever shows 1.
// The button is deep in the tree; the handler comes from the top. Edit only this file.

function Button({ onBump }: { onBump: () => void }) {
  return (
    <div>
      <RenderBadge name="Button" />
      <button onClick={onBump}>Bump</button>
    </div>
  );
}

function Toolbar({ onBump }: { onBump: () => void }) {
  return (
    <div>
      <RenderBadge name="Toolbar" />
      <Button onBump={onBump} />
    </div>
  );
}

function Panel({ onBump }: { onBump: () => void }) {
  return (
    <div>
      <RenderBadge name="Panel" />
      <Toolbar onBump={onBump} />
    </div>
  );
}

export default function Composed5() {
  const [count, setCount] = useState(0);

  const bump = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <RenderBadge name="Dashboard" />
      <p>Count: <strong>{count}</strong></p>
      <Panel onBump={bump} />
    </div>
  );
}

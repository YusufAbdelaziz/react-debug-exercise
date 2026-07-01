import { useState, useEffect } from 'react';

// TICKET — Live metric
// Expected: every second the value increases by the CURRENT multiplier.
// Actual:   after you change the multiplier, the value keeps increasing by the
//           original multiplier (×1), ignoring your choice.
// Fix this component so it behaves as expected. Edit only this file.
// (Note: the value already counts up — the problem is which multiplier it uses.)

export default function Challenge3() {
  const [value, setValue] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + multiplier);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>Value: <strong>{value}</strong></p>
      <div className="row">
        <span>Multiplier:</span>
        {[1, 2, 5].map((m) => (
          <button key={m} onClick={() => setMultiplier(m)}>×{m}</button>
        ))}
        <span className="muted">(selected ×{multiplier})</span>
      </div>
    </div>
  );
}

import { useState, useRef } from 'react';

// TICKET — Auto-save
// Expected: 600ms after you stop typing, "Auto-saved" shows exactly what's in
//           the box.
// Actual:   "Auto-saved" is stale — it shows the text as of roughly one
//           keystroke ago (type "hello", it saves "hell").
// Fix this component so it behaves as expected. Edit only this file.

export default function Challenge6() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState('—');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onChange = (value: string) => {
    setText(value);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSaved(text);
    }, 600);
  };

  return (
    <div>
      <input value={text} placeholder="type, then pause…" onChange={(e) => onChange(e.target.value)} />
      <p>Auto-saved: <strong>{saved}</strong></p>
    </div>
  );
}

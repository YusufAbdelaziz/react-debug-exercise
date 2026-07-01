import { useState } from 'react';

// TICKET — Todo list
// Expected: "Items left" always equals the number of unchecked todos.
// Actual:   toggling a todo checks/unchecks it, but "Items left" never changes.
// Fix this component so it behaves as expected. Edit only this file.

type Todo = { id: number; text: string; done: boolean };

const INITIAL: Todo[] = [
  { id: 1, text: 'Write tests', done: false },
  { id: 2, text: 'Fix the bug', done: false },
  { id: 3, text: 'Ship it', done: true },
];

export default function Challenge5() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL);
  const [remaining, setRemaining] = useState(INITIAL.filter((t) => !t.done).length);

  const toggle = (id: number) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <div>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} /> {t.text}
            </label>
          </li>
        ))}
      </ul>
      <p>Items left: <strong>{remaining}</strong></p>
    </div>
  );
}

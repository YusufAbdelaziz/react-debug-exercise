import { createContext, useContext, useReducer } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Todo app with reducer (multi-component)
// Expected: adding a todo and toggling one update the list and the "left" count.
// Actual:   clicking Add or a checkbox does nothing on screen.
// The UI is wired correctly — look at how state is produced. Edit only this file.

type Todo = { id: number; text: string; done: boolean };
type State = { todos: Todo[] };
type Action = { type: 'add'; text: string } | { type: 'toggle'; id: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      state.todos.push({ id: Date.now(), text: action.text, done: false });
      return state;
    case 'toggle': {
      const todo = state.todos.find((t) => t.id === action.id);
      if (todo) todo.done = !todo.done;
      return state;
    }
    default:
      return state;
  }
}

const TodoCtx = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(null as any);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    todos: [{ id: 1, text: 'Try me', done: false }],
  });
  return <TodoCtx.Provider value={{ state, dispatch }}>{children}</TodoCtx.Provider>;
}

function AddTodo() {
  const { dispatch } = useContext(TodoCtx);
  return (
    <div>
      <RenderBadge name="AddTodo" />
      <button onClick={() => dispatch({ type: 'add', text: 'New task' })}>Add task</button>
    </div>
  );
}

function TodoList() {
  const { state, dispatch } = useContext(TodoCtx);
  return (
    <div>
      <RenderBadge name="TodoList" />
      <ul>
        {state.todos.map((t) => (
          <li key={t.id}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => dispatch({ type: 'toggle', id: t.id })} /> {t.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const { state } = useContext(TodoCtx);
  const left = state.todos.filter((t) => !t.done).length;
  return <p><RenderBadge name="Footer" /> Items left: <strong>{left}</strong></p>;
}

export default function Composed4() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
      <Footer />
    </TodoProvider>
  );
}

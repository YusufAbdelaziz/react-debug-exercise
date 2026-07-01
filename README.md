# Frontend Challenges — Live Exercise

A small React + TypeScript app (Vite). The page shows several **independent
challenge cards**, each testing one React concept with a single planted bug.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL (usually http://localhost:5173). On StackBlitz /
CodeSandbox it runs automatically.

## How it works

Each card tells you:
- the **concept** it's testing,
- a short **task**, and
- the **file to edit** (e.g. `src/challenges/03-controlled-input.tsx`).

Open that file, make your fix, and **save** — the demo on the card updates
**instantly** (Vite hot-reload). No toggles, no restarts: you change the code,
you watch the behaviour change.

## The challenges

| # | Concept | File |
|---|---------|------|
| 1 | Immutable state | `src/challenges/01-immutable-state.tsx` |
| 2 | `useEffect` dependencies | `src/challenges/02-effect-deps.tsx` |
| 3 | Controlled inputs | `src/challenges/03-controlled-input.tsx` |
| 4 | Stale closures | `src/challenges/04-stale-closure.tsx` |
| 5 | List keys | `src/challenges/05-list-keys.tsx` |
| 6 | Conditional rendering | `src/challenges/06-conditional-render.tsx` |

Work through them in order (they get a little trickier). Talk through your
reasoning as you go — how you *find* and *explain* each bug matters as much as
the fix.

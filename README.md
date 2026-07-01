# Frontend Challenges — Live Exercise

A small React + TypeScript app (Vite). The page shows several **independent
challenge cards**, each a realistic component with a single planted bug. They
get **progressively harder**.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL (usually http://localhost:5173). On StackBlitz /
CodeSandbox it runs automatically.

## How it works

Each card is a **bug ticket**: it tells you the **Expected** behaviour and the
**Actual** (broken) behaviour, and which **file** to edit. Nothing tells you the
cause — diagnosing it is the exercise.

Open the file, make your fix, and **save** — the demo on the card updates
**instantly** (Vite hot-reload). You change the code, you watch the behaviour
change.

## The challenges

They escalate from `Medium` to `Expert`:

| # | File | Difficulty |
|---|------|-----------|
| 1 | `src/challenges/challenge-1.tsx` | Medium |
| 2 | `src/challenges/challenge-2.tsx` | Medium |
| 3 | `src/challenges/challenge-3.tsx` | Hard |
| 4 | `src/challenges/challenge-4.tsx` | Hard |
| 5 | `src/challenges/challenge-5.tsx` | Hard |
| 6 | `src/challenges/challenge-6.tsx` | Expert |

Talk through your reasoning as you go — how you *find* and *explain* each bug
matters as much as the fix. Reproducing the bug, forming a hypothesis, and
verifying the fix is exactly what we're looking for.

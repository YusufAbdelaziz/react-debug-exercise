import type { ComponentType } from 'react';

// Candidate registry (main branch): buggy components + a behaviour "ticket"
// only. It intentionally does NOT name the concept, cause, or fix — those live
// on the `solution` branch, which replaces this file and turns on the toggle.

import C1 from './challenge-1';
import C2 from './challenge-2';
import C3 from './challenge-3';
import C4 from './challenge-4';
import C5 from './challenge-5';
import C6 from './challenge-6';

export type Challenge = {
  n: number;
  title: string;
  difficulty: 'Medium' | 'Hard' | 'Expert';
  file: string;
  expected: string;
  actual: string;
  Buggy: ComponentType;
  // solution-only (undefined on main):
  Solution?: ComponentType;
  concept?: string;
  why?: string;
  before?: string;
  after?: string;
};

export const challenges: Challenge[] = [
  {
    n: 1,
    title: 'Shopping cart',
    difficulty: 'Medium',
    file: 'src/challenges/challenge-1.tsx',
    expected: 'The +/− buttons change an item’s quantity and the Total updates.',
    actual: 'Clicking them does nothing on screen.',
    Buggy: C1,
  },
  {
    n: 2,
    title: 'User search',
    difficulty: 'Medium',
    file: 'src/challenges/challenge-2.tsx',
    expected: 'Results always match the text currently in the box.',
    actual: 'Typing quickly sometimes shows stale results for an earlier keystroke.',
    Buggy: C2,
  },
  {
    n: 3,
    title: 'Live metric',
    difficulty: 'Hard',
    file: 'src/challenges/challenge-3.tsx',
    expected: 'Each second the value increases by the currently-selected multiplier.',
    actual: 'After changing the multiplier, it keeps using the original ×1.',
    Buggy: C3,
  },
  {
    n: 4,
    title: 'Directory',
    difficulty: 'Hard',
    file: 'src/challenges/challenge-4.tsx',
    expected: 'After filtering, “Select” highlights the person on that row.',
    actual: 'With a filter active, “Select” highlights the wrong person.',
    Buggy: C4,
  },
  {
    n: 5,
    title: 'Todo list',
    difficulty: 'Hard',
    file: 'src/challenges/challenge-5.tsx',
    expected: '“Items left” always equals the number of unchecked todos.',
    actual: 'Toggling a todo works, but “Items left” never changes.',
    Buggy: C5,
  },
  {
    n: 6,
    title: 'Auto-save',
    difficulty: 'Expert',
    file: 'src/challenges/challenge-6.tsx',
    expected: '600ms after you stop typing, “Auto-saved” shows exactly what’s in the box.',
    actual: 'It saves stale text — roughly one keystroke behind.',
    Buggy: C6,
  },
];

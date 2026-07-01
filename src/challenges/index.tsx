import type { ComponentType } from 'react';

// Candidate registry (main branch): buggy components only, no solutions.
// The `solution` branch replaces this file to add Solution + explanations,
// which turns on the per-card Candidate/Solution toggle.

import C01 from './01-immutable-state';
import C02 from './02-effect-deps';
import C03 from './03-controlled-input';
import C04 from './04-stale-closure';
import C05 from './05-list-keys';
import C06 from './06-conditional-render';

export type Challenge = {
  n: number;
  title: string;
  concept: string;
  file: string;
  task: string;
  Buggy: ComponentType;
  Solution?: ComponentType;
  why?: string;
  before?: string;
  after?: string;
};

export const challenges: Challenge[] = [
  {
    n: 1,
    title: 'Make the list grow',
    concept: 'Immutable state',
    file: 'src/challenges/01-immutable-state.tsx',
    task: 'Clicking “Add item” does nothing on screen. Fix the update so the list grows.',
    Buggy: C01,
  },
  {
    n: 2,
    title: 'Load the right user',
    concept: 'useEffect deps',
    file: 'src/challenges/02-effect-deps.tsx',
    task: 'Picking a different user doesn’t change the name. Make the name follow the selected id.',
    Buggy: C02,
  },
  {
    n: 3,
    title: 'Type your name',
    concept: 'Controlled input',
    file: 'src/challenges/03-controlled-input.tsx',
    task: 'The input is frozen — typing does nothing. Make it update the greeting live.',
    Buggy: C03,
  },
  {
    n: 4,
    title: 'Tick every second',
    concept: 'Stale closure',
    file: 'src/challenges/04-stale-closure.tsx',
    task: 'The counter is stuck at 1. Make it count up every second.',
    Buggy: C04,
  },
  {
    n: 5,
    title: 'Keep notes with their fruit',
    concept: 'List keys',
    file: 'src/challenges/05-list-keys.tsx',
    task: 'Type a note, then Shuffle — the note stays with the position. Make it follow the item.',
    Buggy: C05,
  },
  {
    n: 6,
    title: 'No stray “0”',
    concept: 'Conditional render',
    file: 'src/challenges/06-conditional-render.tsx',
    task: 'When the cart is empty a “0” shows up. Render the list when non-empty and nothing when empty.',
    Buggy: C06,
  },
];

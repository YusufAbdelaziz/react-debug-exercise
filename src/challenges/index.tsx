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
import CM1 from './composed-1';
import CM2 from './composed-2';
import CM3 from './composed-3';
import CM4 from './composed-4';
import CM5 from './composed-5';
import CM6 from './composed-6';
import CM7 from './composed-7';
import B1 from './build-1';
import B2 from './build-2';
import B3 from './build-3';
import B4 from './build-4';

export type Challenge = {
  n: number;
  group: string;
  title: string;
  difficulty: 'Medium' | 'Hard' | 'Expert';
  file: string;
  kind?: 'debug' | 'build';
  // debug challenges use expected/actual; build challenges use task/requirements:
  expected?: string;
  actual?: string;
  task?: string;
  requirements?: string[];
  Buggy: ComponentType;
  // solution-only (undefined on main):
  Solution?: ComponentType;
  concept?: string;
  why?: string;
  before?: string;
  after?: string;
  notes?: string;
  hints?: string[]; // interviewer-only; populated on the solution branch
};

const SINGLE = 'Single-component';
const COMPOSED = 'Composed — trace the bug across components';
const BUILD = 'Build & Refactor — implement / refactor / type';

export const challenges: Challenge[] = [
  {
    n: 1, group: SINGLE, title: 'Shopping cart', difficulty: 'Medium',
    file: 'src/challenges/challenge-1.tsx',
    expected: 'The +/− buttons change an item’s quantity and the Total updates.',
    actual: 'Clicking them does nothing on screen.',
    Buggy: C1,
  },
  {
    n: 2, group: SINGLE, title: 'User search', difficulty: 'Medium',
    file: 'src/challenges/challenge-2.tsx',
    expected: 'Results always match the text currently in the box.',
    actual: 'Typing quickly sometimes shows stale results for an earlier keystroke.',
    Buggy: C2,
  },
  {
    n: 3, group: SINGLE, title: 'Counter (class)', difficulty: 'Medium',
    file: 'src/challenges/challenge-3.tsx',
    expected: 'The “Add 3” button increases the count by 3.',
    actual: 'Each click only increases it by 1.',
    Buggy: C3,
  },
  {
    n: 4, group: SINGLE, title: 'Directory', difficulty: 'Hard',
    file: 'src/challenges/challenge-4.tsx',
    expected: 'After filtering, “Select” highlights the person on that row.',
    actual: 'With a filter active, “Select” highlights the wrong person.',
    Buggy: C4,
  },
  {
    n: 5, group: SINGLE, title: 'Todo list', difficulty: 'Hard',
    file: 'src/challenges/challenge-5.tsx',
    expected: '“Items left” always equals the number of unchecked todos.',
    actual: 'Toggling a todo works, but “Items left” never changes.',
    Buggy: C5,
  },
  {
    n: 6, group: SINGLE, title: 'Greeting (class)', difficulty: 'Medium',
    file: 'src/challenges/challenge-6.tsx',
    expected: 'Typing your name updates the greeting live.',
    actual: 'Typing throws an error and nothing updates (check the console).',
    Buggy: C6,
  },

  {
    n: 7, group: COMPOSED, title: 'Store page', difficulty: 'Hard',
    file: 'src/challenges/composed-1.tsx',
    expected: 'Typing in Search should not re-render the Catalog (watch its renders badge).',
    actual: 'Every keystroke re-renders the Catalog too.',
    Buggy: CM1,
  },
  {
    n: 8, group: COMPOSED, title: 'Picker', difficulty: 'Hard',
    file: 'src/challenges/composed-2.tsx',
    expected: 'Typing in the note field should not re-render the memoized List.',
    actual: 'The List re-renders on every keystroke despite React.memo.',
    Buggy: CM2,
  },
  {
    n: 9, group: COMPOSED, title: 'Filterable list', difficulty: 'Hard',
    file: 'src/challenges/composed-3.tsx',
    expected: 'Typing in the toolbar filters the results below.',
    actual: 'The box updates but the results never change.',
    Buggy: CM3,
  },
  {
    n: 10, group: COMPOSED, title: 'Todo app (reducer)', difficulty: 'Hard',
    file: 'src/challenges/composed-4.tsx',
    expected: 'Add and toggle update the list and the “left” count.',
    actual: 'Clicking Add or a checkbox does nothing on screen.',
    Buggy: CM4,
  },
  {
    n: 11, group: COMPOSED, title: 'Dashboard bump', difficulty: 'Expert',
    file: 'src/challenges/composed-5.tsx',
    expected: 'Clicking “Bump” increases the count by 1 each time.',
    actual: 'No matter how often you click, the count only ever shows 1.',
    Buggy: CM5,
  },
  {
    n: 12, group: COMPOSED, title: 'User + posts (class)', difficulty: 'Hard',
    file: 'src/challenges/composed-6.tsx',
    expected: 'Picking a different user loads that user’s posts.',
    actual: 'The header changes but the posts stay on the first user.',
    Buggy: CM6,
  },
  {
    n: 13, group: COMPOSED, title: 'Background ticker (class)', difficulty: 'Hard',
    file: 'src/challenges/composed-7.tsx',
    expected: 'Clicking “Stop” halts the ticking and the number stops rising.',
    actual: 'After “Stop” the number keeps going up.',
    Buggy: CM7,
  },

  {
    n: 14, group: BUILD, title: 'Autocomplete', difficulty: 'Expert', kind: 'build',
    file: 'src/challenges/build-1.tsx',
    task: 'Build a working autocomplete from scratch using the provided fake API.',
    requirements: [
      'Debounce the query (~300ms) — don’t fetch on every keystroke',
      'Cancel/ignore stale requests so out-of-order responses can’t win',
      'Show a results dropdown; clicking an option fills the input',
      'Keyboard: ↑/↓ to move, Enter to select, Esc to close',
      'Accessible: combobox/listbox/option roles + aria-expanded/activedescendant',
    ],
    Buggy: B1,
  },
  {
    n: 15, group: BUILD, title: 'Data table', difficulty: 'Hard', kind: 'build',
    file: 'src/challenges/build-2.tsx',
    task: 'Make the table sortable, filterable, and paginated.',
    requirements: [
      'Click a column header to sort by it; click again to reverse',
      'A text box filters by name (case-insensitive)',
      'Paginate 5 rows/page with Prev/Next, disabled at the ends, and “Page x/y”',
      'Filtering resets to the first page; derive rows (don’t mutate the source)',
    ],
    Buggy: B2,
  },
  {
    n: 16, group: BUILD, title: 'Refactor: team directory', difficulty: 'Expert', kind: 'build',
    file: 'src/challenges/build-3.tsx',
    task: 'Refactor this working “god component” without changing its behaviour.',
    requirements: [
      'Extract the fetch/loading into a custom hook',
      'Compute the filtered list once — remove the duplicated filter expressions',
      'Split the detail panel (and/or the list) into its own component',
      'Replace the inline styles with a class; behaviour must stay identical',
    ],
    Buggy: B3,
  },
  {
    n: 17, group: BUILD, title: 'Type-safe helpers', difficulty: 'Hard', kind: 'build',
    file: 'src/challenges/build-4.tsx',
    task: 'Replace the `any` types so invalid usage becomes a compile error (check the editor’s TS problems).',
    requirements: [
      'Make `getColumn` generic: the key must be a real key of the row type',
      'Its return type is the value type (e.g. string[]), not any[]',
      'Type `<DataList>` generically over its item type (items + render)',
      'The // @ts-expect-error line must become valid (no leftover TS errors)',
    ],
    Buggy: B4,
  },
];

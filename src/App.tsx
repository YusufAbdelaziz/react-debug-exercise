import { Fragment, useState, useEffect } from 'react';
import ChallengeCard from './ChallengeCard';
import { challenges } from './challenges';

type Theme = 'light' | 'dark';

export default function App() {
  const interviewer = challenges.some((c) => c.Solution);

  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.getAttribute('data-theme') as Theme) || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  return (
    <main className="app">
      <header className="app-header">
        <div className="header-row">
          <h1>Frontend Challenges</h1>
          <button
            className="theme-btn"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
        <p className="hint">
          Each card is a bug ticket (Expected vs Actual) testing one React concept, getting
          progressively harder. Open the named file, fix it, and <strong>save</strong> — the demo
          updates instantly (hot reload). In the <em>Composed</em> section the symptom and the cause
          often live in different components — trace it through the tree.
          {interviewer && ' · Interviewer view: use the Candidate/Solution toggle to reveal each fix.'}
        </p>
      </header>

      <div className="challenge-list">
        {challenges.map((c, i) => {
          const newGroup = i === 0 || challenges[i - 1].group !== c.group;
          return (
            <Fragment key={c.n}>
              {newGroup && <h2 className="group-head">{c.group}</h2>}
              <ChallengeCard c={c} />
            </Fragment>
          );
        })}
      </div>
    </main>
  );
}

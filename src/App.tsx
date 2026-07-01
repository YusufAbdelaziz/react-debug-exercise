import { Fragment } from 'react';
import ChallengeCard from './ChallengeCard';
import { challenges } from './challenges';

export default function App() {
  const interviewer = challenges.some((c) => c.Solution);

  return (
    <main className="app">
      <header className="app-header">
        <h1>Frontend Challenges</h1>
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

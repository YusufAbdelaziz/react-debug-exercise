import { useState } from 'react';
import CodeCompare from './CodeCompare';
import type { Challenge } from './challenges';

// One challenge card. On `main` there is no Solution, so no toggle appears —
// the candidate just edits the file and the live demo hot-reloads.
// On `solution`, a Solution is provided, enabling the Candidate/Solution toggle.

export default function ChallengeCard({ c }: { c: Challenge }) {
  const [showSolution, setShowSolution] = useState(false);
  const hasSolution = !!c.Solution;
  const Active = showSolution && c.Solution ? c.Solution : c.Buggy;

  return (
    <section className="bug">
      <div className="bug-head">
        <span className="bug-n">{c.n}</span>
        <h3>{c.title}</h3>
        <span className="sev sev-med">{c.concept}</span>
        {hasSolution && (
          <div className="switch" role="group" aria-label="candidate or solution">
            <button className={!showSolution ? 'sw on-bad' : 'sw'} onClick={() => setShowSolution(false)}>
              Candidate
            </button>
            <button className={showSolution ? 'sw on-good' : 'sw'} onClick={() => setShowSolution(true)}>
              Solution
            </button>
          </div>
        )}
      </div>

      <p className="try"><strong>Task:</strong> {c.task}</p>
      <p className="muted small">
        Edit <code>{c.file}</code> and save — this demo hot-reloads instantly.
      </p>

      <div className={showSolution ? 'demo demo-good' : 'demo demo-bad'}>
        <div className="demo-tag">{showSolution ? 'SOLUTION' : 'LIVE'}</div>
        <Active />
      </div>

      {showSolution && c.why && (
        <>
          <p className="why"><strong>Why:</strong> {c.why}</p>
          {c.before && c.after && <CodeCompare before={c.before} after={c.after} />}
        </>
      )}
    </section>
  );
}

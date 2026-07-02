import { useState } from 'react';
import CodeCompare from './CodeCompare';
import type { Challenge } from './challenges';

// One challenge card. On `main` there is no Solution, so no toggle appears and
// the concept/cause stay hidden — the candidate just edits the file and the
// live demo hot-reloads. On `solution`, a Solution is provided, enabling the
// Candidate/Solution toggle and revealing the concept + why + fix.

export default function ChallengeCard({ c }: { c: Challenge }) {
  const [showSolution, setShowSolution] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const hasSolution = !!c.Solution;
  const Active = showSolution && c.Solution ? c.Solution : c.Buggy;

  return (
    <section className="bug">
      <div className="bug-head">
        <span className="bug-n">{c.n}</span>
        <h3>{c.title}</h3>
        {hasSolution && (
          <span className={`sev sev-${c.difficulty.toLowerCase()}`}>{c.difficulty}</span>
        )}
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

      {c.kind === 'build' ? (
        <>
          <p className="try"><strong>Task:</strong> {c.task}</p>
          {c.requirements && (
            <ul className="reqs">
              {c.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          )}
        </>
      ) : (
        <>
          <p className="try"><strong>Expected:</strong> {c.expected}</p>
          <p className="try"><strong>Actual:</strong> {c.actual}</p>
        </>
      )}
      <p className="muted small">
        Edit <code>{c.file}</code> and save — this demo hot-reloads instantly.
      </p>

      {c.hints && c.hints.length > 0 && (
        <div className="hints">
          <div className="hints-title">Hints for the candidate — reveal one at a time</div>
          {revealed > 0 && (
            <ol>
              {c.hints.slice(0, revealed).map((h, i) => <li key={i}>{h}</li>)}
            </ol>
          )}
          {revealed < c.hints.length ? (
            <button className="hint-btn" onClick={() => setRevealed((r) => r + 1)}>
              {revealed === 0 ? `Reveal first hint (${c.hints.length} total)` : `Reveal next hint (${revealed}/${c.hints.length} shown)`}
            </button>
          ) : (
            <span className="hints-done">All {c.hints.length} hints shown</span>
          )}
          {revealed > 0 && (
            <button className="hint-btn ghost" onClick={() => setRevealed(0)}>Hide</button>
          )}
        </div>
      )}

      <div className={showSolution ? 'demo demo-good' : 'demo demo-bad'}>
        <div className="demo-tag">{showSolution ? 'SOLUTION' : 'LIVE'}</div>
        <Active />
      </div>

      {showSolution && (
        <>
          {c.concept && <p className="why"><strong>Concept:</strong> {c.concept}</p>}
          {c.why && <p className="why"><strong>Why:</strong> {c.why}</p>}
          {c.before && c.after && <CodeCompare before={c.before} after={c.after} />}
          {c.notes && <p className="notes"><strong>Interviewer — what to look for:</strong> {c.notes}</p>}
        </>
      )}
    </section>
  );
}

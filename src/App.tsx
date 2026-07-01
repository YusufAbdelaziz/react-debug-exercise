import ChallengeCard from './ChallengeCard';
import { challenges } from './challenges';

export default function App() {
  const interviewer = challenges.some((c) => c.Solution);

  return (
    <main className="app">
      <header className="app-header">
        <h1>Frontend Challenges</h1>
        <p className="hint">
          Each card is an isolated bug testing one React concept. Open the named file,
          fix it, and <strong>save</strong> — the demo updates instantly (hot reload). No need
          to restart anything.
          {interviewer && ' · Interviewer view: use the Candidate/Solution toggle to reveal each fix.'}
        </p>
      </header>

      <div className="challenge-list">
        {challenges.map((c) => (
          <ChallengeCard key={c.n} c={c} />
        ))}
      </div>
    </main>
  );
}

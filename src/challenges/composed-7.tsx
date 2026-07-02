import { Component, useState } from 'react';
import { RenderBadge } from './_shared';

// TICKET — Background ticker (multi-component; Ticker is a class component)
// Expected: clicking "Stop" halts the ticking and the number stops rising.
// Actual:   after "Stop" the Ticker disappears but the number keeps going up.
// Fix the Ticker class. Edit only this file.

type TickerProps = { onTick: () => void };

class Ticker extends Component<TickerProps> {
  timer?: ReturnType<typeof setInterval>;

  componentDidMount() {
    this.timer = setInterval(() => this.props.onTick(), 1000);
  }

  render() {
    return (
      <div>
        <RenderBadge name="Ticker (class)" />
        <p>Ticking every second…</p>
      </div>
    );
  }
}

export default function Composed7() {
  const [running, setRunning] = useState(true);
  const [ticks, setTicks] = useState(0);
  return (
    <div>
      <RenderBadge name="Parent" />
      <p>Ticks: <strong>{ticks}</strong></p>
      <button onClick={() => setRunning((r) => !r)}>{running ? 'Stop' : 'Start'}</button>
      {running && <Ticker onTick={() => setTicks((t) => t + 1)} />}
    </div>
  );
}

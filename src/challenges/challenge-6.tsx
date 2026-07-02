import { Component } from 'react';

// TICKET — Greeting (class component)
// Expected: typing your name updates the greeting live.
// Actual:   typing throws an error and nothing updates (open the console).
// This is a class component. Edit only this file.

type State = { name: string };

export default class Challenge6 extends Component<Record<string, never>, State> {
  state: State = { name: '' };

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.name} placeholder="type your name" onChange={this.handleChange} />
        <p>Hello, <strong>{this.state.name || 'stranger'}</strong>!</p>
      </div>
    );
  }
}

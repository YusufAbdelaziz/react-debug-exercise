import { Component } from 'react';

// TICKET — Counter (class component)
// Expected: the "Add 3" button increases the count by 3.
// Actual:   each click only increases it by 1.
// This is a class component. Edit only this file.

type State = { count: number };

export default class Challenge3 extends Component<Record<string, never>, State> {
  state: State = { count: 0 };

  addThree = () => {
    for (let i = 0; i < 3; i++) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <div>
        <p>Count: <strong>{this.state.count}</strong></p>
        <button onClick={this.addThree}>Add 3</button>
      </div>
    );
  }
}

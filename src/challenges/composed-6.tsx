import { Component, useState } from 'react';
import { RenderBadge } from './_shared';

// TICKET — User + posts (multi-component; Posts is a class component)
// Expected: picking a different user loads that user's posts.
// Actual:   the header changes but the posts stay on the first user.
// The parent is fine — fix the Posts class. Edit only this file.

const NAMES: Record<number, string> = { 1: 'Ada', 2: 'Grace', 3: 'Linus' };

function fakeFetchPosts(userId: number): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve([`Post by ${NAMES[userId]} #1`, `Post by ${NAMES[userId]} #2`]), 300)
  );
}

type PostsProps = { userId: number };
type PostsState = { posts: string[] };

class Posts extends Component<PostsProps, PostsState> {
  state: PostsState = { posts: [] };

  componentDidMount() {
    fakeFetchPosts(this.props.userId).then((posts) => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <RenderBadge name="Posts (class)" />
        <p>Posts for <strong>{NAMES[this.props.userId]}</strong>:</p>
        <ul>{this.state.posts.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    );
  }
}

export default function Composed6() {
  const [userId, setUserId] = useState(1);
  return (
    <div>
      <RenderBadge name="UserPage" />
      <div className="row">
        {[1, 2, 3].map((id) => (
          <button key={id} onClick={() => setUserId(id)}>{NAMES[id]}</button>
        ))}
      </div>
      <Posts userId={userId} />
    </div>
  );
}

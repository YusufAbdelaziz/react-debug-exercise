import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// NOTE: React.StrictMode is intentionally OFF so effects run once and the
// app's behavior is predictable during the interview.
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

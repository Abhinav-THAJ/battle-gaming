import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const container = document.getElementById('root');

if (!container) {
  document.body.innerHTML = '<h1>Root element not found</h1>';
} else {
  try {
    const root = createRoot(container);
    root.render(<App />);
  } catch (err) {
    document.body.innerHTML = '<h1>Render Error</h1><pre>' + err + '</pre>';
  }
}

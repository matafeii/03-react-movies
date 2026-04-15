import 'modern-normalize';
import './style.css';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

const root = document.getElementById('app');

if (!root) {
  throw new Error('Root element not found');
}

const app = document.createElement('div');
root.appendChild(app);

createRoot(app).render(App({}));

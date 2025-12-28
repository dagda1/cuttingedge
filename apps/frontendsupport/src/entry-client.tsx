import '@cutting/component-library/styles.css';
import '@cutting/react-hook-form-components/styles.css';
import './global.css';
import './rehype.css';
import './styles.css';
import 'katex/dist/katex.min.css';

import { assert } from '@cutting/assert';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from './App';

const container = document.getElementById('root');

assert(!!container, 'no container at #root');

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  hydrateRoot(container, <App />);
}

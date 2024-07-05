import '@cutting/component-library/styles.css';

import { assert } from '@cutting/assert';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from './containers/App';

const container = document.getElementById('root');

assert(!!container, `no container at #root`);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  hydrateRoot(container, <App />);
}

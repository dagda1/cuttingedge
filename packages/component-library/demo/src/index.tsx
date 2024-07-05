import { assert } from '@cutting/assert';
import type { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

export const container = document.getElementById('root');

assert(!!container, `no container found for #root`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const root = createRoot(container);

const render = (Component: FunctionComponent) => {
  root.render(<Component />);
};

render(App);

if (import.meta.hot) {
  import.meta.hot.accept('./App', () => import('./App').then((m) => render(m.App)));
}

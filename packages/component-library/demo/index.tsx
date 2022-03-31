import type { ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

export const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const root = createRoot(container);

const render = (Component: ComponentType) => {
  root.render(<Component />);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => import('./App').then((m) => render(m.App)));
}

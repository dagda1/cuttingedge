import { createRoot } from 'react-dom/client';
import { App } from './App';
import { assert } from 'assert-ts';

const selector = 'root'

export const container = document.getElementById(selector);

assert(!!container, `no container for ${selector}`);

const root = createRoot(container);

const render = (Component: typeof App) => {
  root.render(<Component />);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => import('./App').then((m) => render(m.App)));
}

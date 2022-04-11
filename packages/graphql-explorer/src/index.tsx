import { createRoot } from 'react-dom/client';
import { App } from './containers/App/App';
import { assert } from 'assert-ts';

const selector = 'root';

export const container = document.getElementById(selector);

assert(!!container, `container with id ${selector} not found`);

const root = createRoot(container);

const render = (Component: typeof App) => {
  root.render(<Component />);
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App', () =>
    import('./containers/App/App').then((m) => {
      console.dir(m);
      render(m.App);
    }),
  );
}

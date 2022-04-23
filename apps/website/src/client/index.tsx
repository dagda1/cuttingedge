import { createRoot } from 'react-dom/client';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import { App } from '../containers/App';

const bootstrap = (Component: typeof App): void => {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = createRoot(container);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  root.render(<Component />);
};

if (typeof module.hot !== undefined) {
  bootstrap(App);
  module.hot?.accept('../containers/App', () => {
    import('../containers/App').then((m) => bootstrap(m.App));
  });
} else {
  loadableReady(() => {
    const root = document.getElementById('main');
    hydrate(<App />, root);
  });
}

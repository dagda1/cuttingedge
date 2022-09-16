import { createRoot } from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import { loadableReady } from '@loadable/component';

import { App } from '../containers/App';
import { assert } from 'assert-ts';

const bootstrap = (Component: typeof App): void => {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = createRoot(container);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  root.render(<Component />);
};

if (typeof import.meta.hot !== undefined) {
  bootstrap(App);
  import.meta.hot?.accept('../containers/App', () => {
    import('../containers/App').then((m) => bootstrap(m.App));
  });
} else {
  loadableReady(() => {
    const root = document.getElementById('main');

    assert(!!root, `no root element for main`);

    hydrateRoot(root, <App />);
  });
}

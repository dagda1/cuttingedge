import type { FC } from 'react';
import { render, Renderer } from 'react-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

import { App } from '../containers/App';

const bootstrap = (renderMethod: Renderer, Component: FC): void => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderMethod(<Component />, root);
};

if (typeof module.hot !== undefined) {
  bootstrap(render, App);
  module.hot?.accept('../containers/App', () => {
    import('../containers/App').then((m) => bootstrap(render, m.App));
  });
} else {
  loadableReady(() => bootstrap(hydrate, App));
}

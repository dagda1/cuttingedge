import ReactDOM from 'react-dom';
import type { FC } from 'react';
import { App } from './App';

const render = (Component: FC) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => import('./App').then((m) => render(m.App)));
}

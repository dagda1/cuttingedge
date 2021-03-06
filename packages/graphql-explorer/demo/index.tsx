import type { FC } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

export const root = document.getElementById('root');

const render = (Component: FC) => {
  ReactDOM.render(<Component />, root);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    import('./App').then((m) => render(m.App)).catch(console.error);
  });
}

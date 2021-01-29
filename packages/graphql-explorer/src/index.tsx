import ReactDOM from 'react-dom';
import type { FC } from 'react';
import { App } from 'src/containers/App/App';

export const root = document.getElementById('root');

const render = (Component: FC) => {
  ReactDOM.render(<Component />, root);
};

render(App);

if (module.hot) {
  module.hot.accept('src/containers/App/App', () =>
    import('src/containers/App/App').then((m) => {
      console.dir(m);
      render(m.App);
    }),
  );
}

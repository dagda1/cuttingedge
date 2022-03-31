import ReactDOM from 'react-dom';
import { App } from './containers/App/App';

export const root = document.getElementById('root');

const render = (Component: typeof App) => {
  ReactDOM.render(<Component />, root);
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

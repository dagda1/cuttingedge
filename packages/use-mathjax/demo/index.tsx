import ReactDOM from 'react-dom';
import { App } from './App';

const render = (Component: typeof App) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => import('./App').then((m) => render(m.App)));
}

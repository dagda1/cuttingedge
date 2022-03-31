import { createRoot } from 'react-dom/client';
import { App } from './App';

export const container = document.getElementById('root');

const root = createRoot(container);

const render = (Component: typeof App) => {
  root.render(<Component />);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => import('./App').then((m) => render(m.App)));
}

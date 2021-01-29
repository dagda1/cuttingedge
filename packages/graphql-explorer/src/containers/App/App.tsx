import '@cutting/component-library/dist/component-library.cjs.development.css';
import type { FC } from 'react';
import type { History } from 'history';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { Explorer } from 'src/containers/Explorer/Explorer';
import { ApplicationLayout } from '@cutting/component-library';

// import styles from './global.module.css';

const MainApp: FC = () => {
  return (
    <ApplicationLayout heading="@cutting/graphql-explorer">
      <Explorer />
    </ApplicationLayout>
  );
};

interface AppProps {
  history?: History;
}

export const App: FC<AppProps> = ({ history = createBrowserHistory() }) => {
  return (
    <Router history={history}>
      <Route path="/" component={MainApp} />
    </Router>
  );
};

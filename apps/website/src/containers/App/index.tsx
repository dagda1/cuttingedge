import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as styles from '~/assets/scss/global.css';
import { MainRoutes } from '~/routes';

export function App(): JSX.Element {
  return (
    <StrictMode>
      <span className={styles.hidden}></span>
      <Router>
        <MainRoutes />
      </Router>
    </StrictMode>
  );
}

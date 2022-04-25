import { StrictMode } from 'react';
import { MainRoutes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import * as styles from '../../assets/scss/global.css';
import '@cutting/component-library/styles.css';

console.log(styles);

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

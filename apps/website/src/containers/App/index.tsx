import '@cutting/component-library/styles.css';
import { StrictMode } from 'react';
import { MainRoutes } from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../assets/scss/global.css';

export function App(): JSX.Element {
  return (
    <StrictMode>
      <Router>
        <MainRoutes />
      </Router>
    </StrictMode>
  );
}

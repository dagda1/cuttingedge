require('../../assets/scss/global.module.scss');
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import { routes } from '../../routes';
import Helmet from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

export const App: React.FC = () => (
  <>
    <Helmet>
      <title>Cutting-Edge Solutions (Scotland)</title>
    </Helmet>
    <Router>
      <Switch>
        {routes.map(({ path, ...rest }) => (
          <Route key={path} path={path} {...rest} />
        ))}
      </Switch>
    </Router>
  </>
);

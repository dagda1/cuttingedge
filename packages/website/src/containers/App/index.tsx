require('../../assets/scss/global.module.scss');
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import { history } from '../../routes/history';
import { routes } from '../../routes';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { State } from '../../reducers/types';

export interface AppProps {
  store: Store<State>;
}

export const App: React.FC<AppProps> = ({ store }) => {
  return (
    <>
      <Helmet>
        <title>Cutting-Edge Solutions (Scotland)</title>
      </Helmet>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map(page => (
              <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />
            ))}
          </Switch>
        </ConnectedRouter>
      </Provider>
    </>
  );
};

require('../../assets/scss/global.scss');
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import { history } from '../../routes/history';
import { componentRoutes } from '../../routes';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { ScrollToTop } from '@cutting/connected-components';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { State } from '../../reducers/types';

export interface AppProps {
  store: Store<State>;
}

export class App extends React.Component<AppProps> {
  render() {
    const { store } = this.props;

    return (
      <>
        <Helmet>
          <title>Cutting-Edge Solutions (Scotland)</title>
        </Helmet>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <ScrollToTop>
              <Switch>
                {componentRoutes.map((page) => (
                  <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />
                ))}
              </Switch>
            </ScrollToTop>
          </ConnectedRouter>
        </Provider>
      </>
    );
  }
}

export default App;

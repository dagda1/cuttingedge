require('../../assets/scss/global.scss');
import * as React from 'react';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import history from '../../routes/history';
import { pages } from '../../routes';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { ScrollToTop } from '@cutting/connected-components';
import { Store } from 'redux';

export interface AppProps {
  store: Store<any>;
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
                <>
                  {pages.map(page => (
                    <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />
                  ))}
                </>
              </Switch>
            </ScrollToTop>
          </ConnectedRouter>
        </Provider>
      </>
    );
  }
}

export default App;

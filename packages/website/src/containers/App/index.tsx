require('../../assets/scss/global.scss');
import * as React from 'react';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import history from '../../routes/history';
import { pages } from '../../routes';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import { ScrollToTop } from '@cutting/connected-components';
import Helmet from 'react-helmet';
import { UniversalComponent } from '../../components/Universal';

const store = configureStore({}, history);

export class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>App Component | React Universal</title>
        </Helmet>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <ScrollToTop>
              <Switch>
                <>
                  {pages.map(page => (
                    <Route
                      key={page.path}
                      path={page.path}
                      component={(props: any) => <UniversalComponent page={page.componentPath} />}
                      exact={page.exact}
                    />
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

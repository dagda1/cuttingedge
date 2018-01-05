require('../../global.scss');
import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import history from '../../history';
import { pages } from '../../routes';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
/* import { Helmet } from 'react-helmet'; */

const store = configureStore({}, history);

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <>
              {pages.map(page => (
                <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />
              ))}
            </>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}
